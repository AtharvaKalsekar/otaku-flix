import React from "react";
import { Anime } from "../../models/Anime";
import "./Card.css";
import Score from "../Score/Score";
import Chip from "../Chip/Chip";
import GenreList from "../GenreList/GenreList";

const Card = (props: Anime) => {
  return (
    <div className="card-container">
      <div className="card-item">
        <img
          src={props.imageUrl}
          className="card-item-img"
          alt="anime-cover"
        ></img>
      </div>
      <div className="card-item-1">
        <h2>{props.title}</h2>
      </div>
      <div className="card-item-1">
        <Score score={props.score} />
      </div>
      <div className="card-item-1">
        <GenreList genres={props.genres} />
      </div>
    </div>
  );
};

export default Card;
