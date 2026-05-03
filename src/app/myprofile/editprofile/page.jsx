"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const EditProfile = () => {
    const { register,
        handleSubmit,
        formState: { errors } } = useForm();

    const handUpdateFunc = async (data) => {
        const { name, photo } = data
        await authClient.updateUser({
            image: photo,
            name: name,
        })
            toast.success("Profile Update Successfull"); 
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Update your profile</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handUpdateFunc)} >
                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Update Name: </legend>
                        <input type="name"
                            className='input'
                            placeholder='Enter your name'
                            {...register("name", { required: "Name field is required" })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Update Photo URL: </legend>
                        <input type="text"
                            className='input'
                            placeholder='Paste your new profile image url'
                            {...register("photo", { required: "Photo URL field is required" })} />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>

                    <button className='btn w-full bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white'>Update Profile</button>
                </form>

            </div>
        </div>
    );
};

export default EditProfile;