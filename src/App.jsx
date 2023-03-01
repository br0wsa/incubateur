import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Welcome from "./pages/Welcome";
import Admin from "./pages/Admin";
import Chat from "./pages/Chat";
import Account from "./pages/Account";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Login from "./pages/Login";

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
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/movie/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
