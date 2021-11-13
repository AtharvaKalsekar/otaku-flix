import React from "react";
import { TabType, Tab } from "../utils";

const ReviewsTab = (): Tab => {
  const getBody = () => {
    return <div>Reviews Tab</div>;
  };

  return {
    type: TabType.REVIEWS,
    title: "Reviews",
    body: getBody(),
  };
};

export default ReviewsTab;
