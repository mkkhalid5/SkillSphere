"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assests/logo.png'
import { FaArrowRight } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const NavBar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log("current", user);

    const router = useRouter();

    const handleClose = (e) => {
        e.currentTarget.blur();
    };

    const links = [
        <li key="home"><Link href="/" onClick={handleClose}>Home</Link></li>,
        <li key="courses"><Link href="/allcourses" onClick={handleClose}>Courses</Link></li>,
        <li key="profile"><Link href={user ? "/myprofile" : "/auth/login"} onClick={handleClose}>My Profile</Link></li>
    ];


    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto px-3 space-x-1 ">
                <div className="navbar-start">

                    <div className='flex justify-center items-center gap-2'>
                        <Image src={logo} alt={"SkillSphere"} width={40} height={40}></Image>
                        <Link href={"/"}><h2 className='bg-linear-to-r from-[#155DFC] to-[#9810FA] bg-clip-text text-transparent font-bold text-2xl'>SkillSphere</h2></Link>
                    </div>

                </div>
                <div className="navbar-center hidden md:flex text-2xl font-semibold">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-3">

                    {isPending ? (<span className="loading loading-spinner loading-xl"></span>
                    ) :
                        user ?
                            <div className='flex gap-4'>
                                <Image src={user?.image} alt={user?.name} height={40} width={40} className='rounded-full' />
                                <button className='btn' onClick={async () => await authClient.signOut({
                                    fetchOptions: {
                                        onSuccess: () => {
                                            router.push("/"); 
                                        },
                                    },
                                })}>Logout <FaArrowRight /></button>
                            </div> :
                            <div className='flex gap-4'>
                                <Link href={"/auth/login"}><button className='btn'>Login</button></Link>
                                <Link href={"/auth/signup"}><button className='btn'>Register</button></Link>
                            </div>}
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;