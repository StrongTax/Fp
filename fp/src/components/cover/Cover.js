import React from "react";
import "./Cover.css";

import coverVideo from "../../media/coverVideo.mp4";
import logo from "../../media/logo.png";
import { FaChevronDown } from "react-icons/fa";

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Cover = () => {
  return (
    <div>
      <ParallaxProvider>
      <Parallax speed={-6}>
        <img className="f" src={logo} alt="Logo" />
      </Parallax>
    <Parallax speed={-4}>
        <FaChevronDown className="icon" />
        </Parallax>
      </ParallaxProvider>
      <div
        className="cover-container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <video
          className="video"
          src={coverVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <h1>Sheeesh!</h1>
        <p>Developer | Content Creator | Entrepeneur </p>
      </div>
    </div>
  );
};

export default Cover;
