import React, { useContext } from 'react';
import cover from "../assets/images/cover.jpg";
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Banner = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="hero bg-red-100">
            <div className="hero-content flex-col lg:flex-row">
                <img src={cover} className="md:max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Welcome</h1>
                    <h2 className="text-3xl font-bold my-4">Japanese Kitchen</h2>
                    <p className="py-4">Best japanese chef with best recipes. Come choose your favourite chef and find the best recipes.</p>
                    {!user && <Link to="/register"><button className="btn btn-primary">Register Now !</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Banner;