import React from "react";
import { Review } from "../../models/Review";
import Ratings from "../Ratings";
import "./styles.css";
import Truncate from "react-truncate";
import { useDispatch } from "react-redux";
import { showModalAction } from "../../actions/modalActions";
type Props = {
  review: Review;
};

const ContentReview = ({ review }: Props) => {
  const dispatch = useDispatch();

  const onClickReview = () => {
    const modalComponent = <h1>modal here</h1>;
    dispatch(showModalAction(modalComponent));
  };

  return (
    <div className="review-container">
      <div className="review-content" onClick={onClickReview}>
        <div className="image-container">
          <img src={review.imageUrl} alt="reviewr's picutre"></img>
        </div>
        <div className="review">
          <div className="heading">
            <span>{review.userName}</span>
          </div>
          <hr className="divider"></hr>
          <div className="text-container">
            <Truncate lines={10} className="text">
              {review.content}
            </Truncate>
          </div>
          <div className="votes"></div>
        </div>
      </div>
      <Ratings ratings={review.scores.getScoresArray()} />
    </div>
  );
};

export default ContentReview;
