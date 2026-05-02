import Banner from '@/components/banner/Banner';
import LearningTips from '@/components/LearningTips/LearningTips';
import PopularCourses from '@/components/popularCourses/PopularCourses';
import TopInstructors from '@/components/topInstructor/TopInstructors';
import Trending from '@/components/TrendingCourses/Trending';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner />
            <PopularCourses />
            <Trending />
            <LearningTips />
            <TopInstructors />
        </div>
    );
};

export default page;