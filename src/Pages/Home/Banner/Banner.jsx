import React from 'react';
import './Banner.css';
import Image from '../../.././assets/IMG_20220914_015840_066-removebg-preview.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactTyped from "react-typed";
import { FaDownload } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='bg-blue-950 p-4 lg:pl-20 lg:pr-12 md:flex flex-row-reverse justify-evenly items-center'>
            <div>
                <LazyLoadImage src={Image}
                    width={600} height={400}
                    alt="Image Alt"
                />
            </div>
            <div>
                <h1 className='text-5xl  font-semibold text-white'>Hi , I am <span className='text-yellow-600'>Rabiul Islam</span> </h1>
                <h3 className='text-4xl font-semibold text-white py-3'>I am  a <span className='text-yellow-600'><ReactTyped
                    strings={["Full Stack Developer", "Front End Developer", "Back End Developer"]}
                    typeSpeed={100}
                    loop
                    backSpeed={100}
                    cursorChar=">"
                    showCursor={true}
                /></span></h3>
                <p className='text-white pb-12'>I am passionate about web development , web design and coding </p>
                <button className='bg-white text-blue-950 font-semibold px-2 py-2 rounded-lg hover:bg-red-400'><a href="https://drive.google.com/file/d/1vtKwBypjts_Ci8BzVlgdvZyhvMOuFmQu/view?usp=drivesdk"><FaDownload className='inline'></FaDownload> Download My Resume </a></button>

            </div>


        </div>
    );
};

export default Banner;