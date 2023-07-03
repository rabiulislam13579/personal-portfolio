import React from 'react';
import './Footer.css';
import moment from 'moment';
import { FaLinkedin, FaGithub ,FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (

        <footer className='bg-blue-950 text-white'>
            <div className="footer p-10 lg:pl-48">
                <div>
                    <h1 className='text-2xl font-semibold title'>Rabiul Islam</h1>
                    <h3>Web Developer</h3>
                    <div>
                        <button className='social'><a className='text-2xl text-blue-950' href="https://www.linkedin.com/in/rabiul-islam20022273/"><FaLinkedin></FaLinkedin></a></button>
                        <button className='social'><a className='text-2xl text-blue-950' href="https://github.com/rabiulislam13579"><FaGithub></FaGithub></a></button>
                        <button className='social'><a className='text-2xl text-blue-950' href="https://www.facebook.com/mdrabiul.islam.9216/?mibextid=ZbWKwL/"><FaFacebook></FaFacebook></a></button>
                        <button className='social'><a className='text-2xl text-blue-950' href="https://instagram.com/_md_rabiul_islam__?igshid=MzNlNGNkZWQ4Mg==/"><FaInstagram></FaInstagram></a></button>

                    </div>
                </div>
               
                <div>
                    <span className="text-2xl font-semibold ">Contact</span>
                    <p>email:</p>
                    <p>rabiul.islam2002273@gmail.com</p>
                    <p>phone:</p>
                    <p>+880 1852581825</p>
                </div>
                <div>
                    <span className="text-2xl font-semibold">Address</span>
                    <p>
                     4/17 , Bicik road                          
                    </p>
                    <p>
                       BasherHat, Dinajpur Sadar
                    </p>
                    <p>
                        Dinajpur , Bangladesh
                    </p>
                </div>
            </div>
            <div>
                <footer className="footer footer-center p-4">
                    <div>
                        <p>Copyright @ <span className='text-yellow-600'>{moment().format("YYYY")}</span> - All right reserved by Rabiul Islam</p>
                    </div>
                </footer>
            </div>
        </footer>

    );
};

export default Footer;