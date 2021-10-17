import React from "react";
import { Genre } from "../../models/Genre";
import Chip from "../Chip/Chip";
import "./GenreList.css";

interface IGenreList {
  genres: Genre[];
}

const GenreList = ({ genres }: IGenreList) => {
  return (
    <div className="genre-list-container">
      {genres.map((genre) => {
        return (
          <div className="genre-list-item">
            <Chip text={genre.name} />
          </div>
        );
      })}
    </div>
  );
};

export default GenreList;
