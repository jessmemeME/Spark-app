import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './Routes';
import NavBar from './components/Navbar/Navbar.js'
import Starfield from './components/Starfield/Starfield.js';
 
 
function App() {
  return (

      <BrowserRouter>
        <NavBar />
        <Starfield starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black" />
        <div className='container mt-4'>
        <Routes>
        {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
      </Routes>
    
        </div>
        </BrowserRouter>      

    
    
  );
}

export default App;
