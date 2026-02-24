import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";

import linkedinLogo from "../../media/Logos/linkedin.png";
import instagramLogo from "../../media/Logos/instagram.png";
import githubLogo from "../../media/Logos/github.png";
import menuLogo from "../../media/Nav/menu.png";

import "./Navigation.scss";

const LogoNav = () => (
  <div className="logoNav">
    <a
      href="https://www.linkedin.com/in/sergio-j-nava-g/"
      aria-label="LinkedIn"
    >
      <img alt="" src={linkedinLogo} className="icon" />
    </a>
    <a href="https://www.instagram.com/cerjionava/" aria-label="Instagram">
      <img alt="" src={instagramLogo} className="icon" />
    </a>
    <a href="https://github.com/CerjioNava" aria-label="GitHub">
      <img alt="" src={githubLogo} className="icon" />
    </a>
  </div>
);

const Navigation = () => {
  const [menu, setMenu] = useState(true);
  const menuRef = useRef(null);
  const isFirstRun = useRef(true);

  const showMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (menuRef.current) {
      menuRef.current.style.display = menu ? "flex" : "none";
    }
  }, [menu]);

  const showMenuTrans = () => {
    if (!menu) {
      setMenu(true);
      if (menuRef.current) menuRef.current.style.display = "none";
    }
  };

  return (
    <nav id="header" aria-label="Main navigation">
      <div className="flex items-center justify-between">
        <p className="marca f3">
          <RouteLink to="/" className="alink">
            SERGIO.
          </RouteLink>
        </p>
        <button
          type="button"
          className="menu"
          onClick={showMenu}
          aria-label={menu ? "Open menu" : "Close menu"}
          aria-expanded={!menu}
        >
          <img alt="" src={menuLogo} />
        </button>
      </div>

      <div className="flex justify-end">
        <div id="header-menu" ref={menuRef}>
          <RouteLink to="/" className="alink-parent" onClick={showMenuTrans}>
            <p className="alink">Home</p>
          </RouteLink>

          <RouteLink
            to="/about"
            className="alink-parent"
            onClick={showMenuTrans}
          >
            <p className="alink">About</p>
          </RouteLink>

          <RouteLink
            to="/portfolio"
            className="alink-parent"
            onClick={showMenuTrans}
          >
            <p className="alink">Portfolio</p>
          </RouteLink>

          <Link
            to="contact"
            smooth="easeInOutQuad"
            duration={1750}
            className="alink-parent"
            onClick={showMenuTrans}
          >
            <p className="alink">Contact</p>
          </Link>

          <LogoNav />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
