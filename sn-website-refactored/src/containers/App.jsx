import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { animateScroll } from "react-scroll";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import CanvasAll from "../components/CanvasAll/CanvasAll";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";

import arrowUp from "../media/Nav/arrowup.png";
import "./App.scss";

const LoaderSpinner = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="2"
    />
    <path
      d="M12 2a10 10 0 0 1 10 10"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ButtonScroll = () => {
  const scrollTop = () => {
    animateScroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuad",
    });
  };
  return (
    <div className="b-scroll">
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Scroll to top"
        className="b-scroll-button"
      >
        <img alt="" src={arrowUp} />
      </button>
    </div>
  );
};

const OnRouteChange = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PreLoader = () => (
  <div id="loader" role="status" aria-live="polite">
    <LoaderSpinner />
    <h1>Loading</h1>
  </div>
);

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(id);
  }, []);

  return (
    <HelmetProvider>
      {showLoader && <PreLoader />}
      <BrowserRouter>
        <div
          className="main"
          style={{ display: showLoader ? "none" : undefined }}
        >
          <Navigation />
          <ButtonScroll />
          <OnRouteChange />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </main>
          <Contact />
        </div>
        <CanvasAll />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
