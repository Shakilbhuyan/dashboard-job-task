import React from 'react';
import { FaExclamationCircle, FaFileSignature, FaTrash } from 'react-icons/fa';

const Table = () => {
    return (
        <div className='p-3'>
            <h2 className='text-2xl font-semibold'>Form title</h2>
            <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
            <p className='border border-red-400 p-2 bg-red-100 flex  gap-2 my-3'><FaExclamationCircle></FaExclamationCircle>Senectus malesuada suspendisse bibendum elit amet vitae.</p>
            <div className="overflow-x-auto mt-4">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Table title</th>
                            <th>Table Title</th>
                            <th>Table title</th>
                            <th>Table Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td><button className="btn btn-sm bg-blue-600 text-white"><FaFileSignature></FaFileSignature>Edit</button><button className="btn btn-sm bg-red-600 text-white"><FaTrash></FaTrash>Delete</button></td>
                            
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                            <td><button className="btn btn-sm bg-blue-600 text-white"><FaFileSignature></FaFileSignature>Edit</button><button className="btn btn-sm bg-red-600 text-white"><FaTrash></FaTrash>Delete</button></td>
                            
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                            <td><button className="btn btn-sm bg-blue-600 text-white"><FaFileSignature></FaFileSignature>Edit</button><button className="btn btn-sm bg-red-600 text-white"><FaTrash></FaTrash>Delete</button></td>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td><button className="btn btn-sm bg-blue-600 text-white"><FaFileSignature></FaFileSignature>Edit</button><button className="btn btn-sm bg-red-600 text-white"><FaTrash></FaTrash>Delete</button></td>
                            
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                            <td><button className="btn btn-sm bg-blue-600 text-white"><FaFileSignature></FaFileSignature>Edit</button><button className="btn btn-sm bg-red-600 text-white"><FaTrash></FaTrash>Delete</button></td>
                            
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                            <td><button className="btn btn-sm bg-blue-600 text-white"><FaFileSignature></FaFileSignature>Edit</button><button className="btn btn-sm bg-red-600 text-white"><FaTrash></FaTrash>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;