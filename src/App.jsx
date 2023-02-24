import React from 'react';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Welcome from "./pages/Welcome";
import Admin from "./pages/Admin";
import Chat from "./pages/Chat";
import Account from "./pages/Account";
import Details from './pages/Details';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/Welcome" element={<Welcome />} />;
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
