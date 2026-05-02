import Image from 'next/image';
import React from 'react';
import banner from '@/assests/banner.png'
import { FaStar } from 'react-icons/fa';
import { allCourses } from '@/lib/dataFetch';

const TopInstructors = async () => {
    const courses = await allCourses();
    const topInstructors = [...courses].sort((a, b) => b.rating - a.rating).slice(0, 4);

    return (
        <div className='bg-slate-200'>
            <div className='py-10 px-3 container mx-auto'>
                <h2 className='text-4xl font-bold text-center'>Top Instructors</h2>
                <p className='text-center text-[#4A5565]'>Learn from industry experts with years of real-world experience</p>

                <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        topInstructors.map((instructor) =>
                            <div key={instructor.id} className='shadow-lg rounded-2xl space-y-2 p-6 flex flex-col justify-center items-center bg-white'>
                                <Image src={banner} alt={"ins"} width={96} height={90} className='rounded-full w-20 h-20' />
                                <h2 className='font-semibold'>{instructor.instructor}</h2>
                                <p className='text-center text-[#4A5565]'>{instructor.title}</p>
                                <p className='flex items-center text-[#4A5565] gap-2'>Rating: <FaStar className='text-yellow-500' /> {instructor.rating}</p>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopInstructors;