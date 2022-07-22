import React from 'react';
import info from './../assets/images/landing.png';
import avatar1 from './../assets/images/avatar1.png';
import avatar2 from './../assets/images/avatar2.png';
import avatar3 from './../assets/images/avatar3.png';
import avatar4 from './../assets/images/avatar4.png';
import avatar5 from './../assets/images/avatar5.png';

export default function About()
{

    return(
        <>
        <div className='mt-5 '>
        <h2 className='text-3xl ml-72 text-gray-800'>We pioneered the discount broking model in India.</h2>
         <h2 className='text-3xl ml-72 text-gray-800'>Now, we are breaking ground with our technology.</h2>
        <br/>
        <img className='ml-72' src={info} alt='landing info' width='50%' height='300px' />

            <br/>
            
            <div className='columns-2'>
                    <p className='mx-6 text-justify'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.

                    Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India in terms of active retail clients.

                    Over 9+ million clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.

                    In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.

                    Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.

                    And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
            </div>
            <br/>
            <hr className='divide-blue-700'/>
            <br/>
            <h3 className='text-4xl text-black text-center font-bold'>People</h3>
            <br/>
            <div>
            <div className='columns-2'>
                <img className='inline-block ml-36 h-44 w-44 rounded-full ring-2 ring-white' src={avatar1} alt='avatar1 pic' />
                <p className='text-1xl text-justify mx-5 '>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.

                    He is a member of the SEBI Security Markets Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

                </p>
            </div>

            <br/>

            <div className='columns-2'> 
                <img className='inline-block ml-36 h-44 w-44 rounded-full ring-2 ring-white' src={avatar2} alt='avatar2 pic' />
                <p className='text-1xl text-justify mx-5'>Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.

                </p>
            </div>

            <br/>
            <div className='columns-2'>
                <img className='inline-block ml-36 h-44 w-44 rounded-full ring-2 ring-white' src={avatar3} alt='avatar3 pic' />
                <p className='text-1xl text-justify mx-5'>Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.Today, Zerodha has changed the landscape of the Indian broking industry.


                </p>
            </div>

            <br/>
            <div className='columns-2'>
                <img className='inline-block ml-36 h-44 w-44 rounded-full ring-2 ring-white' src={avatar4} alt='avatar4 pic' />
                <p className='text-1xl text-justify mx-5'>Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.Today, Zerodha has changed the landscape of the Indian broking industry.

                    He is a member of the SEBI Security Markets Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

                </p>
            </div>
            <br/>
            <div className='columns-2'>
                <img className='inline-block ml-36 h-44 w-44 rounded-full ring-2 ring-white' src={avatar5} alt='avatar5 pic' />
                <p className='text-1xl text-justify mx-5'>Seema worked with an international airline business for over 6 years before joining us. She uses her experience of liasing with people from various backgrounds to ensure that our ever expanding support team maintains highest quality. She is an extremely disciplined fitness enthusiast.
                n avid reader, he always appreciates a good game of chess.Today, Zerodha has changed the landscape of the Indian broking industry.

                </p>
            </div>
            <br/>


            </div>
        </div>
        </>
    )
}