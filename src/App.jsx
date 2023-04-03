import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import Welcome from "./pages/Welcome";
import Admin from "./pages/Admin";
import Chat from "./pages/Chat";
import Account from "./pages/Account";
import Details from "./pages/Details";
import DetailsActor from "./pages/Detailsactor";
import DetailsSeries from "./pages/DetailsSeries";
import { io } from "socket.io-client";
import Register from "./pages/Register";
import Login from "./pages/Login";

// REDUX TOOLKIT
import { useDispatch, useSelector } from "react-redux";
import { fetchActors } from "./domain/redux/actor/actorThunk";

function App() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("movie");
  const [socket, setSocket] = useState();
  const [message, setMessage] = useState("");

  // test
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActors());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar movies={movies} setMovies={setMovies} category={category} />
        <Routes>
          <Route
            path="/*"
            element={
              <Welcome
                movies={movies}
                setMovies={setMovies}
                category={category}
                setCategory={setCategory}
              />
            }
          />
          ; ;
          <Route path="/Account" element={<Account />} />
          <Route path="/Chat" element={<Chat socket={socket} />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/movie/:id" element={<Details />} />
          <Route path="/actor/:id" element={<DetailsActor />} />
          <Route path="/serie/:id" element={<DetailsSeries />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
