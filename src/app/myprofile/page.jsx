"use client"
import { authClient } from '@/lib/auth-client';
import { redirect } from "next/navigation";
import React from 'react';

const MyProfile = () => {
    const { data: session} = authClient.useSession();

        if(!session){
            redirect('/auth/login')
        }
    return (
        <div>
            My profile
        </div>
    );
};

export default MyProfile;