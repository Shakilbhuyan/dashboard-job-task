'use client'
import React, { useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import Paginate from './Paginate';





const Table = () => {
    
       
    return (
        <div className='p-3'>
            <h2 className='text-2xl font-semibold'>Form title</h2>
            <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
            <p className='border border-red-400 p-2 bg-red-100 flex  gap-2 my-3'><FaExclamationCircle></FaExclamationCircle>Senectus malesuada suspendisse bibendum elit amet vitae.</p>
            <Paginate></Paginate>
           </div>
    );
};

export default Table;