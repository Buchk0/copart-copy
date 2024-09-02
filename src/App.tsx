import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss'

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Registration from './pages/Registration';
import Sign from './pages/Sign';

function App() {
  return (
    <div className="wrapper">
<Header />
<div className="content">
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='registraiton' element={<Registration />} />
    <Route path='sign' element={<Sign />}/>
  </Routes>
</div>
<Footer />
    </div>
  );
}

export default App;
