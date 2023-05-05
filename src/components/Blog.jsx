import React, { useRef } from 'react';
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = useRef();
    return (
        <div>

            <div ref={ref} className='bg-base-100 h-screen md:mx-32 p-4'>
                <h1 className='text-center py-12 my-4 rounded bg-black text-white font-bold text-4xl'>Question And Answer Page</h1>
                <div className='px-8 pt-4'>
                    {/* First Question */}

                    <h1 className='text-xl'>Tell us the differences between uncontrolled and controlled components.</h1>
                    <p className='p-4 bg-slate-300 rounded my-2'>Controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>

                    {/* Second Question */}

                    <h1 className='text-xl'>How to validate React props using PropTypes</h1>

                    <p className='p-4 bg-slate-300 rounded my-2'>PropTypes are mechanism to check if the passed value of a props is of the correct datatype. To validate props by propTypes,
                        we have to install prop-types and import. propTypes are object with a key and a value pair where the `key` is the name of the prop while the value represent the type or class by which they are defined. They are often used after the the component end and stats with the name of the component.</p>

                    {/* Third Question */}

                    <h1 className='text-xl'>Tell us the difference between nodejs and express js.</h1>

                    <p className='p-4 bg-slate-300 rounded my-2'>Node. js is an open-source and cross-platform that is used to execute JavaScript code outside of a browser. Express. js is used to develop complete web applications such as single-page, multi-page, and hybrid web applications and APIs.</p>

                    {/* Fourth Question */}

                    <h1 className='text-xl'>What is a custom hook, and why will you create a custom hook?</h1>

                    <p className='p-4 bg-slate-300 rounded my-2'>A custom Hook is a JavaScript function whose name starts with use keyword. Inside a custom Hook we can use other hooks also. The main reason to write a custom hook is for code reusability. It helps to keep the code clean.</p>
                </div>

            </div>
            {/* Pdf generate Button */}
            <div className='text-center my-8'>
                <Pdf targetRef={ref} filename="qanda.pdf">
                    {({ toPdf }) => (
                        <button onClick={toPdf} className="btn">Generate pdf</button>
                    )}
                </Pdf>
            </div>
        </div>
    );
};

export default Blog;