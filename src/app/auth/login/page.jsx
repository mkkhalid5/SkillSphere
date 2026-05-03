"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const {register, 
    handleSubmit,
    formState: {errors} } = useForm();

    const handleLoginFunc = (data) => {
        console.log("data",data);
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Welcome Back! <br />Login your account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Email Address: </legend>
                        <input type="email"
                         className='input'
                         placeholder='Enter your email' 
                         {...register("email",{ required: "Email field is required" })}/>
                         {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Password: </legend>
                        <input type="text"
                         className='input'
                         placeholder='Enter your password'
                         {...register("password",{ required: "Password field is required" })} />
                         {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <button className='btn w-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white'>Login</button>
                </form>
                <p>Don`t have an account? <Link href={"/auth/signup"} className='text-blue-500 mt-4'>Signup</Link></p>
            </div>
        </div>
    );
};

export default Login;