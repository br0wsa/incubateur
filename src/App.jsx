// React
import React, { useEffect, lazy, Suspense, useState } from "react";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import du fichier de style CSS, qui contient les styles de l'application
import "./assets/css/style.css";
// import "./assets/css/tailwind.css";

// ErrorBoundary : react-error-boundary
import { ErrorBoundary } from "react-error-boundary";
import { ToastContainer, ToastQueue } from "@react-spectrum/toast";

// Components
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";
import PrivateRoute from "./containers/PrivateRoute";
import ProgressCircle from "./components/ProgressCircle";
import ErrorFallback from "./components/ErrorFallback";

// Pages (async)
const LastRelease = lazy(() => import("./pages/Accueil/LastRelease"));
const MovieList = lazy(() => import("./pages/Films/MovieList"));
const MovieDetails = lazy(() => import("./pages/Films/MovieDetails"));
const TvList = lazy(() => import("./pages/Series/TvList"));
const TvDetails = lazy(() => import("./pages/Series/TvDetails"));
const ActorsList = lazy(() => import("./pages/Acteurs/ActorsList"));
const ActorDetails = lazy(() => import("./pages/Acteurs/ActorDetails"));
const AnimationList = lazy(() => import("./pages/Animations/AnimationList"));
const AnimationDetails = lazy(() =>
  import("./pages/Animations/AnimationDetails"),
);
const Login = lazy(() => import("./pages/Authentification/Login"));
const Signup = lazy(() => import("./pages/Authentification/Signup"));
const About = lazy(() => import("./pages/CinefileCompany/About"));
const Contact = lazy(() => import("./pages/CinefileCompany/Contact"));
const CGU = lazy(() => import("./pages/CinefileCompany/CGU"));
const Glossary = lazy(() => import("./pages/CinefileCompany/Glossary"));
const LegalMentions = lazy(() =>
  import("./pages/CinefileCompany/LegalMentions"),
);
const NotFoundPage = lazy(() => import("./pages/Erreurs/NotFoundPage"));
const Dashboard = lazy(() => import("./pages/User/Dashboard"));
const Chat = lazy(() => import("./pages/User/Chat"));
const Account = lazy(() => import("./pages/User/Account"));

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        await Promise.all([
          dispatch(fetchlastReleases()),
          dispatch(fetchAnimations()),
          dispatch(fetchMovies()),
          dispatch(fetchSeries()),
          dispatch(fetchActors()),
        ]);
        ToastQueue.positive("Bienvenue!", { timeout: 2000 });
      } catch (error) {
        ToastQueue.info(
          `Oops, Houston, we have a problem...😅 Il semblerait que la l'atomic data 🚀 soit perturbée, les données sur les films ne sont pas disponibles pour le moment. Veuillez réessayer plus tard ! 😎🍿 : ${error}`,
        );
      }
    };

    fetchAll();
  }, [dispatch]);

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Suspense
          fallback={
            <ErrorBoundary fallbackRender={ErrorFallback}>
              <ProgressCircle aria-label="Loading…" isIndeterminate />
            </ErrorBoundary>
          }
        >
          <Routes>
            <Route index element={<LastRelease />} />
            <Route strict path="/movie">
              <Route index element={<MovieList />} />
              <Route path=":id" element={<MovieDetails />} />
            </Route>
            <Route strict path="/tv">
              <Route index element={<TvList />} />
              <Route path=":id" element={<TvDetails />} />
            </Route>
            <Route strict path="/actor">
              <Route index element={<ActorsList />} />
              <Route path=":id" element={<ActorDetails />} />
            </Route>
            <Route strict path="/animation">
              <Route index element={<AnimationList />} />
              <Route path=":id" element={<AnimationDetails />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<CGU />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/legal" element={<LegalMentions />} />
            <Route path="/*" element={<NotFoundPage />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <PrivateRoute
              strict
              path="/dashboard"
              element={<Dashboard />}
              isLoggedIn={isLoggedIn}
            />
            <PrivateRoute
              strict
              path="/chat"
              element={<Chat />}
              isLoggedIn={isLoggedIn}
            />
            <PrivateRoute
              strict
              path="/account"
              element={<Account />}
              isLoggedIn={isLoggedIn}
            /> */}
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
