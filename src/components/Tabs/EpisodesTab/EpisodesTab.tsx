import React, { useEffect, useState } from "react";
import { Episode } from "../../../models/Episode";
import { getEpisodes, ServiceCallback } from "../../../services/service";
import EpisodeComponent from "../../Episode";
import PaginatedList from "../../PaginatedList";
import { TabType, Tab } from "../utils";

type Props = {
  animeId: number;
};

const EpisodesTab = ({ animeId }: Props): Tab => {
  const [episodes, setEpisodes] = useState<Episode[]>();

  useEffect(() => {
    let cb: ServiceCallback = {
      onSuccess: (episodes: Episode[]) => {
        console.log("fetched eps => ", episodes);
        setEpisodes(episodes);
      },
      onFaliure: (err) => {
        console.error("Error in fetching episodes", err);
      },
    };
    getEpisodes(cb, animeId);
  }, [animeId]);

  const getbody = () => {
    return (
      <div>
        <PaginatedList
          items={episodes || []}
          getListItemComponent={(itemProps: Episode) => (
            <EpisodeComponent {...itemProps} />
          )}
          numberOfItemsPerPage={5}
        />
      </div>
    );
  };

  return {
    type: TabType.EPISODES,
    title: "Episodes",
    body: getbody(),
  };
};

export default EpisodesTab;
