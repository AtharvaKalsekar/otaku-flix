import React from "react";
import { TabType, Tab } from "../utils";

const EpisodesTab = (): Tab => {
  const getbody = () => {
    return <div>Episode Tab</div>;
  };

  return {
    type: TabType.EPISODES,
    title: "Episodes",
    body: getbody(),
  };
};

export default EpisodesTab;
