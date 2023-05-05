import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Register = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { registerUserWithEmailAndPassword, updateUserInfo, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

// handleSubmit function handles form submission 
// on clicking on register button it takes the form value and validate input 
// then athenticates with firebase


    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError("Password must be more than 6 character");
            return;
        }

        // it calls the firebase function createUserWithEmailAndPassword 

        registerUserWithEmailAndPassword(email, password)
            .then(result => {
                const createUser = result.user;

                updateUserInfo(createUser, name, photo)
                    .then(() => { })
                    .catch(error => {
                        console.log(error)
                    });

                form.reset();
                navigate('/');
            })
            .catch(error => {
                if (error.message == "Firebase: Error (auth/email-already-in-use)."){
                    setError("Email Already Exist")
                }
                else(setError(error.message));
            })
    }

    // it handles google sign in

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            const newUser = result.user;
            navigate('/');
        }).catch(error => {
            setError(error.message)
        })
    }
// it handles github sign in 

    const handleGithubSignIn = () => {
        signInWithGithub().then(result => {
            const newUser = result.user;
            navigate('/');
        }).catch(error => {
            setError(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo" className="input input-bordered" />
                        </div>
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
                                <p className='text-red-500 text-center'><small>{error}</small></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p><small>Already have an account? <Link to="/login" className='link link-secondary'> Please Login.</Link></small></p>

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

export default Register;