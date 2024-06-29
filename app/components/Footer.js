import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#004171] text-white  p-4 flex  items-center justify-center h-72">
            <div className="mr-12 items-center px-7">
                <h1 className='text-5xl font-mono'>SehatSaathi</h1>
                <img src="./vector2.png" alt="Logo" className='my-3 mx-auto' />
            </div>
            <div className=" flex-col  px-7">
                <h3 className="my-3 text-xl font-semibold">Contact us</h3>
                <h3 className="my-3 text-xl font-semibold">info@gmail.com</h3>
                <h3 className="my-3 text-xl font-semibold">+91 987 564 3874</h3>
            </div>
        </div>
    );
}

export default Footer;

