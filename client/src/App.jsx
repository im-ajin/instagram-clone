import React from 'react'
import { Button } from 'flowbite-react';
import SignIn from './pages/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Messages from './pages/Messages';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    
      <Route path='/' element={<Home />} />  
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/messages' element={<Messages />} />

    </Routes>
    <Footer />
     </BrowserRouter>
  )
}

export default App