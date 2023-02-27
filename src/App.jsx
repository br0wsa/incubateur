import React from 'react';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from "./pages/Welcome";
import Admin from "./pages/Admin";
import Chat from "./pages/Chat";
import Account from "./pages/Account";
import Details from './pages/Details';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/acceuil" element={<Welcome />} />;
          <Route path="/" element={<Welcome />} />;
          <Route path="/*" element={<Welcome />} />;
          <Route path="/Account" element={<Account />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Admin" element={<Admin /> } />
          <Route path="/movie/:id" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
