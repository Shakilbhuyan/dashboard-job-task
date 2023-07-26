import React from 'react';
import {  FaFileSignature, FaTrash } from 'react-icons/fa';

const Paginate = () => {
    return (
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
    );
};

export default Paginate;