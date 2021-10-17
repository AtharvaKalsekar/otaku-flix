import React from "react";
import "./Card.css";

interface ICardBack {
  synopsis: String;
  episodes: number;
}

const CardBack = (props: ICardBack) => {
  return (
    <>
      <div className="card-item-7 card-synopsis">
        <p>{props.synopsis}</p>
      </div>
      <div className="card-item-1 card-episodes">
        <span>{props.episodes} Episodes</span>
      </div>
    </>
  );
};

export default CardBack;
