import React from 'react';
//images importing
import trading from './../assets/images/dematAc/onlinetrade.png' ;
import trading2 from './../assets/images/Svgs/trade2.png';
export default function Feature3()
{

    return(
        <>
        <div>
            <h2 className='text-orange-500 text-3xl mt-6 mb-6 ml-5'>E-Trade</h2>
            
            <img className='float-right w-96 h-44 m-4 drop-shadow-2xl hover:h-56 duration-300 ' src={trading} alt='trading online' />
            <p className='text-1xl text-gray-700 text-justify ml-6 mr-3 indent-16 '>E-Trade used to be a pioneer in the online investing world. Based out of Silicon Valley, the brokerage started offering online trade with the help of America Online (AOL) and Compuserve. And soon they launched one of the best stock trading apps – the E-Trade app.

            The app lets you view investments or enter trades for ETFs, stocks, and mutual funds, etc. </p>
            <br/>
            <p className='text-1xl text-gray-700 text-justify ml-6 mr-3 '>These are only the cream of the stock market business apps that you will be aiming to reach once you enter the space. The actual list of operative apps is much extensive. </p>
            <br/>
            <p className='text-1xl text-gray-700 text-justify ml-6 mr-3 '>Let us now look at the features set of fintech application development that would help you take the journey and reach the stage where the top stock trading apps are at. These features are your answer to how to develop a stock trading app similar to Robinhood and E-Trade. </p>
            <br/>
            <div className="drop-shadow-2xl ml-52 mb-10 box-border h-56 w-4/6 p-4 border-2">
                <h2 className='text-blue-600 text-3xl'><span className='text-orange-400 hover:font-bold ease-linear duration-300 '>Key</span> Points</h2>
                <br/>
                <ul className='list-disc ml-3'>
                    <li>When a user places the order for buying any particular stock on an online platform, his order gets saved in the database of the trading member platform and the exchange platform.</li>
                    <li>If the price matches with the user’s demands and he confirms the order, then the process is validated by both the parties.</li>
                    <li>Online platforms provide a far more inexpensive experience, which attracts a majority of traders and investors.</li>

                </ul>
            </div>
            <div>
            {/* hover:animate-bounce */}
                <img className='drop-shadow-2xl mb-5 mt-5 ml-16' width='90%' height='300px' src={trading2} alt='trading2' />
            </div>
            <br/>
            <div>
                <h2 className='text-blue-500 ml-5 text-3xl'> <span className='text-orange-500'>How</span> do you trade online?</h2>
                <br/>
                <ul className='list-disc ml-9 mb-5'>
                    <li className='text-1xl'><span className='text-1.5xl font-bold'>Researching and Choosing a Stock:</span> You should perform value research, technical analysis, try identifying patterns, understand short selling etc.</li>
                    <li className='text-1xl'><span className='text-1.5xl font-bold'>Choosing a Brokerage Partner:</span> You can see this article to learn how to choose the best broker.</li>
                    <li className='text-1xl'><span className='text-1.5xl font-bold'>Learning to Trade Stocks:</span>  You can learn to trade through a trading account and a demat account easily.</li>
                    <li className='text-1xl'><span className='text-1.5xl font-bold'>Making Smart Investment Decisions:</span>Try to decide which stocks you can afford to trade, diversify your portfolio, research before you invest and buy good stocks at a low price.</li>

                </ul>
            </div>
        </div>
        </>
    )
}