"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from "next/navigation";
import React from 'react';

const MyProfile = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const date = new Date();
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md text-center">
                <div className="flex justify-center">
                    <Image
                        src={user?.image}
                        alt="user"
                        width={80}
                        height={80}
                        className="rounded-full border" />
                </div>
                <h2 className="text-2xl font-semibold mt-4">{user?.name || "User Name"}</h2>
                <p className="text-gray-500">{user?.email}</p>
                <div className="my-4 border-t"></div>
                <div className="text-left space-y-2">
                    <p><span className="font-medium">Role:</span> Student</p>
                    <p><span className="font-medium">createdAt: {date.toDateString()}</span></p>
                </div>

                <Link href={"/myprofile/editprofile"}><button className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">Edit Profile</button></Link>
            </div>
        </div>
    );
};

export default MyProfile;