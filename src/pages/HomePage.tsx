import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import { Anime } from "../models/Anime";
import { Season } from "../models/Season";
import { getSeason, ServiceCallback } from "../service";

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
    <div>
      <h1>Home page here</h1>
      <Card {...allAnime[0]}></Card>
    </div>
  );
};

export default HomePage;
