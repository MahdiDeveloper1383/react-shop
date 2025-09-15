import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Shop/Home';
import Login from './Pages/Shop/Login';
import SignUp from './Pages/Shop/Sign-up';
import AboutUs from './Pages/Shop/About-us';
import ContactUs from './Pages/Shop/Contact-us';
import Product_deatails from './Pages/Shop/Product_Deatails';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/ProductContext';
import Cart_Shop from './Pages/Shop/Cart';
import ProtectedRoute from './Components/Admin/ProtectedRoute';
import AdminPanel from './Components/Admin/AdminPanel';

function App() {
  return (
    <React.Fragment>
    <CartProvider>
    <UserProvider>
    <BrowserRouter basename='/react-shop'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/product/:id' element={<Product_deatails/>}/>
        <Route path='/cart' element={<Cart_Shop/>}/>
        <Route path='/admin' element={
          <ProtectedRoute role='admin'>
          <AdminPanel/>
          </ProtectedRoute>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
    </CartProvider>
    </React.Fragment>
  );
}

export default App;
