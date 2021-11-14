import React from "react";
import { Episode } from "../../models/Episode";
import "./styles.css";
import thumbnail from "../../res/generic-thumbnail.jpg";

const EpisodeComponent = (episode: Episode) => {
  return (
    <div className="episode-container">
      <div className="image-container">
        <img src={thumbnail} alt="episode thumbnail" className="image"></img>
      </div>
      <div className="details">
        <div className="heading">{episode.title}</div>
        <div className="sub-heading">{episode.titleJapanese}</div>
      </div>
    </div>
  );
};

export default EpisodeComponent;
