import Image from 'next/image';
import React from 'react';
import { FaArrowRight, FaClock, FaStar } from 'react-icons/fa';
import banner from '@/assests/banner.png'
import Link from 'next/link';
import { allCourses } from '@/lib/dataFetch';

const PopularCourses = async () => {
    const courses = await allCourses();
    const popularCourses = [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3);
    console.log("pc:", popularCourses);
    return (
        <div className='py-20 px-3 container mx-auto'>
            <h2 className='text-4xl font-bold text-center'>Popular Courses</h2>
            <p className='text-center'>Explore our most loved courses, trusted by thousands of students worldwide</p>

            <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    popularCourses.map((courses) => {
                        return (
                            <div key={courses.id} className='relative shadow-xl border border-slate-300 rounded-2xl'>
                                <p className='absolute right-3 top-2 bg-linear-to-r from-[#155DFC] to-[#9810FA] px-2 rounded-md text-white bg-green-200 w-max'>{courses.level}</p>
                                <Image src={courses.image} alt={courses.title} height={300} width={400} className='w-full rounded-t-2xl' />
                                <div className='p-4 space-y-1'>
                                    <h2>{courses.title}</h2>
                                    <p className='text-[#4A5565]'>{courses.instructor}</p>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-3'>
                                            <p className='flex items-center text-[#4A5565] gap-2'><FaStar className='text-yellow-500' /> {courses.rating}</p>
                                            <p className='flex items-center gap-2 text-[#4A5565]'><FaClock /> {courses.duration} hours</p>
                                        </div>
                                        <p className='bg-linear-to-r from-[#155DFC] to-[#9810FA] bg-clip-text text-transparent'>$100</p>
                                    </div>

                                    <Link href={`courses/${courses.id}`}><button className='btn w-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white mt-4'>View Details</button></Link>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
            <div className='flex justify-center'>
                <Link href={"/allcourses"}><button className='mt-4 flex items-center p-2 btn rounded-md gap-1'>View All Courses <FaArrowRight /></button></Link>
            </div>
        </div>
    );
};

export default PopularCourses;