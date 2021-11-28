import React from "react";
import { Score, Scores } from "../../models/Review";
import CircularProgressBar from "../CircularProgressBar";
import "./styles.css";

type Props = {
  ratings: Score[];
};

const Ratings = ({ ratings }: Props) => {
  const getRating = (rating: Score) => {
    return (
      <>
        <div className="ratings-container__label">
          <span>{rating.label}:</span>
        </div>
        <div className="ratings-container__progress">
          <CircularProgressBar
            progress={rating.score}
            limit={rating.limit}
          ></CircularProgressBar>
        </div>
      </>
    );
  };

  return (
    <div className="ratings-container">
      {ratings.map((rating, idx) => {
        return (
          <div className="ratings-container__item" key={idx}>
            {getRating(rating)}
          </div>
        );
      })}
    </div>
  );
};

export default Ratings;
