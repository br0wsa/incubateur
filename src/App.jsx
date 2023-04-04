// React
import React, { useEffect, lazy, Suspense } from "react";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/old/Navbar";
import Footer from "./components/old/Footer";
import PrivateRoute from "./components/PrivateRoute";

// Pages (async)
const LastRelease = lazy(() => import("./pages/LastRelease"));
const LastReleaseDetails = lazy(() => import("./pages/LastReleaseDetails"));
const MovieList = lazy(() => import("./pages/MovieList"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const TvList = lazy(() => import("./pages/TvList"));
const TvDetails = lazy(() => import("./pages/TvDetails"));
const ActorsList = lazy(() => import("./pages/ActorsList"));
const ActorDetails = lazy(() => import("./pages/ActorDetails"));
const AnimationList = lazy(() => import("./pages/AnimationList"));
const AnimationDetails = lazy(() => import("./pages/AnimationDetails"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const CGU = lazy(() => import("./pages/CGU"));
const Glossary = lazy(() => import("./pages/Glossary"));
const LegalMentions = lazy(() => import("./pages/LegalMentions"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Chat = lazy(() => import("./pages/Chat"));
const Account = lazy(() => import("./pages/Account"));

// React Toastify
import { toast } from "react-toastify";

// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import {
  fetchActors,
  fetchAnimations,
  fetchlastReleases,
  fetchMovies,
  fetchSeries,
} from "./domain/redux/redux-thunks";

function App() {
  const dispatch = useDispatch();
  const {
    lastRealease: { status: lastRealeaseStatus },
    animation: { status: animationStatus },
    movie: { status: movieStatus },
    serie: { status: serieStatus },
    actor: { status: actorStatus },
  } = useSelector((state) => state);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        dispatch(fetchlastReleases());
        setTimeout(() => dispatch(fetchAnimations()), 3000);
        setTimeout(() => dispatch(fetchMovies()), 3000);
        setTimeout(() => dispatch(fetchSeries()), 3000);
        setTimeout(() => dispatch(fetchActors()), 3000);
      } catch (error) {
        toast.error(
          `Oops, Houston, we have a problem...😅 Il semblerait que la l'atomic data 🚀 soit perturbée, les données sur les films ne sont pas disponibles pour le moment. Veuillez réessayer plus tard ! 😎🍿 : ${error}`,
        );
      }
    };

    fetchAll();
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<LastRelease />}>
              <Route path="/:id" element={<LastReleaseDetails />} />
            </Route>

            <Route strict path="/movie" element={<MovieList />}>
              <Route path="/:id" element={<MovieDetails />} />
            </Route>
            <Route strict path="/tv" element={<TvList />}>
              <Route path="/:id" element={<TvDetails />} />
            </Route>
            <Route strict path="/actor" element={<ActorsList />}>
              <Route path="/:id" element={<ActorDetails />} />
            </Route>
            <Route strict path="/animation" element={<AnimationList />}>
              <Route path="/:id" element={<AnimationDetails />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<CGU />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/legal" element={<LegalMentions />} />
            <Route path="/*" element={<NotFoundPage />} />

            <PrivateRoute strict path="/dashboard" element={<Dashboard />} />
            <PrivateRoute strict path="/chat" element={<Chat />} />
            <PrivateRoute strict path="/account" element={<Account />} />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
