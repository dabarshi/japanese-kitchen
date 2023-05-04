import React from 'react';

const Blog = () => {
    return (
        <div className='bg-base-100 h-screen md:mx-32 my-4 p-4'>
            <h1 className='text-3xl font-semibold my-4'>Tell us the differences between uncontrolled and controlled components.</h1>
            <p>controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>

            <h1 className='text-3xl font-semibold my-4'>How to validate React props using PropTypes</h1>

            <p> Here are some props validators.
                PropTypes.any: The prop can be of any data type
                PropTypes.bool: The prop should be a Boolean
                PropTypes.number: The prop should be a number
                PropTypes.string: The prop should be a string
                PropTypes.func: The prop should be a function
                PropTypes.array: The prop should be an array
                PropTypes.object: The prop should be an object
                PropTypes.symbol: The prop should be a symbol</p>

            <h1 className='text-3xl font-semibold my-4'>Tell us the difference between nodejs and express js.</h1>

            <p>Node. js is an open-source and cross-platform that is used to execute JavaScript code outside of a browser. Express. js is used to develop complete web applications such as single-page, multi-page, and hybrid web applications and APIs.</p>

            <h1 className='text-3xl font-semibold my-4'>What is a custom hook, and why will you create a custom hook?</h1>

            <p>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.The main reason to write a custom hook is for code reusability.</p>
        </div>
    );
};

export default Blog;