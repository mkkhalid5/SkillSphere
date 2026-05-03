"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';


const Signup = () => {

    const handleGooleSignin = async () => {
            const data = await authClient.signIn.social({
                provider: "google"
            })
        }
    const { register,
        handleSubmit,
        formState: { errors } } = useForm();
        const [isShowPassword, setIsShowPassword] = useState(false)

    const handleSignupFunc = async (data) => {

        const {name , email, password, photo} = data

        const { data:user, error } = await authClient.signUp.email({
            name: name,
            email: email, 
            password: password,
            image: photo,
            callbackURL: "/auth/login",
        });

        console.log("user",user);
        console.log("error",error);

        if(error){
            toast(error.message)
        }
        if(user){
            toast("Signup successfull")
        }
    };

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Create an account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleSignupFunc)}>
                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Full Name: </legend>
                        <input type="text"
                            className='input'
                            placeholder='Enter your name'
                            {...register("name", { required: "Name field is required" })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        
                    </fieldset>

                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Photo URL: </legend>
                        <input type="text"
                            className='input'
                            placeholder='Paste your profile photo url'
                            {...register("photo", { required: "Photo URL field is required" })} />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>

                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Email Address: </legend>
                        <input type="email"
                            className='input'
                            placeholder='Enter your email'
                            {...register("email", { required: "Email field is required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className='fieldset relative'>
                        <legend className='fieldset-legend'>Password: </legend>
                        <input type={isShowPassword ? "text" : "password"}
                            className='input'
                            placeholder='Enter your password'
                            {...register("password", { required: "Password field is required" })} />
                            <span className='absolute right-2 top-4 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye />:<FaEyeSlash />}</span>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    
                    </fieldset>
                    <button className='btn w-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white'>Login</button>
                </form>
                <p>Already have an account? <Link href={"/auth/login"} className='text-blue-500 mt-4'>Login</Link></p>

                 <button className='btn w-full mt-8' onClick={handleGooleSignin}><FaGoogle className='text-yellow-700'/> Login with google</button>
                            
            </div>
        </div>
    );
};

export default Signup;