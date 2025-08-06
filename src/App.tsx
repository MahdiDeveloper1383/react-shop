import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/Sign-up';
import AboutUs from './Pages/About-us';
import ContactUs from './Pages/Contact-us';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login/>}/>
        <Route path='sign-up' element={<SignUp/>}/>
        <Route path='about-us' element={<AboutUs/>}/>
        <Route path='contact-us' element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
