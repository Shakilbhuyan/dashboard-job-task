import React from 'react';
import { FaFlagUsa } from 'react-icons/fa';
import { BsFillMoonStarsFill} from "react-icons/bs";

const FirstForm = () => {
    return (
        <div className='p-8 w-full bg-[#FFFFFF] shadow-xl'>
            <h2 className='text-3xl font-semibold'>Form title</h2>
            <p className='mb-4'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
            <div className='flex gap-2 mb-4'>
                <span className='flex w-24 border border-red-500 bg-yellow-400'><FaFlagUsa></FaFlagUsa>English</span>
                <span className='flex w-24 border border-red-500 bg-yellow-400'><BsFillMoonStarsFill></BsFillMoonStarsFill>Turkish</span>
            </div>
            <div className='mb-4'>
                <label htmlFor="wholeWidth" className="block text-sm font-medium text-gray-700 mb-2">Lebel Title</label>
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
            </div>
            <div className='flex justify-between items-center mb-4'>
                <div>
                    <label htmlFor="dropdown" className="block mb-2 text-sm font-medium text-gray-700">Lebel Title</label>
                    <select id="dropdown" name="dropdown" className="select select-bordered w-full">
                        <option value="">Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="wholeWidth" className="block text-sm mb-2 font-medium text-gray-700">Lebel Title</label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
                </div>
                <div>
                    <label htmlFor="wholeWidth" className="block text-sm mb-2 font-medium text-gray-700">Lebel Title</label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
                </div>
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

export default FirstForm;