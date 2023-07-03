import React from 'react';
import { useState } from 'react';
import { animate, delay, motion} from 'framer-motion';
import { render } from 'react-dom';

const About = () => {

    return (
        <div className='flex justify-center items-center bg-blue-950'>
            
                    <div className='w-1/2 h-1/2 py-52 px-2 '>
                    <motion.div whileHover={{ scale:2 }}
                      animate={{rotate:[0,200,200,0]}}
                      transition={{repeat:1, duration:3}}
                    >
                        <div className="content bg-white text-blue-950 p-2">
                            {/* Your page content goes here */}
                            <h1 className='text-3xl font-semibold text-center text-yellow-600'>About Me</h1>
                            <p className='text-xl font-semibold '>Hi , I am Rabiul Islam</p>
                            <p className='font-semibold text-black'>I am passionate about web development , web design and coding.I am currently studying in B.Sc. Engineering in EEE at Hajee Mohammad Danesh Science and Technology University,Dinajpur , Bangladesh. </p>
                            <br />
                            <p className='font-semibold text-black'>
                            I am hard worker and dedicated to my work.My hobbies are learning new skill, coding , explore the new technologies.I spend most of 
                            my daily time on them.My strength are adaptability , problem solving , strong communication , time management , creativity .I can  work  in any situation and under any kind of pressure .I hope it is the best strength of mine , and it also accelerate my work ability. 
                            </p>
                        </div>
                    </motion.div>
                    </div>
        </div>
    );
};
render(<About/>,document.getElementById("root"))
export default About;