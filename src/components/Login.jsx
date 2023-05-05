import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {
    const [error, setError] = useState("");
    
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const {logInUserWithEmailAndPassword, signInWithGoogle, signInWithGithub} = useContext(AuthContext);

// it handles user login with email and password

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError("Password must be more than 6 character");
            return;
        }

        logInUserWithEmailAndPassword(email, password)
        .then(result => {
            const loggedUser = result.user;
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error => {
            if (error.message == "Firebase: Error (auth/wrong-password)."){
                setError("Please, enter correct password")
                return;
            }
            if (error.message == "Firebase: Error (auth/user-not-found)."){
                setError("Email does not match");
                return;
            }
            setError(error.message);
        })

    }

    // handle login with google

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            const newUser = result.user;
            navigate(from, {replace: true});
        }).catch(error => {
            setError(error.message)
        })
    }
// handle github login

    const handleGithubSignIn = () => {
        signInWithGithub().then(result => {
            const newUser = result.user;
            navigate(from, {replace: true});
        }).catch(error => {
            setError(error.message)
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

                    </form>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline block mx-auto my-4 btn-wide">Google sign in</button>
                            <button onClick={handleGithubSignIn} className="btn btn-outline block mx-auto btn-wide my-4">Github Sign In</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Login;