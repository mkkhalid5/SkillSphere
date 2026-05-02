import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import banner from '@/assests/banner.png';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='bg-[linear-gradient(to_right,#EFF6FF_0%,#FAF5FF_50%,#FDF2F8_100%)]'>
            <div className='px-3 container mx-auto '>
                <div className='flex flex-col-reverse items-center md:flex-row md:items-start gap-2 py-10 justify-around '>
                    <div className='space-y-2'>
                        <h2 className='text-6xl font-bold'>Upgrade Your <br /> Skills <span className='bg-linear-to-r from-[#155DFC] to-[#9810FA] bg-clip-text text-transparent'>Today</span></h2>
                        <p>Learn from industry experts and master high- <br />demand skills like Web Development, Design,<br /> Marketing, and more. Start your journey to success <br /> today.</p>
                        <div className='flex gap-3'>
                            <Link href={"/allcourses"}><button className='flex items-center p-2 text-white bg-linear-to-r from-[#155DFC] to-[#9810FA] rounded-md gap-1'>Explore Courses <FaArrowRight /></button></Link>
                            <button className='btn rounded-md'>Start Learning Free</button>
                        </div>
                    </div>
                    <div>
                        <Image src={banner} alt={"banner-image"} width={400} height={300} className='rounded-lg'></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;