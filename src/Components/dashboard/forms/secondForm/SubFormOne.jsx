import React from 'react';
import { FaFlagUsa } from 'react-icons/fa';
import { BsFillMoonStarsFill} from "react-icons/bs";

const SubFormOne = () => {
    return (
        <div className='p-8 w-full bg-[#FFFFFF] shadow-xl mb-6'>
            <h2 className='text-3xl font-semibold'>Form title</h2>
            <p className='mb-4'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
            <div className='mb-4'>
                <label htmlFor="wholeWidth" className="block text-sm font-medium text-gray-700 mb-2">Lebel Title</label>
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
            </div>
            <div className='flex justify-between mb-4'>
                <div>
                    <label htmlFor="wholeWidth" className="block mb-2 text-sm font-medium text-gray-700">Lebel Title</label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                </div>
                <div>
                    <label htmlFor="wholeWidth" className="block mb-2 text-sm font-medium text-gray-700">Lebel Title</label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
                </div>
            </div>
            <div>
                <label htmlFor="textarea" className="block mb-2 text-sm font-medium text-gray-700">Level Title</label>
                <textarea id="textarea" name="textarea" className="textarea textarea-bordered w-full h-32" placeholder="Enter text"></textarea>
            </div>
        </div>
    );
};

export default SubFormOne;