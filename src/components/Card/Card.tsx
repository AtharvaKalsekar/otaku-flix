import React from "react";
import { Anime } from "../../models/Anime";
import "./Card.css";

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
      <div className="card-item">
        <h2>{props.title}</h2>
      </div>
      <div className="card-item">
        <p>{props.synopsis}</p>
      </div>
    </div>
  );
};

export default Card;
