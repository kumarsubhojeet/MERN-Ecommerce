import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import E404 from './Pages/E404';
import Main_Menu from './Pages/Menu/Menu_Main'
import woman_menu from './Pages/Menu/woman_menu';
import Men_menu from './Pages/Menu/Men_Menu';
import kids_menu from './Pages/Menu/kids_menu';

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/main-menu" element={<Main_Menu />} />
        <Route path="/woman-menu" element={<woman_menu />} />
        <Route path="/men-menu" element={<Men_menu />} />
        <Route path="/kids-menu" element={<kids_menu />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </>
  )
}

export default App