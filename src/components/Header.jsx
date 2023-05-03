import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="navbar max-w-7xl mx-auto bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Japanese Kitchen</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex justify-center items-center'>
                            {user.photoURL ?
                                <div className="avatar">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img title={user.displayName} src={user.photoURL} />
                                    </div>
                                </div>
                                : <FaUserCircle />
                            }
                            <button onClick={handleSignOut} className="btn ms-4">Sign Out</button>
                        </div>

                        :
                        <Link to="/login" className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;