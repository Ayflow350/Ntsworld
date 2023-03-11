import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './pages/App'
import Collection from './pages/Collection'
import CreatePage from './pages/CreatePage';
import Profile from './pages/Profile'
import Art from './pages/Art'
import Policy from './pages/Policy';
import About from './pages/About'
import Faq from './pages/Faq';
import Activities from './pages/Activities';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="collection" element={<Collection />} />
        <Route path="createPage" element={<CreatePage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="art" element={<Art />} />
        <Route path="policy" element={<Policy />} />
        <Route path="about" element={<About />} />
        <Route path="Faq" element={<Faq />} />
        <Route path="activities" element={<Activities />} />
        <Route path="terms" element={<Terms />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    
  </BrowserRouter>,
  document.getElementById("root")
);


