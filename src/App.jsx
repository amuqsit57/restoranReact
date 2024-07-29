import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Switch,
  Link
} from 'react-router-dom';

import Home from "./pages/Home/home.jsx";

function App() {
  
  return (
    <>
      {/* <h1>hi this is page</h1> */}
      <Router>
        <div>
          {/* dasfdsafa */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Home />} />
            
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        
        </div>
      </Router>
    </>
  )
}

export default App
