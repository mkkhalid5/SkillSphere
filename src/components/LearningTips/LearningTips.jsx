import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { GoGoal } from 'react-icons/go';
import { LuBrain } from 'react-icons/lu';
import { MdAccessTime } from 'react-icons/md';

const LearningTips = () => {
    return (
        
            <div className='py-10 px-3 container mx-auto'>
                <h2 className='text-4xl font-bold text-center'>Learning Tips & Best Practices</h2>
                <p className='text-center'>Master your learning journey with proven strategies and techniques</p>

                <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='shadow shadow-toupe-400 rounded-2xl space-y-2 p-6'>
                        <div className='w-15 h-15 flex items-center justify-center bg-blue-500 rounded-2xl text-white'>
                            <GoGoal />
                        </div>
                        <h2 className='font-semibold'>Set Clear Goals</h2>
                        <p className='text-[#4A5565]'>Define what you want to achieve and create a roadmap to reach your learning objectives.</p>
                    </div>

                    <div className=' shadow shadow-toupe-400 rounded-2xl space-y-2 p-6'>
                        <div className='w-15 h-15 flex items-center justify-center bg-purple-500 rounded-2xl text-white'>
                            <MdAccessTime />
                        </div>
                        <h2 className='font-semibold'>Time Management</h2>
                        <p className='text-[#4A5565]'>Dedicate consistent study time daily. Even 30 minutes can make a significant difference.</p>
                    </div>

                    <div className='shadow shadow-toupe-400 rounded-2xl space-y-2 p-6'>
                        <div className='w-15 h-15 flex items-center justify-center bg-orange-500 rounded-2xl text-white'>
                            <LuBrain />
                        </div>
                        <h2 className='font-semibold'>Active Learning</h2>
                        <p className='text-[#4A5565]'>Practice regularly, take notes, and apply concepts through projects and real-world examples.</p>
                    </div>

                    <div className='shadow shadow-toupe-400 rounded-2xl space-y-2 p-6'>
                        <div className='w-15 h-15 flex items-center justify-center bg-green-500 rounded-2xl text-white'>
                            <FaRegLightbulb />
                        </div>
                        <h2 className='font-semibold'>Stay Curious</h2>
                        <p className='text-[#4A5565]'>Ask questions, explore beyond the curriculum, and embrace challenges as learning opportunities.</p>
                    </div>
                </div>
            </div>
       
    );
};

export default LearningTips;