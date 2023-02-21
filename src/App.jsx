import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Welcome from "./pages/Welcome";
import Admin from "./pages/Admin";
import Chat from "./pages/Chat";
import Account from "./pages/Account";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/acceuil" element={<Welcome />} />;
          <Route path="/" element={<Welcome />} />;
          <Route path="/*" element={<Welcome />} />;
          <Route path="/Account" element={<Account />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Admin" element={<Admin /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
