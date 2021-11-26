
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Cardprofile from './pages/Cardprofile';
import Example from './pages/Example';
function App() {
  return (
    <Router>
       <Navbar/>
          <Routes>
              <Route exact path = "/" element = {<Home/>}></Route>
              <Route exact path = "sample" element = {<Example/>}></Route>
              <Route exact path = "about" element = {<About/>}></Route>
              <Route exact path = "contact" element = {<Contact/>}></Route>
              <Route exact path = "faq" element = {<Faq/>}></Route>
              <Route exact path = "porfolio" element = {<Cardprofile/>}></Route>
            </Routes>  
    </Router>
  );
}

export default App;
