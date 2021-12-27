import React, { useEffect, useState } from "react";
import { Review } from "../../../models/Review";
import { getReviews, ServiceCallback } from "../../../services/service";
import ContentReview from "../../ContentReview";
import PaginatedList from "../../PaginatedList";
import { TabType, Tab } from "../utils";

const ReviewsTab = ({ animeId }): Tab => {
  const [reviews, setReviews] = useState<Review[]>();

  useEffect(() => {
    let cb: ServiceCallback = {
      onSuccess: (reviews: Review[]) => {
        console.log("fetched reviews => ", reviews);
        setReviews(reviews);
      },
      onFaliure: (err) => {
        console.error("Error in fetching reviews", err);
      },
    };
    getReviews(cb, animeId);
  }, [animeId]);

  const getBody = () => {
    return (
      <div>
        <PaginatedList
          items={reviews || []}
          getListItemComponent={(review: Review) => (
            <ContentReview review={review} />
          )}
          numberOfItemsPerPage={5}
        />
      </div>
    );
  };

  return {
    type: TabType.REVIEWS,
    title: "Reviews",
    body: getBody(),
  };
};

export default ReviewsTab;
