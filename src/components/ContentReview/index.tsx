import React from "react";
import { Review } from "../../models/Review";
import CircularProgressBar from "../CircularProgressBar";
import Ratings from "../Ratings";
import "./styles.css";

type Props = {
  review: Review;
};

const ContentReview = ({ review }: Props) => {
  return (
    <div className="review-container">
      <Ratings ratings={review.scores.getScoresArray()} />
      {/* <div className="image-container">
        <img src={} alt="episode thumbnail" className="image"></img>
      </div>
      <div className="details">
        <div className="heading">{episode.title}</div>
        <div className="sub-heading">{episode.titleJapanese}</div>
      </div> */}
    </div>
  );
};

export default ContentReview;
