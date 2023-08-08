import React from 'react';
import Login from './Pages/Login.js';
import Navbar from './Pages/Navbar.js';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register.js';
import Home from './Components/Home.js';
const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navbar />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
