import React from 'react';

const Services = () => {
    return (
        <div className='bg-blue-950'>
            <h1 className='text-5xl font-bold text-yellow-600 py-8 text-center'>Services</h1>
            <div className="md:flex gap-5 w-3/4 mx-auto bg-white justify-center items-center p-3 rounded-lg"> 
                <div className='border-2 border-blue-950 p-3 rounded-lg h-68 w-68'>
                    <h1 className='text-2xl font-semibold text-cyan-950 py-2'>
                        Website Development
                    </h1>
                    <p className='text-black font-semibold'>
                        I am expert on creating custom website by full stack .I can make design also front end and the back end development also. I can try to contain the best quality on my projects.I also try to maintain the best feature on my website. 
                    </p>
                </div>
                <div className='border-2 border-blue-950 p-3 rounded-lg h-68 w-68'>
                    <h1 className='text-2xl font-semibold text-cyan-950 py-2'> Custom Web Design </h1>
                    <p className='text-black font-semibold'>
                        I can make website on the customer desire design .The client can change any design as they want .I am  try my level best for to full fill the customer expectation.
                    </p>
                </div>
                <div className='border-2 border-blue-950 p-3 rounded-lg h-68 w-68'>
                    <h1 className='text-2xl font-semibold text-cyan-950 py-2'>Responsive Web Design </h1>
                    <p className='text-black font-semibold'>
                        Now a days the number of mobile or tab user are increase day by day.So on the basis of this topic we make our design mobile phone  responsive .so the user can use this web site easily on their mobile phone without facing any kind of problem .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;