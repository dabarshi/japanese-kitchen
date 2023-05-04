import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const {logInUserWithEmailAndPassword, signInWithGoogle, signInWithGithub} = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        if (password.length < 6) {
            setError("Password must be more than 6 character");
            return;
        }

        logInUserWithEmailAndPassword(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            const newUser = result.user;
            console.log(newUser);
        }).catch(error => {
            console.log(error)
        })
    }

    const handleGithubSignIn = () => {
        signInWithGithub().then(result => {
            const newUser = result.user;
            console.log(newUser)
        }).catch(error => {
            console.log(error)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-red-500 text-center'><small>{error}</small></p>
                        <p><small>New to here? <Link to="/register" className='link link-secondary'> Register Now.</Link></small></p>

                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline block mx-auto my-4 btn-wide">Google sign in</button>
                            <button onClick={handleGithubSignIn} className="btn btn-outline block mx-auto btn-wide">Github Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;