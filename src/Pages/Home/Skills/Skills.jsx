import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import Marquee from "react-fast-marquee";
import html51 from '../../../assets/html5.png';
import css31 from '../../../assets/css.png';
import bootstrap1 from '../../../assets/bootstrap.png';
import tailwind1 from '../../../assets/tailwind.png';
import javascript1 from '../../../assets/javascript.jpg';
import react1 from '../../../assets/react.png';
import firebase1 from '../../../assets/firebase.png';
import nodejs1 from '../../../assets/node.png';
import expressjs1 from '../../../assets/express.png';
import mongodb1 from '../../../assets/mongodb.png';
import github1 from '../../../assets/github.jpg';
import git1 from '../../../assets/git.png';
import nextjs1 from '../../../assets/nextjs.png'

const Skills = () => {
    return (
        <div className='bg-blue-950'>
            <div className='w-3/4 mx-auto p-5 bg-white'>
                <h1 className='text-3xl font-bold text-yellow-600 text-center'>My Technical Skills </h1>
                <Marquee>
                    <div >
                        <img className=' w-48 h-48 m-5 border-2 border-blue-950 rounded-lg p-2' src={html51} alt="" />
                    </div>
                    <div  >
                        <img className='w-48 h-48 m-5 border-2 border-blue-950 rounded-lg p-2' src={css31} alt="" />
                    </div>
                    <div >
                        <img className='w-48 h-48 m-5 border-2 border-blue-950 rounded-lg p-2' src={bootstrap1} alt="" />
                    </div>
                    <div >
                        <img className='w-48 h-48 m-5 border-2 border-blue-950 rounded-lg p-2' src={tailwind1} alt="" />
                    </div>
                    <div >
                        <img className='w-48 h-48 m-5 border-2 border-blue-950 rounded-lg p-2' src={javascript1} alt="" />
                    </div>
                    <div>
                        <img className='w-48 h-48  m-5 border-2 border-blue-950 rounded-lg p-2' src={react1} alt="" />
                    </div>
                    <div  >
                        <img className='w-48 h-48 m-5 border-2 border-blue-950 rounded-lg p-2' src={firebase1} alt="" />
                    </div>
                    <div  >
                        <img className='w-48 h-48  m-5 border-2 border-blue-950 rounded-lg p-2' src={nodejs1} alt="" />
                    </div>
                    <div  >
                        <img className='w-48 h-48 m-5 border-2 border-blue-950 rounded-lg p-2' src={expressjs1} alt="" />
                    </div>
                    <div>
                        <img className='w-48 h-48 m-5 border-2 border-blue-950 rounded-lg p-2' src={mongodb1} alt="" />
                    </div>
                    <div >
                        <img className='w-48 h-48 m-5 border-2 border-blue-950 rounded-lg p-2' src={github1} alt="" />
                    </div>
                    <div>
                        <img className='w-48 h-48 m-5 border-2 border-blue-950 rounded-lg p-2' src={git1} alt="" />
                    </div>
                    <div>
                        <img className='w-48 h-48  m-5 border-2 border-blue-950 rounded-lg p-2' src={nextjs1} alt="" />
                    </div>
                </Marquee>
                <div>
                    <h1 className='text-3xl font-bold text-center text-yellow-600 py-5'>Skills Progress</h1>
                    <div className='flex justify-center items-center' >
                        <img className=' w-24 h-24 m-5 border-2 border-blue-950 rounded-lg p-2 ' src={html51} alt="" />
                        <ProgressBar className='w-1/2 ' completed={88} bgColor="blue" animateOnRender={true} />

                    </div>
                    <div className='flex justify-center items-center'  >
                        <img className='w-24 h-24 m-5 border-2 border-blue-950 rounded-lg p-2' src={css31} alt="" />
                        <ProgressBar className='w-1/2 ' completed={92} bgColor="yellow" animateOnRender={true} />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-24 h-24 m-5 border-2 border-blue-950 rounded-lg p-2' src={bootstrap1} alt="" />
                        <ProgressBar className='w-1/2 ' completed = {82} bgColor = "orange" animateOnRender = {true} />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-24 h-24 m-5 border-2 border-blue-950 rounded-lg p-2' src={tailwind1} alt="" />
                        <ProgressBar className='w-1/2 ' completed = {93} bgColor = "green" animateOnRender = {true} />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-24 h-24 m-5 border-2 border-blue-950 rounded-lg p-2' src={javascript1} alt="" />
                        <ProgressBar className='w-1/2 ' completed = {71} bgColor = "gold" animateOnRender = {true} />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-24 h-24  m-5 border-2 border-blue-950 rounded-lg p-2' src={react1} alt="" />
                        <ProgressBar className='w-1/2 ' completed = {74} bgColor = "blue" animateOnRender = {true} />
                    </div>
                    <div  className='flex justify-center items-center'>
                        <img className='w-24 h-24 m-5 border-2 border-blue-950 rounded-lg p-2' src={firebase1} alt="" />
                        <ProgressBar className='w-1/2 ' completed = {62} bgColor = "yellow" animateOnRender = {true} />
                    </div>
                    <div  className='flex justify-center items-center'>
                        <img className='w-24 h-24  m-5 border-2 border-blue-950 rounded-lg p-2' src={nodejs1} alt="" />
                        <ProgressBar className='w-1/2 ' completed = {65} bgColor = "red" animateOnRender = {true} />
                    </div>
                    <div className='flex justify-center items-center' >
                        <img className='w-24 h-24 m-5 border-2 border-blue-950 rounded-lg p-2' src={expressjs1} alt="" />
                        <ProgressBar className='w-1/2 ' completed = {67} bgColor = "green" animateOnRender = {true} />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-24 h-24 m-5 border-2 border-blue-950 rounded-lg p-2' src={mongodb1} alt="" />
                        <ProgressBar className='w-1/2 ' completed = {70} bgColor = "orange" animateOnRender = {true} />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-24 h-24 m-5 border-2 border-blue-950 rounded-lg p-2' src={github1} alt="" />
                        <ProgressBar className='w-1/2 ' completed = {66} bgColor = "yellow" animateOnRender = {true} />
                   </div>
                    <div className='flex justify-center items-center'> 
                        <img className='w-24 h-24 m-5 border-2 border-blue-950 rounded-lg p-2' src={git1} alt="" />
                        <ProgressBar className='w-1/2 ' completed = {60} bgColor = "blue" animateOnRender = {true} />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-24 h-24  m-5 border-2 border-blue-950 rounded-lg p-2' src={nextjs1} alt="" />
                        <ProgressBar className='w-1/2 ' completed = {58} bgColor = "red" animateOnRender = {true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;