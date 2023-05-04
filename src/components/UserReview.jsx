import React from 'react';

const UserReview = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className='text-2xl font-bold'>Post Your Review</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Comments</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Write your comment"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;