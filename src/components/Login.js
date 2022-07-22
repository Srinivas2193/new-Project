import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  pasword: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
  console.log("Form data",initialValues);
  console.log("Form is submited");

};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "please enter your username";
  }
  if (!values.pasword) {
    errors.pasword = "please enter your password";
  }
  return errors;
};

export const Login = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });


  return (
    <div className="container ml-20">
      <h2 className="mb-5 text-3xl text-blue-700">Login</h2>

      <br />

      <label className="block">Username/Email</label>

      <br />
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          className="px-56 py-3 border-2 rounded-full form-input outline-blue-400"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="enter your name"
          name="name"
        />
        <div className="text-red-500">
          <p>{formik.errors.name ? <div>{formik.errors.name}</div> : null}</p>
        </div>
        <br />
        <label className="block">Password</label>
        <br />
        <input
          type="password"
          className="px-56 py-3 border-2 rounded-full form-input outline-blue-400"
          placeholder="enter your password"
          name="pasword"
        />
        <div className="text-red-500">
          {formik.errors.name ? <div>{formik.errors.name}</div> : null} <br />
        </div>
        <br />
        <input
          type="submit"
          className="px-4 py-1 mb-5 text-2xl font-bold text-white duration-300 bg-blue-600 rounded-md ml-7 hover:ease-in"
        />
      </form>

      <br />

      <p className="mb-5 text-1xl ml-96">
        If You Don't Have An Account ? &nbsp;
        <Link to='/signup' className="text-blue-500">
          Signup
        </Link>
      </p>
    </div>
  );
};
export default Login;



















// import React from 'react';
// import { Link } from 'react-router-dom';
// export default function Login()
// {

//     return(
//         <>
//         <div className='container ml-20'>
//             <h2 className='text-3xl text-blue-700 mb-5'>Login</h2>
//             <br/>
//             <label className='block'>Username/Email</label>
//             <br/>
//             <input type='text' className='form-input  px-56 py-3 rounded-full outline-blue-400' placeholder='enter your name' />
//             <br/>

//             <label className='block'>Password</label>
//             <br/>
//             <input type='password' className='form-input  px-56 py-3 rounded-full outline-blue-400' placeholder='enter your name' />
//             <br/>
//             <br/>
//             <button className=" bg-blue-600 rounded-md px-4 py-1 text-2xl mb-5 ml-7 text-white font-bold hover:ease-in duration-300" >Login</button>
//             <br/>
//             <p className='text-1xl ml-96 mb-5'>If You Don't Have An Account <Link className='text-blue-500' to="/login">Signup</Link></p>
//         </div>
//         </>
//     )
// }