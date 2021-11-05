import React, { useEffect, useState } from "react";
import Slider from "../../components/ListHolder/Slider";
import { Anime } from "../../models/Anime";
import { Season } from "../../models/Season";
import { getSeason, ServiceCallback } from "../../services/service";
import "./HomePage.css";

const HomePage = () => {
  let initState: Anime[] = [];

  const [allAnime, setAllAnime] = useState(initState);

  useEffect(() => {
    let cb: ServiceCallback = {
      onSuccess: (response: Season) => {
        console.log("recieved this", response);
        setAllAnime(response.animeList);
      },
      onFaliure: (err) => {
        console.log("recieved this error", err);
      },
    };
    getSeason(cb);
  }, []);

  return (
    <div className="home-page-container">
      <div></div>
      <div className="home-page-container-item">
        <Slider heading={"Season 2018"} list={allAnime} />
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;
