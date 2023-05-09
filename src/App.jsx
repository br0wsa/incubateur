// React
import React, { useEffect, lazy, Suspense, useContext } from "react";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// React Context
import { AuthContext } from "../src/domain/store/provider/contexts";

// Import du fichier de style CSS, qui contient les styles de l'application
import "./assets/css/style.css";

// ErrorBoundary : react-error-boundary
import { ErrorBoundary } from "react-error-boundary";
import { ToastContainer, ToastQueue } from "@react-spectrum/toast";

// Components
import Navbar from "./containers/Navbar";
import FooterContainer from "./containers/FooterContainer";
import ProgressCircle from "./components/ProgressCircle";
import ErrorFallback from "./components/ErrorFallback";
import {
  DashboardPrivateRoute,
  ChatPrivateRoute,
  AccountPrivateRoute,
} from "./containers/PrivateRoute";

// Pages (async)
const LastRelease = lazy(() => import("./pages/Accueil/LastRelease"));
const About = lazy(() => import("./pages/CinefileCompany/About"));
const Contact = lazy(() => import("./pages/CinefileCompany/Contact"));
const CGU = lazy(() => import("./pages/CinefileCompany/CGU"));
const Glossary = lazy(() => import("./pages/CinefileCompany/Glossary"));
const LegalMentions = lazy(() =>
  import("./pages/CinefileCompany/LegalMentions"),
);
const NotFoundPage = lazy(() => import("./pages/Erreurs/NotFoundPage"));

// Redux Toolkit
import { useDispatch } from "react-redux";
import {
  fetchActors,
  fetchAnimations,
  fetchlastReleases,
  fetchMovies,
  fetchSeries,
} from "./domain/redux/redux-thunks";

function App() {
  const dispatch = useDispatch();

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
  }, []);

  // React Context
  const { auth, setAuth, isAuthenticated, login, logout } =
    useContext(AuthContext);

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

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<CGU />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/legal" element={<LegalMentions />} />
            <Route
              path="/dashboard"
              element={
                <DashboardPrivateRoute isAuthenticated={isAuthenticated} />
              }
            />
            <Route
              path="/chat"
              element={<ChatPrivateRoute isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/account"
              element={
                <AccountPrivateRoute isAuthenticated={isAuthenticated} />
              }
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>

        <FooterContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
