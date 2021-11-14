import React from "react";
import { Promo } from "../../models/Promo";
import "./styles.css";
import YouTube from "react-youtube";

interface IPromoComponent {
  promos: Promo[];
}

const PromoComponent = ({ promos }: IPromoComponent) => {
  const getPlayList = () => {
    let playList: string[] = [];
    promos.forEach((promo) => {
      let urlParts: string[] = promo.videoUrl.split("/");
      let qIndex = urlParts[urlParts.length - 1].indexOf("?");
      playList.push(urlParts[urlParts.length - 1].substring(0, qIndex));
    });
    return playList;
  };

  const playList = getPlayList();
  const startingPromoId = playList.shift();

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1 as 0 | 1 | undefined,
      controls: 0 as 0 | 1 | undefined,
      origin: "*",
      disablekb: 1 as 0 | 1,
      rel: 0 as 0 | 1,
      playlist: playList.join(","),
    },
  };

  return <YouTube videoId={startingPromoId} opts={opts} />;
};

export default PromoComponent;
