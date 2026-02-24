import React, { useState } from "react";
import { Link as RouteLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import profile from "../../media/Gallery/profile.png";
import portfo1 from "../../media/Gallery/Pixel1-5.gif";
import portfo2 from "../../media/Gallery/Pixel4.gif";
import portfo3 from "../../media/Gallery/Pixel3.gif";
import arrow from "../../media/Nav/arrow6.png";

import "./Home.scss";

const AboutSection = () => (
  <section id="about" aria-label="About me">
    <div className="aboutme">
      <h1>About me</h1>
      <p>
        Since I was a child I've been a huge fan of technology and video games,
        now I'm a Web Developer and I love creating video games as a hobby too!
        <br />
        <br />
        But there is no end point to keep learning and improving, and that's
        what I do best.
      </p>
      <RouteLink to="/about">
        <button type="button">Read more</button>
      </RouteLink>
    </div>
    <div className="about-profile">
      <img src={profile} alt="Sergio Nava profile" />
    </div>
  </section>
);

const ContentSection = ({ portfoimg, title, content }) => (
  <div className="projects">
    <div className="project-view">
      <img src={portfoimg} alt="Videogames" />
    </div>
    <div className="content">
      <h1>{title}</h1>
      <p>
        <br />
        {content}
      </p>
    </div>
  </div>
);

const PortfolioSection = () => {
  const [portfo, setPortfo] = useState(0);

  const changePortfo = (num) => {
    if ((portfo < 2 && num === 1) || (portfo > 0 && num === -1)) {
      setPortfo(portfo + num);
    }
  };

  const content =
    portfo === 0
      ? {
          img: portfo1,
          title: "Check out some of my latest work!",
          content: "There are also video games, have fun!",
        }
      : portfo === 1
        ? {
            img: portfo2,
            title: "You can play my video games!",
            content:
              "Don't be so serious, come and laugh a little! There will always be time for entertainment.",
          }
        : {
            img: portfo3,
            title: "More projects",
            content: "Coming soon...",
          };

  return (
    <section className="portfo" aria-label="Portfolio preview">
      <div className="portfo-box">
        <button
          type="button"
          className="arrow"
          style={{ transform: "scaleX(-1)" }}
          onClick={() => changePortfo(-1)}
          aria-label="Previous project"
        >
          <img src={arrow} alt="" />
        </button>
        <div className="portfo-content">
          <ContentSection
            portfoimg={content.img}
            title={content.title}
            content={content.content}
          />
          <RouteLink to="/portfolio">
            <button type="button">My Portfolio</button>
          </RouteLink>
        </div>
        <button
          type="button"
          className="arrow"
          onClick={() => changePortfo(1)}
          aria-label="Next project"
        >
          <img src={arrow} alt="" />
        </button>
      </div>
    </section>
  );
};

const Home = () => (
  <>
    <Helmet>
      <title>Sergio Nava | Home</title>
    </Helmet>
    <div className="intro">
      <div>
        <h1>
          Hello there! I'm <br />
          <span>Sergio Nava</span>
        </h1>
        <p className="f3 pb1">Take a look, be my guest!</p>
        <RouteLink to="/portfolio">
          <button type="button">
            <h4>My Portfolio</h4>
          </button>
        </RouteLink>
      </div>
    </div>
    <AboutSection />
    <PortfolioSection />
  </>
);

export default Home;
