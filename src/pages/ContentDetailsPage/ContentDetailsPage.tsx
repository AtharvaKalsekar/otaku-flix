import React, { useEffect, useState } from "react";
import Promo from "../../components/Promo/Promo";
import { Anime } from "../../models/Anime";
import { getPromos, ServiceCallback } from "../../services/service";
import "./ContentDetailsPage.css";
import { Promo as PromoModel } from "../../models/Promo";

interface IContentDetailsPage {
  location?: any;
}

const ContentDetailsPage = (props: IContentDetailsPage) => {
  const { state } = props.location;
  //   const anime = state as Anime;
  console.log("#CDP => ", state);

  const [promos, setPromos] = useState<PromoModel[]>([]);
  const [anime, setAnime] = useState<Anime>(state as Anime);

  useEffect(() => {
    let cb: ServiceCallback = {
      onSuccess: (promos: PromoModel[]) => {
        setPromos(promos);
      },
      onFaliure: (err: any) => {},
    };
    getPromos(cb, anime.id);
  }, []);

  return (
    <div className="content-details-page-container">
      <div></div>
      <div>
        {promos[0] && <Promo {...promos[0]} />}
        <div className="content-details-page-info-container">
          <div className="content-details-page-info-img">
            <img src={anime.imageUrl} className="image"></img>
          </div>
          <div className="content-details-page-info-text">
            <div className="header">
              <span>{anime.title}</span>
            </div>
            <div className="desc">{anime.synopsis}</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ContentDetailsPage;
