import React from 'react';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Acceuil from "./pages/Acceuil";
import Administration from "./pages/Administration";
import Chat from "./pages/Chat";
import Compte from "./pages/Compte";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/acceuil" element={<Acceuil />} />
          <Route path="/" element={<Acceuil />} />
          <Route path="/*" element={<Acceuil />} />
          <Route path="/Compte" element={<Compte />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Administration" element={<Administration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
