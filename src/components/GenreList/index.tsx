import React from "react";
import { Genre } from "../../models/Genre";
import Chip from "../Chip";
import "./styles.css";

interface IGenreList {
  genres: Genre[];
}

const GenreList = ({ genres }: IGenreList) => {
  return (
    <div className="genre-list-container">
      {genres.map((genre, idx) => {
        return (
          <div className="genre-list-item" key={idx}>
            <Chip text={genre.name} />
          </div>
        );
      })}
    </div>
  );
};

export default GenreList;
