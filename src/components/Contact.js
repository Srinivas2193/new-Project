import React from 'react';
import { useFormik } from 'formik';


export default function Contact()
{
    const formik=useFormik(
    
        {
            initialValues:{
                name:"",
                email:"",
                mobile:"",
                address:"",
                message:""
            },
            onSubmit:(values)=>{

                values.preventDeafult();
                console.log("form values",values)
            },
            validate:(values)=>
            {
                let errors={};

                if(!values.name)
                {
                    errors.name='enter a valid name!'
                }
                if(!values.email)
                {
                    errors.email='enter a valid email!'
                }
                if(!values.mobile)
                {
                    errors.mobile='enter a valid email!'
                }
                if(!values.address)
                {
                    errors.address='enter a valid address!'
                }
                if(!values.message)
                {
                    errors.message='enter a valid message!'
                }

                return errors
            }
        }
    )

    console.log("contact data",formik.values)

    return(
        <>
        <div className='container ml-20 mb-5'>
            <h2 className='text-3xl text-blue-600 my-3'>Contact Us</h2>
            <br/>
            
            <form onSubmit={formik.handleSubmit}>
                <label className='block ml-16 mb-3 text-2xl text-orange-400' >Name</label> &nbsp;
                <input className='form-input  px-56 py-3 ml-14 border-2 rounded-md outline-blue-400'name='name' id="name" value={formik.values.name}   type='text' placeholder='enter your name' onChange={formik.handleChange} /><br/>
                <span>{formik.errors.name ? <div className='ml-14 text-orange-900'>{formik.errors.name}</div> : null}</span>
                <br/> <br/> 
                <label className='block ml-16 mb-3 text-2xl text-orange-400' >Email</label> &nbsp;
                <input className='form-input  px-56 py-3 ml-14 border-2 rounded-md outline-blue-400' name="email" id='email' value={formik.values.email}  type='text' placeholder='enter your email' onChange={formik.handleChange}  /> <br/>
                <span>{formik.errors.email ? <div className='ml-14 text-orange-900'>{formik.errors.email}</div> : null}</span>
                <br/> <br/> <label className='block ml-16 mb-3 text-2xl text-orange-400' >Mobile</label> &nbsp;
                <input className='form-input  px-56 py-3 ml-14 border-2 rounded-md outline-blue-400' name='mobile' id='mobile' value={formik.values.mobile} type='number' placeholder='enter your mobile number' onChange={formik.handleChange}   />
                <br/>
                <span>{formik.errors.mobile ? <div className='ml-14 text-orange-900'>{formik.errors.mobile}</div> : null}</span>                
                <br/> <br/> <label className='block ml-16 mb-3 text-2xl text-orange-400 text-clip' >Address</label> &nbsp;
                <textarea className='form-input  px-56 py-3 ml-14 rounded-md border-2 border outline-blue-400' name='address' id='address' value={formik.values.address} type='text' placeholder='enter your Address' onChange={formik.handleChange}  /><br/>
                <span>{formik.errors.address ? <div className='ml-14 text-orange-900'>{formik.errors.address}</div> : null}</span>
                <br/> <br/>  
                <br/><br/>
                <label className='block ml-16 mb-3 text-2xl text-orange-400' >Message</label> &nbsp;
                <textarea className='form-input  px-56 py-3 ml-14 rounded-md border-2 border outline-blue-400' name='message' id='message' value={formik.values.message} type='text' placeholder='enter your message' onChange={formik.handleChange}   /><br/>
                <span>{formik.errors.message ? <div className='ml-14 text-orange-900'>{formik.errors.message}</div> : null}</span>
                <br/> <br/> 
                 <button type='submit' className=" bg-blue-600 rounded-md px-5 py-2 text-2xl mb-5 mt-6 ml-20 text-white font-bold hover:ease-in duration-300">Submit</button>
                <br/> <br/> 
                <span className='text-center text-blue-500 text-2xl mt-5'>Thanks for contacting us ... </span>
            </form>
        </div>
        </>
    )
}