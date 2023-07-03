import React from 'react';
import './Projects.css';
import { FaGithub } from "react-icons/fa";
import recipe1 from '../../../assets/recepi1.png';
import recipe2 from '../../../assets/recepi2.png';
import recipe3 from '../../../assets/recepi3.png';
import recipe4 from '../../../assets/recepi4.png';
import recipe5 from '../../../assets/recepi5.png';
import toy1 from '../../../assets/toy1.png';
import toy2 from '../../../assets/toy2.png';
import toy3 from '../../../assets/toy3.png';
import toy4 from '../../../assets/toy4.png';
import summer1 from '../../../assets/summer1.png';
import summer2 from '../../../assets/summer2.png';
import summer3 from '../../../assets/summer3.png';
import summer4 from '../../../assets/summer4.png';
const Projects = () => {
    return (
        <div className='bg-blue-950'>
            <h1 className='text-5xl font-bold text-yellow-600 text-center py-12'>Projects</h1>
            <div className='w-3/4 mx-auto p-5 bg-white rounded-lg'>
                <div className='border-2 border-blue-950 p-4 my-5 rounded-lg'>
                    <h1 className='text-3xl font-semibold text-cyan-950 py-3'>Great Recipe Great Chef</h1>
                    <div className='container py-3'>
                         <img src={recipe1} alt="" />
                         <img src={recipe2} alt="" />
                         <img src={recipe3} alt="" />
                         <img src={recipe4} alt="" />
                         <img src={recipe5} alt="" />
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'> some food recipe and best chef based website.</h4>
                        <p className='text-black font-semibold'>
                            <span className='text-xl font-semibold text-cyan-950'>Feature:</span>
                            <br />
                            1.Data can be viewed by loged in through firebase authentication.
                            <br />
                            2.Ideas on the best cef and its special recipes and the rating of their recipes and details of making process of these recipes.
                            <br />
                            3.Each page's route is set separately through React Router
                        </p>
                        <h5 className='text-cyan-950 text-xl font-semibold'>Technologies:</h5>
                        <p className='text-black font-semibold'>
                            Html , react , react-bootstrap , react-router-dom , firebase , express.js , vercel etc.

                        </p>
                    </div>
                    <button className='bg-rose-800 text-white font-semibold px-2 py-1 rounded-lg mr-2'><a href="https://github.com/rabiulislam13579/great-recipe-great-chef-client">GitHub Client <FaGithub className='inline'></FaGithub></a></button>
                    <button className='bg-rose-800 text-white font-semibold px-2 py-1 rounded-lg mr-2'><a href="https://github.com/rabiulislam13579/great-recipe-great-chef-server">GitHub Server <FaGithub className='inline'></FaGithub></a></button>
                    <button className='bg-rose-800 text-white font-semibold px-2 py-1 rounded-lg mr-2'><a href="https://great-recipe-great-chef-client.web.app/">Live site</a></button>
                </div>
                <div className='border-2 border-blue-950 p-4 my-5 rounded-lg'>
                    <h1 className='text-3xl font-semibold text-cyan-950 py-3'>Toy Shop</h1>
                    <div  className='container py-3'>
                        <img src={toy1} alt="" />
                        <img src={toy2} alt="" />
                        <img src={toy3} alt="" />
                        <img src={toy4} alt="" />

                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'> Fun Toys For Your Kids</h4>
                        <h3 className='text-xl font-semibold text-cyan-950'>Features:</h3>
                        <p className='text-black font-semibold'>
                            1. To add toys you have to log in first.
                            <br />
                            2.User can search his desirable toys from all toys.
                            <br />
                            3. Adding toys are found in my toys route.My toys route are in private route in through firebase
                            authentication.
                        </p>
                        <h5 className='text-cyan-950 text-xl font-semibold'>Technologies:</h5>
                        <p className='text-black font-semibold'>
                            Html , react , react-bootstrap , react-router-dom , firebase , express.js , vercel etc.

                        </p>
                    </div>
                    <button className='bg-rose-800 text-white font-semibold px-2 py-1 rounded-lg mr-2'><a href="https://github.com/rabiulislam13579/toy-shop-client">GitHub Client <FaGithub className='inline'></FaGithub></a></button>
                    <button className='bg-rose-800 text-white font-semibold px-2 py-1 rounded-lg mr-2'><a href="https://github.com/rabiulislam13579/toy-shop-server">GitHub Server <FaGithub className='inline'></FaGithub></a></button>
                    <button className='bg-rose-800 text-white font-semibold px-2 py-1 rounded-lg mr-2'><a href="https://toy-shop-client-9f0a0.web.app/">Live site</a></button>
                </div>
                <div className='border-2 border-blue-950 p-4 my-5 rounded-lg'>
                    <h1 className='text-3xl font-semibold text-cyan-950 py-3'>Summer School</h1>
                    <div  className='container py-3'>
                        <img src={summer1} alt="" />
                        <img src={summer2} alt="" />
                        <img src={summer3} alt="" />
                        <img src={summer4} alt="" />

                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'> Teacher and their classes based website.</h4>
                        <h3 className='text-xl font-semibold text-cyan-950'>Features:</h3>
                        <p className='text-black font-semibold'>
                            1. To know how many teacher are avilabe and how many student can admit here you can see by logged in.
                            <br />
                            2 .The dashboard is displayed when the admin is logged in , and the admin can make any user as admin.
                            <br />
                            3 .Here has a payment section .Student can pay their enrolled class fee.
                        </p>


                    </div>
                    <button className='bg-rose-800 text-white font-semibold px-2 py-1 rounded-lg mr-2'><a href="https://github.com/rabiulislam13579/summer-school-client">GitHub Client <FaGithub className='inline'></FaGithub></a></button>
                    <button className='bg-rose-800 text-white font-semibold px-2 py-1 rounded-lg mr-2'><a href="https://github.com/rabiulislam13579/summer-school-server">GitHub Server <FaGithub className='inline'></FaGithub></a></button>
                    <button className='bg-rose-800 text-white font-semibold px-2 py-1 rounded-lg mr-2'><a href="https://summer-school-3aa91.web.app/">Live site</a></button>
                </div>
            </div>
        </div>
    );
};

export default Projects;