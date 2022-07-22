import React from 'react';
import { Link } from 'react-router-dom';

// logo importing ..
import logo1 from '././../assets//images/Logos/logo1.png';

export default function Header()
{

    return(
        <>
        <div className='mt-1'>
            <img className='w-44 h-10 ml-1' src={logo1} alt='logo1' style={{float:"left"}} />
        <h2 className='text-4xl text-center -mb-4 text-blue-400 hover:font-bold text-blue-700 ease-in duration-300 '>INSTOCKS..</h2>
         
            <br/>
            <ul className='flex bg-blue-300 text-2xl  gap-20 h-10'>
                <li className='ml-1 hover:font-bold text-black ease-in duration-300'><Link to='/feature1'>Feature1</Link></li>
                <li className='hover:font-bold text-black ease-in duration-300'><Link to='/feature2'>Feature2</Link></li>
                <li className='hover:font-bold text-black ease-in duration-300'><Link to='/feature3'>Feature3</Link></li>
                <li className='hover:font-bold text-black ease-in duration-300'><Link to='/about'>About</Link></li>
                <li className='hover:font-bold text-black ease-in duration-300'><Link to='/contact'>Contact Us</Link></li>
                <li className='hover:font-bold text-black ease-in duration-300'><Link to='/landing'>Landing</Link></li>



            </ul>
        </div>

        </>
    )
}