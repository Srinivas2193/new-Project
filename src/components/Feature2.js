import React from 'react';
//images imports
import demat from './../assets/images/dematAc/demat.png';
import feature2 from './../assets/images/Svgs/Feature2.png';
import Userguide from './../assets/media/ODA_V2_PPC-Landing-Page.mp4';

export default function Feature2()
{

    return(
        <>
        <div>
            <h2 className='text-4xl ml-3 drop-shadow-xl'><span className='text-orange-500'>Free</span> Demat account</h2>
            <br/>
            <h3 className='text-2xl ml-6 text-blue-400'> What is a Demat Acoount ?</h3>
            <br/>

            <div className='columns-2 mb-6'>
            <p className='text-justify ml-10'>DEMAT Account is an account that facilitates the holding of shares and securities in electronic format. A DEMAT Account holds all the investments of an individual whether shares, ETFs, mutual funds, etc in one place. Initially, opening a DEMAT account was a time-consuming process, but with Angel One (formerly known as Angel Broking), it is easy and hassle-free. Open a free DEMAT account with Angel One today and enjoy a wide range of benefits.</p>
            {/* <iframe className='ml-32 w-80  h-44 drop-shadow-xl' src='https://w3assets.angelone.in/wp-content/uploads/2022/05/ODA_V2_PPC-Landing-Page.mp4' alt='how to open demat account'></iframe> */}
            
            <video className='ml-20' width="320" height="240" controls poster={demat}>
                <source src={Userguide} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            
            {/* <img className='ml-32 w-80  h-44 drop-shadow-xl hover:animate-bounce' src={demat} alt="demat account" /> */}
            </div>
            <div>
                <img className="drop-shadow-2xl ml-16 mb-5 mt-5" src={feature2} alt='btmoutline' height="300px" width="90%" />
            </div>
            <br/>
            <div>
                <h3 className='text-3xl ml-5 mb-2 text-blue-500'><span>Benefits</span> Deamt Account ?</h3>
                        <p className='ml-7'>These are some of the advantages of a Demat account:</p>
                        <br/>
                     <ol className='ml-10 list-decimal mb-6'>
                        
                        <li>Lower risks</li>
                        <li>Easy holding</li>
                        <li>Odd lots</li>
                        <li>Reduced costs</li>
                        <li>Reduced time</li>
                    </ol>
            </div>

        </div>
        </>
    )
}