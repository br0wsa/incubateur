import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Acceuil from "./pages/Acceuil";
import Administration from "./pages/Administration";
import Chat from "./pages/Chat";
import Compte from "./pages/Compte";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/acceuil" element={<Acceuil />} />;
          <Route path="/" element={<Acceuil />} />;
          <Route path="/*" element={<Acceuil />} />;
          <Route path="/Compte" element={<Compte />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Administration" element={<Administration /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
