import React from 'react'
import { Button } from 'flowbite-react';
import SignIn from './pages/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
     </BrowserRouter>
  )
}

export default App