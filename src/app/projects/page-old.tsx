import Header from '@/components/Header';
import Projects from '@/components/Projects';
import React from 'react';

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-[#3e1f47] text-white">
            <Header/>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5">
                <div className="">
                    <Projects/>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage; 