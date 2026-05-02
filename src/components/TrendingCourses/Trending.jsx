import Image from 'next/image';
import React from 'react';
import { FaClock, FaStar } from 'react-icons/fa';
import banner from '@/assests/banner.png'
import Link from 'next/link';
import { allCourses } from '@/lib/dataFetch';

const Trending = async () => {
    const courses = await allCourses();
    const trendingCourses = [...courses].sort((a, b) => b.id - a.id).slice(0, 3);
    console.log("pc:", trendingCourses);
    return (
        <div className='bg-slate-200'>
            <div className='py-10 px-3 container mx-auto'>
                <h2 className='text-4xl font-bold text-center'>Trending Courses This Month</h2>
                <p className='text-center text-[#4A5565]'>Stay ahead with the latest and most in-demand courses</p>

                <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        trendingCourses.map((course) => {
                            return (
                                <div key={course.id} className='relative shadow-xl border border-slate-300 rounded-2xl'>
                                    <p className='absolute right-3 top-2 bg-linear-to-r from-[#155DFC] to-[#9810FA] px-2 rounded-md bg-green-200 w-max text-white'>{course.level}</p>
                                    <Image src={course.image} alt={course.title} height={300} width={400} className='w-full rounded-t-2xl' />
                                    <div className='p-4 space-y-1'>
                                        <h2>{course.title}</h2>
                                        <p className='text-[#4A5565]'>{course.instructor}</p>
                                        <div className='flex justify-between'>
                                            <div className='flex gap-3'>
                                                <p className='flex items-center text-[#4A5565] gap-2'><FaStar className='text-yellow-500' /> {course.rating}</p>
                                                <p className='flex items-center gap-2 text-[#4A5565]'><FaClock /> {course.duration} hours</p>
                                            </div>
                                            <p className='bg-linear-to-r from-[#155DFC] to-[#9810FA] bg-clip-text text-transparent'>$100</p>
                                        </div>

                                        <Link href={`courses/${course.id}`}><button className='btn w-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white mt-4'>View Details</button></Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Trending;