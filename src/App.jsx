import React from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import {Navigate, Route,Routes} from "react-router-dom";

import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import ContactUs from './ContactUs';

import GotoTop from './GotoTop';

const App = () => {
  return (
<>
<Nav/>
<Routes>
<Route path="/" Component={Home}/>
<Route path="/products" Component={Products}/>
<Route path="/contact" Component={ContactUs}/>
<Route path="*" element={<Navigate to="/"/>}/> 
</Routes>
<GotoTop/>
</>
  )
};

export default App;