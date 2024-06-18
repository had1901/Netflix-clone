import React from 'react';
import { Routes ,Route, Link, Outlet } from 'react-router-dom';
import AboutUs from './Screens/AboutUs';
import HomeScreen from './Screens/HomeScreen';
import NotFound from './Screens/NotFound';
import ContactUs from './Screens/ContactUs';
import MoviesPage from './Screens/Movies';
import SingleMovie from './Screens/SingleMovie';
import WatchPage from './Screens/WatchPage';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Profile from './Screens/Dashboard/Profile';
import Aos from 'aos';


function App() {
  Aos.init()
  return (
    <>
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/movies' element={<MoviesPage/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/movies/:id' element={<SingleMovie/>}/>
      <Route path='/watch/:id' element={<WatchPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
