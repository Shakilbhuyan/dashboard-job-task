import React from 'react';

const SubFormTwo = () => {
    return (
        <div className='bg-[#FFFFFF] shadow-xl p-4'>
            <h2 className='text-3xl font-semibold mb-4'>Form title</h2>
            <div className='mb-4'>
                <label htmlFor="wholeWidth" className="block text-sm font-medium text-gray-700 mb-2">Lebel Title</label>
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
            </div>
            <div className='mb-4'>
                    <label htmlFor="dropdown" className="block mb-2 text-sm font-medium text-gray-700">Lebel Title</label>
                    <select id="dropdown" name="dropdown" className="select select-bordered w-full">
                        <option value="">Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className='mb-4'>
                <label htmlFor="textarea" className="block mb-2 text-sm font-medium text-gray-700">Level Title</label>
                <textarea id="textarea" name="textarea" className="textarea textarea-bordered w-full h-32" placeholder="Enter text"></textarea>
            </div>
            <button className="btn btn-primary">Button Title</button>
        </div>
    );
};

export default SubFormTwo;