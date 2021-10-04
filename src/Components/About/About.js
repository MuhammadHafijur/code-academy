import React from 'react';


const About = () => {
    return (
        <div className="">
            <h1 className="text-5xl font-medium">ABOUT US</h1>
<div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
    <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
            A FEW WORDS ABOUT US
            </span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
            The state of Utah in the united states is home to lots of beautiful National parks, Bryce national canion park ranks as three of the most magnificient &amp; awe inspiring.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
                <button type="button" className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get started
                </button>
            </div>
        </div>
    </div>
    <div className="flex items-center gap-8 p-8 lg:p-24">
        <img src="https://images.unsplash.com/photo-1512850183-6d7990f42385?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" className="rounded-lg w-1/2" alt="Tree"/>
        <div>
            <img src="https://www.sltrib.com/resizer/C_KfD477f1HsAsaM_nDddvPZ92Y=/1024x650/cloudfront-us-east-1.images.arcpublishing.com/sltrib/ISVRI4PEEZETJGMCKZLGZO6EJU.jpg" className="rounded-lg mb-8" alt="Tree"/>
            <img src="https://464697-1455876-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/02/automatska-skica105-750x422.jpg" className="rounded-lg" alt="Tree"/>
        </div>
    </div>
</div>

        </div>
    );
};

export default About;