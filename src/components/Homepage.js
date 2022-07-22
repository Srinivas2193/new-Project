import React from 'react';
import { Link } from 'react-router-dom';

// Importing images..
import homepic from './../assets/images/homepic.png'

export default function Home(){

    return(
        <>
        <div>
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-5">
            <p className="text-3xl text-orange-700 font-bold mb-5">
                Welcome!
            </p>
                <p className="text-blue-500 text-lg">
                Everything from equities and derivatives to mutual funds and fixed income.
                </p>
                <br/>
                <marquee className='text-1xl py-2 bg-blue-400 text-white hover:font-bold'>“The best way to measure your investing success is not by whether you’re beating the market but by whether you’ve put in place a financial plan and a behavioral discipline that are likely to get you where you want to go.”</marquee>
                <br/>
                <h2 className='text-4xl text-orange-500 text-center font-serif mt-3 hover:animate-bounce '><i className="bi bi-hand-thumbs-up-fill"></i> Good Luck For Your Better Future</h2>
                <br/>
                <img className='drop-shadow-2xl' src={homepic} alt="homeimg" />
    </div>

    <h3 className='text-2xl text-orange-600 mb-5 text-center hover:font-bold ease-in duration-300'>If you want to know more About Us <Link to='./signup' className='text-blue-500'>Signup</Link></h3>
        </div>
        </>
    )
}