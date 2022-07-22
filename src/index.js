import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import './../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
