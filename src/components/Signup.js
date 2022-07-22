import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css'

// let Icon=<i className="bi bi-check-circle-fill"></i>

//style={formik.values.firstname === "" ? { border: "1px solid red" } : null }
// cnf password confirmation {formik.errors.cnfpassword ? <div className='text-1xl text-red-600'>{formik.errors.cnfpassword}</div> : null}
export default function Signup(){

    const formik= useFormik(
        {
            initialValues:{
                firstname:"",
                lastname:"",
                email:"",
                mobile:"",
                password:"",
                cnfpassword:""
            },
            onSubmit:(values)=>{
                values.preventDefault();
                // if(values.firstname && values.lastname && values.email && values.mobile && values.password && values.cnfpassword)
                // {
                //     console.log('Form values', values)
                // }
                // else
                // {
                //     alert("please fill out the fields")
                // }

            },
            validate:(values)=>
            {
                let errors={}

                if(!values.firstname)
                {
                    errors.firstname='Please enter firstname'
                }
                else if(!values.firstname.match(/^[a-z]+$/))
                {
                    errors.firstname='Name must be in alphabets only'

                }

                if(!values.lastname)
                {
                    errors.lastname='Please enter lastname'
                }
                else if(!values.lastname.match(/^[a-z]+$/))
                {
                    errors.lastname='Name must be in alphabets only'

                }

                if(!values.email)
                {
                    errors.email='Please enter email'
                }
                else if(!values.email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/))
                {
                    errors.email='email should be example@gmail.com format only'

                }
               
                if(!values.mobile)
                {
                    errors.mobile='Please enter mobile'
                }
                // else if(!values.mobile.match(/^(?=.*?[0-9]).{10,}$/))
                // {
                //     errors.mobile='please enter numbers(0-9)'
                // }

                if(!values.password)
                {
                    errors.password='Please enter password'
                }
                else if(!values.password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^$*-]).{8,}$/))
                {
                    errors.password='password should contain atleast min 8 Chars[abc..,ABC..,123..,@#$..]'
                }

                if(!values.cnfpassword)
                {
                    errors.cnfpassword='Please Re-enter password'
                }
                else if(values.password === values.cnfpassword)
                {
                    errors.cnfpassword = 'password Matched' 
                }
                else
                {
                    errors.cnfpassword="password and confirm password should be same"
                }
                return errors;
            }
        }
    );

    // console.log("Form Data", formik.values);
    // console.log(formik.values.firstname)

    let data = {
        fName:formik.values.firstname,
        Lname:formik.values.lastname,
        email:formik.values.email,
        mobile:formik.values.mobile,
        password:formik.values.password,
    }

    

        const onSubmit = (e)=>{

            if(formik.values.firstname && formik.values.lastname && formik.values.email && formik.values.mobile && formik.values.password && formik.values.cnfpassword)
            {
        let lsData = localStorage.getItem("userDataList");
        let parseData;
          if(lsData){
              parseData = JSON.parse(lsData);
          }else{
              parseData = [];
          }
        localStorage.setItem("userDataList", JSON.stringify([data,...parseData]));

        formik.handleSubmit();

    
          let formTags = document.forms[0];
          formTags.firstname.value = "";
          formTags.lastname.value = "";
          formTags.email.value = "";
          formTags.mobile.value = "";
          formTags.password.value = "";  
          formTags.cnfpassword.value = "";          

        }
        else{
            alert("please fill out the fields");

            e.preventDefault();
        }
        
    };



    return(
        <>
        <div className='container ml-20'>
    <form autoComplete='off' onSubmit={onSubmit}>
    <div className='columns-2 gap-28'>
            <label className='block'>First name</label>
            <br/>
            <input type='text' className='form-input  px-28 py-3 border-2 rounded-full outline-blue-400' placeholder='enter your firstname'
            values={formik.values.firstname}  onChange={formik.handleChange} name="firstname" id="firstname"
             /> <br/>
            <span>{formik.errors.firstname ? <div className='text-1xl text-red-600'>{formik.errors.firstname}</div> : null}</span>
            <br/>
            <label>Last name</label><br/><br/>
            <input type='text' className='form-input  px-28 py-3 border-2 rounded-full outline-blue-400' placeholder='enter your lastname'
            values={formik.values.lastname}  onChange={formik.handleChange} name="lastname" id="lastname" /><br/>
            <span>{formik.errors.lastname ? <div className='text-1xl text-red-600'>{formik.errors.lastname}</div> : null}</span>
            </div>
            <br/>
            <div className='columns-2 gap-28'>
            <label className='block'>Email</label>
            <br/>
            <input type='email' className='form-input  px-28 py-3 border-2 rounded-full outline-blue-400' placeholder='enter your email'
            values={formik.values.email}  onChange={formik.handleChange} name="email" id="email" /> <br/>
            <span>{formik.errors.email ? <div className='text-1xl text-red-600'>{formik.errors.email}</div> : null}</span>

            <br/>
            <label>Mobile</label><br/><br/>
            <input type='number' className='form-input px-28 py-3 border-2 rounded-full outline-blue-400' placeholder='enter mobile number'
            values={formik.values.mobile}  onChange={formik.handleChange} name="mobile" id="mobile" /> <br/>
            <span>{formik.errors.mobile ? <div className='text-1xl text-red-600'>{formik.errors.mobile}</div> : null}</span>

            </div>
            <br/>
            <div className='columns-2 gap-28'>
            <label className='block'>Password</label>
            <br/>
            <input type='password' className='form-input  px-9 py-3 border-2 rounded-full outline-blue-400' placeholder='enter your password' 
            values={formik.values.password} onChange={formik.handleChange} name="password" id="password" /> <br/>
            <span>{formik.errors.password ? <div className='text-1xl text-red-600'>{formik.errors.password}</div> : null}</span>

            <br/>
            <label>Confirm Password</label><br/><br/>
            <input type='password' className='form-input  px-9 py-3 border-2 rounded-full outline-blue-400' placeholder='Re-enter your password ' 
            values={formik.values.cnfpassword} onChange={formik.handleChange} name="cnfpassword" id="cnfpassword" /> <br/>
            
            {/* <span> {(formik.values.password === formik.values.cnfpassword) ? <div className='text-1xl text-orange-500'>password and confirm password must be same</div> : <div className='text-1xl text-green-500'>Matched</div> }</span> */}
            <span>{formik.errors.cnfpassword ? <div style={formik.values.cnfpassword ? {color:"green"} : {color:"red"}}> &nbsp;{formik.errors.cnfpassword}</div> : null }</span>

            </div>
            <br/>
            <br/>
            <button type='submit' className=" bg-blue-600 rounded-md px-4 py-1 text-2xl mb-5 text-white font-bold hover:ease-in duration-300" style={{marginLeft:"500px"}}>SignUp</button>
            <br/>
            <p className='text-1xl ml-96 mb-5'>If You Already Have An Account <Link className='text-blue-500' to="/login">Login</Link></p>
    </form>
        </div>
        </>
    )
 }