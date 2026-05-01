import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assests/logo.png'
import { FaFacebook, FaInstagram, FaLocationArrow, FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { CiLocationOn } from 'react-icons/ci';

const Footer = () => {
    return (
        <div className='bg-[linear-gradient(to_right,#101828_0%,#1E2939_50%,#101828_100%)] pt-10 px-10 md:px-3'>
            <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='space-y-4 text-[#D1D5DC]'>
                    <div className='flex items-center gap-2'>
                        <Image src={logo} alt={"SkillSphere"} width={40} height={40}></Image>
                        <Link href={"/"}><h2 className='bg-gradient-to-r from-[#155DFC] to-[#9810FA] bg-clip-text text-transparent font-bold text-2xl'>SkillSphere</h2></Link>
                    </div>
                    <p className=''>Empowering learners worldwide with industry-leading courses and expert instructors.</p>
                    <div className='flex gap-3'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>
                <div className='text-[#D1D5DC] space-y-4'>
                    <h2 className='font-bold text-xl text-white'>Quick Links</h2>
                    <ul className='space-y-40'>
                        <Link href={"/"}><li>Home</li></Link>
                        <Link href={"/allcourses"}><li>Courses</li></Link>
                        <Link href={"/myprofile"}><li>My Profile</li></Link>
                    </ul>
                </div>
                <div className='text-[#D1D5DC] space-y-4'>
                    <h2 className='font-bold text-xl text-white'>Legal</h2>
                    <ul className='space-y-4'>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='text-[#D1D5DC] space-y-4'>
                    <h2 className='font-bold text-xl text-white'>Contact Info</h2>
                    <ul className='space-y-4'>
                        <li className='flex items-center gap-2'><MdOutlineEmail className='text-blue-500'/> support@skillSphere.com</li>
                        <li className='flex items-center gap-2'><IoCallOutline className='text-blue-500'/> +88017 0000-0000</li>
                        <li className='flex items-center gap-2'><CiLocationOn  className='text-blue-500'/> Bangladesh</li>
                        
                    </ul>
                </div>
            </div>

            <hr className='text-[#D1D5DC] mt-8'/>
            <div className='flex justify-center items-center'>
                
                <h2 className='pt-8 pb-6 text-[#D1D5DC]'>© 2026 SkillSphere. All rights reserved. Made with ❤️ for learners worldwide.</h2>
            </div>
        </div>
    );
};

export default Footer;