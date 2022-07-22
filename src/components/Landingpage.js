import React from 'react';
import Logo1 from './../assets/images/Logos/logo1.png';
import Landpic from './../assets/images/land.png'

export default function Landing()
{

    return(
        <>
        <div className=''>
            <div className='flex content-start'>
                <img className='drop-shadow-1xl w-34 h-10 px-28' src={Logo1} alt='logo1' />
                <h2 className='text-4xl text-blue-700 font-bold'><span className='text-orange-700'>i</span>Stocks</h2>
                 </div>
                 <br/>
                 <br/>

            <h1 className='text-7xl ml-12 text-orange-500 font-mono'>Stock</h1>
            <h2 className='text-4xl ml-12 font-bold text-blue-600'>exchnage data</h2>
            <br/>
            <br/>

            <div className='columns-2'>

            <p className='text-1xl text-gray-500 drop-shadow text-justify'>
            A stock market, equity market, or share market is the aggregation of buyers and sellers of stocks (also called shares), which represent ownership claims on businesses; these may include securities listed on a public stock exchange, as well as stock that is only traded privately, such as shares of private companies which are sold to investors through equity crowdfunding platforms. Investment is usually made with an investment strategy in mind.

            Trade in stock markets means the transfer (in exchange for money) of a stock or security from a seller to a buyer. This requires these two parties to agree on a price. Equities (stocks or shares) confer an ownership interest in a particular company.
            </p>
            <img className='flex content-end ' src={Landpic} alt='landingpic' />

            </div>
            <br/>
            <br/>

            <button className='bg-blue-900 ml-96 drop-shadow-xl text-white text-xl mb-5 font-bold px-10 py-3 hover:text-orange-500 rounded-2xl'>Get Started</button>
        </div>
        </>
    )
}