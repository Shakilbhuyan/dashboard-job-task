import Image from 'next/image';
import React from 'react';
import img from '../../../public/canyon.jpg'

const LoginPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 lg:text-left">
                    <Image src={img} alt="this is image"></Image>
                    <button className="btn btn-xs"> <a href="/">Home</a> </button>
                </div>
                <div className="card  w-1/2 max-w-sm shadow-2xl p-4 bg-base-100">
                    <h1 className="text-3xl mr-4 mb-4 font-bold">Login now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <div className="divider">OR</div>
                            <button className="btn btn-outline btn-warning">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;