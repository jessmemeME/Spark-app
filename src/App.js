import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './Routes';
import NavBar from 'NavBar.js'
 
 
function App() {
  return (

      <BrowserRouter>
        <Navbar />
        <div className='container mt-4'>
        <Routes>
        <Route path="/"  component={<Layout/>} />
        <Route path="list" component={<AsteroidList />} />
        <Route path="/asteroid/:id" component={<AsteroidDetail />} />
      </Routes>
    
        </div>
        </BrowserRouter>      

    
    
  );
}

export default App;
