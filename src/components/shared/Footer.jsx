import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assests/logo.png'

const Footer = () => {
    return (
        <div className='bg-[linear-gradient(to_right,#101828_0%,#1E2939_50%,#101828_100%)]'>
            <div className='container mx-auto grid col-span-4'>
                <div className='flex justify-center items-center gap-2'>
                    <Image src={logo} alt={"SkillSphere"} width={40} height={40}></Image>
                    <Link href={"/"}><h2 className='bg-gradient-to-r from-[#155DFC] to-[#9810FA] bg-clip-text text-transparent font-bold text-2xl'>SkillSphere</h2></Link>
                    <p>Empowering learners worldwide with industry-leading courses and expert instructors.</p>
                    <div>
                        
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Footer;