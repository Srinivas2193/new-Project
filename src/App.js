import React from 'react';
import './App.css'
import {Routes, Route} from 'react-router-dom';

// Importing components....
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import Header from './components/Headerpage';
import About from './components/About';
import Footer from './components/Footerpage';
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';
import Home from './components/Homepage';
import Landing from './components/Landingpage';
// import Prefooter from './components/pre-footer';

function App() {
  return (
    <div className='mainContainer'>
    <Header />
         <br/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route  path='/feature1' element={<Feature1/>} />
        <Route  path='/feature2' element={<Feature2/>} />
        <Route  path='/feature3' element={<Feature3/>} />
        <Route  path='/about' element={<About />} />
        <Route  path='/signup' element={<Signup />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/contact' element={<Contact />} />
        <Route  path='/landing' element={<Landing />} />



      </Routes>
      {/* <Prefooter /> */}
      <Footer/>
    </div>
  );
}

export default App;
