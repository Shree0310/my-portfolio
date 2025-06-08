import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. API Fetching Demo with Real Data
const APIFetchDemo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com' }
  ];


  const steps = [
    "Initiating API call...",
    "fetch('https://jsonplaceholder.typicode.com/users')",
    "Parsing JSON response...",
    "Updating state with data...",
    "Rendering user list ✓"
  ];

  const fetchUsers = async () => {
    setLoading(true);
    setCurrentStep(0);
    setUsers([]);

    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data.slice(0, 3));
    } catch (error) {
      console.error('API Error:', error);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    const timer = setInterval(fetchUsers, 6000);
    fetchUsers();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="text-green-400 font-mono text-sm mb-4">// API Integration</div>
      
      {loading && (
        <div className="mb-4">
          <div className="text-yellow-400 font-mono text-sm">{steps[currentStep]}</div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <motion.div
              className="bg-blue-500 h-2 rounded-full"
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="space-y-2">
        {users.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 p-3 rounded flex items-center space-x-3"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
              {user.name[0]}
            </div>
            <div>
              <div className="text-white text-sm">{user.name}</div>
              <div className="text-gray-400 text-xs">{user.email}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default APIFetchDemo;