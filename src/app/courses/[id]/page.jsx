import { getCourseDetailsByID } from '@/lib/dataFetch';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiMobile4 } from 'react-icons/ci';
import { FaBookOpen, FaClock, FaInfinity, FaPlay, FaStar } from 'react-icons/fa';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { IoMdDownload } from 'react-icons/io';
import { TbCertificate2 } from 'react-icons/tb';

const CoursesDetails = async ({ params }) => {
    const { id } = await params;
    const courseDetails = await getCourseDetailsByID(id);

    return (
        <div className='bg-slate-800 px-3 py-12 container mx-auto flex gap-8 justify-around'>
            <div className='space-y-2'>
                <div className='flex gap-3'>
                    <p className='bg-blue-500 px-1 rounded-lg text-white'>{courseDetails.category}</p>
                    <p className='bg-purple-500 px-1 rounded-lg text-white'>{courseDetails.level}</p>
                </div>
                <h2 className='text-white text-4xl font-bold mt-10'>{courseDetails.title}</h2>
                <p className='text-[#b9bec8]'>{courseDetails.description}</p>
                <div className='text-[#b9bec8] flex gap-6'>
                    <p>rating: {courseDetails.rating}</p>
                    <p className='flex items-center gap-2'><FaClock /> {courseDetails.duration} hours</p>
                </div>
                <div className='mt-20 flex gap-4 items-center'>
                    <Image src={courseDetails.image} alt={courseDetails.instructor} width={40} height={40} className='rounded-full' />
                    <div>
                        <p className='text-[#b9bec8]'>Created by</p>
                        <h2 className='text-white'>{courseDetails.instructor}</h2>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg shadow shadow-taupe-300 text-center space-y-2'>
                <Image src={courseDetails.image} alt={courseDetails.title} width={400} height={300} className='w-full rounded-t-lg' />
                <h2 className='bg-linear-to-r from-[#155DFC] to-[#9810FA] bg-clip-text text-transparent text-4xl font-bold'>$89.9</h2> 
                <p className='text-[#6A7282]'>One-time payment, lifetime access</p>
                <div className='px-6'>
                    <button className='btn bg-linear-to-r from-[#155DFC] to-[#9810FA] rounded-md text-white w-full'>Enroll Now</button>
                </div>
                <div className='px-6 pb-4'>
                    <p className='flex items-center gap-2 text-[#6A7282]'><FaRegCirclePlay className='text-blue-500'/> {courseDetails.duration} hours video</p>
                    <p className='flex items-center gap-2 text-[#6A7282]'><FaBookOpen className='text-blue-500'/> 77 lessons</p>
                    <p className='flex items-center gap-2 text-[#6A7282]'><IoMdDownload className='text-blue-500'/> Downloadable resources</p>
                    <p className='flex items-center gap-2 text-[#6A7282]'><CiMobile4 className='text-blue-500'/> Mobile & TV access</p>
                    <p className='flex items-center gap-2 text-[#6A7282]'><FaInfinity className='text-blue-500'/> Lifetime access</p>
                    <p className='flex items-center gap-2 text-[#6A7282]'><TbCertificate2 className='text-blue-500'/> Certificate of completion</p>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;