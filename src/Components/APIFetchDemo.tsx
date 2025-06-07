import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. API Fetching Demo with Real Data
const APIFetchDemo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

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
      <div className="text-green-400 font-mono text-sm mb-4">// Async/Await API Integration</div>
      
      <div className="mb-4 h-24">
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-2"
            >
              <div className="text-yellow-400 font-mono text-sm">{steps[currentStep]}</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-blue-500 h-2 rounded-full"
                  animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default APIFetchDemo;