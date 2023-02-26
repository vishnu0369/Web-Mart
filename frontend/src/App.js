import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import './index.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen.js';
import RegisterScreen from './Screens/RegisterScreen.js';
import ProfileScreen from './Screens/ProfileScreen.js';
import ShippingScreen from './Screens/ShippingScreen.js';
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import OrderListScreen from './Screens/OrderListScreen'
import UserListScreen from './Screens/UserListScreen';
import UserEditScreen from './Screens/UserEditScreen';
import ProductListScreen from './Screens/ProductListScreen';
import ProductEditScreen from './Screens/ProductEditScreen';


function App() {
  
  return (
    <Router>
      <Header/> 
      <Container>
    <main className='py-3'>
      <Routes>

        <Route path='/' element={<HomeScreen/>} />
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/shipping' element={<ShippingScreen/>}/>
        <Route path='/payment' element={<PaymentScreen/>}/>
        <Route path='/placeorder' element={<PlaceOrderScreen/>}/>
        <Route path='/order/:id' element={<OrderScreen/>}/>

        <Route path='/profile' element={<ProfileScreen/>}/>
        <Route path='/product/:id' element={<ProductScreen/>}/>
        
        <Route path='/cart/:id' element={<CartScreen/>}/>   
        <Route path='/cart' element={<CartScreen/>}/> 

        <Route path='/admin/userlist' element={<UserListScreen/>}></Route>
        <Route path='/admin/user/:id/edit' element={<UserEditScreen/>}
        />
        <Route path='/admin/productlist' exact element={<ProductListScreen/>}></Route>
        <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen/>}></Route>
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>} />
        
        <Route path='/admin/orderlist' element={<OrderListScreen/>}></Route>

        <Route path='/search/:keyword' exact element={<HomeScreen/>} />
        <Route path='/page/:pageNumber' exact element={<HomeScreen/>} />
        <Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen/>} />

      </Routes>
      </main>
      </Container>
      <Footer/>
    </Router>   
  );
}
 
export default App;