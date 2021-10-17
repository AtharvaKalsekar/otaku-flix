import React from "react";
import { Genre } from "../../models/Genre";
import GenreList from "../GenreList/GenreList";
import Score from "../Score/Score";
import "./Card.css";

interface ICardFront {
  imageUrl: string;
  title: String;
  score: number;
  genres: Genre[];
}

const CardFront = (props: ICardFront) => {
  return (
    <>
      <div className="card-item-1">
        <img
          src={props.imageUrl}
          className="card-item-img"
          alt="anime-cover"
        ></img>
      </div>
      <div className="card-item-1 card-title-container">
        <span className="card-title">{props.title}</span>
      </div>
      <div className="card-item-1 card-score">
        <Score score={props.score} />
      </div>
      <div className="card-item-1">
        <GenreList genres={props.genres} />
      </div>
    </>
  );
};

export default CardFront;
