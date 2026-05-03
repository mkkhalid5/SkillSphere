import Link from 'next/link';
import React from 'react';

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-xl text-gray-600 mt-4">Page not found</p>
            <p className="text-gray-500 mt-2">The page you`re looking for doesn`t exist or has been moved.</p>
            <Link href="/">
                <button className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">Go Home</button>
            </Link>
        </div>
    );
};

export default Error;