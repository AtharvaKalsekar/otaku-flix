import React, { useState } from "react";
import { Anime } from "../../models/Anime";
import "./Card.css";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

const Card = (props: Anime) => {
  const [hovering, setHovering] = useState(false);

  const getBody = () => {
    return hovering ? (
      <CardBack synopsis={props.synopsis} episodes={props.numberOfEpisodes} />
    ) : (
      <CardFront
        imageUrl={props.imageUrl}
        genres={props.genres}
        title={props.title}
        score={props.score}
      />
    );
  };

  const onMouseOver = () => {
    setHovering(true);
  };

  const onMouseOut = () => {
    setHovering(false);
  };

  return (
    <div
      className="card-container"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {getBody()}
    </div>
  );
};

export default Card;
