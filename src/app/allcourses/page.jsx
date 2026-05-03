"use client"
import { allCourses } from '@/lib/dataFetch';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaClock, FaSearch, FaStar } from 'react-icons/fa';


const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        allCourses().then(data => setCourses(data));
    }, []);


    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div className='bg-gray-100'>
            <div className=' px-3 bg-linear-to-r from-[#155DFC] to-[#9810FA] py-15 text-center'>
                <h2 className='text-white font-bold text-5xl'>Explore All Courses</h2>
                <p className='text-white'>Discover your next learning adventure from our extensive course library</p>
            </div>
            <div className='bg-gray-100 px-8 container mx-auto py-12 '>
                <p className='flex items-center text-2xl gap-2'><FaSearch /> Search Courses </p>
                <label className="input w-full">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search"
                        required placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                </label>

                <div className='mt-8'>
                    <p className='text-[#4A5565]'>Showing <span className='text-black font-semibold'>{filteredCourses.length}</span> courses</p>

                    {
                        filteredCourses.length === 0 ?
                            (

                                <div className="text-center mt-10">
                                    <h2 className="text-2xl font-semibold text-gray-600">
                                        No courses found
                                    </h2>
                                    <p className="text-gray-500 mt-2">
                                        Try searching with different keywords
                                    </p>
                                </div>

                            ) :
                            (
                                <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                    {
                                        filteredCourses.map((courses) => {
                                            return (
                                                <div key={courses.id} className='relative shadow-xl border border-slate-300 rounded-2xl bg-white'>
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
                                                            <p className='bg-linear-to-r from-[#155DFC] to-[#9810FA] bg-clip-text text-transparent'>${courses.price}</p>
                                                        </div>

                                                        <Link href={`courses/${courses.id}`}><button className='btn w-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white mt-4'>View Details</button></Link>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        )
                                    }
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCourses;