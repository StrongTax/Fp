import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div>
    <div className="f">
      <h1>F</h1>    
    </div>
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted playsInline />

      <h1>Sheeesh!</h1>
      <p>Developer | Content Creator | Entrepeneur </p>
    </div>
    </div>
  );
};

export default Cover;
