import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import {Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      {/* <HomePage /> */}
      {/* {
        (localStorage.getItem("users") === undefined || localStorage.getItem("users") === null) ? <LoginPage/> : <HomePage/>
      } */}
      {/* <UserProvider> */}
          <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/homepage' element={<HomePage/>} />
            <Route path='/home' element={<Home/>} />
          </Routes>
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
