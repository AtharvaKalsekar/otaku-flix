import React from "react";
import { Anime } from "../../models/Anime";
import Card from "../Card/Card";
import "./AnimeList.css";

interface IAnimeList {
  animeList: Anime[];
}

const AnimeList = ({ animeList }: IAnimeList) => {
  return (
    <div className="anime-list-container">
      {animeList.map((anime, idx) => {
        return (
          <div className="anime-list-item" key={idx}>
            <Card {...anime} />
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
