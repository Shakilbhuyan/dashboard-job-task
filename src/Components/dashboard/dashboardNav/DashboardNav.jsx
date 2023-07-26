import React from 'react';
import { FaCog, FaPlus } from "react-icons/fa";

const DashboardNav = () => {
    return (
        <div className='lg:flex justify-around p-5 bg-[#FFFFFF]'>
            <div className='flex justify-center items-center gap-4'>
                <h2 className='text-2xl font-semibold'>Add New Post</h2>
                <p className='flex justify-center items-center gap-1'><FaPlus></FaPlus>Add Content</p>
                <p className='flex justify-center items-center gap-1'><FaCog></FaCog>Setting</p>
            </div>
            <div>
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
        </div>
    );
};

export default DashboardNav;