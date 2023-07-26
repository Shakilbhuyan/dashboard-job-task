import React from 'react';
import { FaShoppingBag, FaBox , FaChild, FaAlignRight} from 'react-icons/fa';

const Card = () => {
    return (
        <div className='grid lg:grid-cols-4 gap-2 my-4 p-3'>
            <div className="card w-52 bg-base-100 shadow-xl mb-2">
                <div className="flex justify-center items-center gap-2 p-7">
                    <div>
                       <span className='text-4xl text-red-600'> <FaShoppingBag></FaShoppingBag></span>
                    </div>
                    <div>
                    <p>Total sale</p>
                    <h2 className="card-title">$2,456</h2>
                    </div>
                </div>
            </div>
            <div className="card w-52 bg-base-100 shadow-xl mb-2">
                <div className="flex justify-center items-center gap-2 p-7">
                    <div>
                       <span className='text-4xl text-violet-600'> <FaBox></FaBox></span>
                    </div>
                    <div>
                    <p>Total Expense</p>
                    <h2 className="card-title">$3,326</h2>
                    </div>
                </div>
            </div>
            <div className="card w-52 bg-base-100 shadow-xl mb-2">
                <div className="flex justify-center items-center gap-2 p-7">
                    <div>
                       <span className='text-4xl text-green-600'> <FaChild></FaChild></span>
                    </div>
                    <div>
                    <p>Total Visitors</p>
                    <h2 className="card-title">$5,456</h2>
                    </div>
                </div>
            </div>
            <div className="card w-52 bg-base-100 shadow-xl">
                <div className="flex justify-center items-center gap-2 p-7">
                    <div>
                       <span className='text-4xl text-violet-600'> <FaAlignRight></FaAlignRight></span>
                    </div>
                    <div>
                    <p>Total Orders</p>
                    <h2 className="card-title">$1,456</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;