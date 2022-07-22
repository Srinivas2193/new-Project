import React from 'react';
import { Link } from 'react-router-dom';

// images importing 
import svg1 from './../assets/images/Svgs/svg1.png'
import svg2 from './../assets/images/Svgs/svg2.png'
import svg3 from './../assets/images/Svgs/svg1.png'
 
export default function Feature1()
{

    return(
        <>
        <div className='mb-10 mt-10'>
        <h2 className='text-3xl ml-56 text-gray-800'>Free equity investments and flat ₹20 intraday and F&O trades</h2>
        <br/>

        <div className='columns-3'>
            <div>
                <img src={svg1} className='ml-14 h-56 w-56 hover:h-72 duration-300' alt='svg1 pic' />
                <h2 className='text-3xl ml-10 text-black'>Free equity delivery</h2>
                <p className='text-1xl ml-8 mt-5 text-gray-800'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div>
            <img src={svg2} className='ml-14 h-56 w-56 hover:h-72 duration-300' alt='svg2 pic' />
            <h2 className='text-3xl ml-10 text-black'>Intraday and F&O trades</h2>
            <p className='text-1xl ml-8 mt-5 text-gray-800'>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
            </div>
            <div>
            <img src={svg3} className='ml-14 h-56 w-56 hover:h-72 duration-300' alt='svg3 pic' />
            <h2 className='text-3xl ml-10 text-black'>Free direct MF</h2>
            <p className='text-1xl ml-8 mt-5 text-gray-800'>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
            </div>
            <br/>
        

        </div>
            <div>
                <h2 className=' mt-11 text-4xl font-bold text-center'>Open An iStocks account</h2>
                <br/>
                <p className='text-center text-1xl text-gray-700'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <br/>
                <button className='bg-blue-600 text-white font-bold w-56 h-14 opacity-60 hover:opacity-100' style={{marginLeft:"500px",borderRadius:"7px"}}><Link to='/signup'>Sign Up Now</Link></button>
            </div>
            <div>
                <h3 className='text-3xl ml-5 mb-2 text-blue-500'>Brokerage calculator</h3>
                     <ul style={{listStyle:"disc"}} className='ml-8'>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    </ul>
            </div>
        </div>
        </>
    )
}