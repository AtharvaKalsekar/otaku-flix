import React, { useEffect, useState } from "react";
import { Anime } from "../../models/Anime";
import { getPromos, ServiceCallback } from "../../services/service";
import { Promo as PromoModel } from "../../models/Promo";
import PromoComponent from "../../components/Promo";
import Tabs from "../../components/Tabs";
import EpisodesTab from "../../components/Tabs/EpisodesTab";
import ReviewsTab from "../../components/Tabs/ReviewsTab";
import "./styles.css";

interface IContentDetailsPage {
  location?: any;
}

const ContentDetailsPage = (props: IContentDetailsPage) => {
  const { state } = props.location;

  const [promos, setPromos] = useState<PromoModel[]>([]);
  const [anime] = useState<Anime>(state as Anime);

  useEffect(() => {
    let cb: ServiceCallback = {
      onSuccess: (promos: PromoModel[]) => {
        setPromos(promos);
      },
      onFaliure: (err: any) => {},
    };
    getPromos(cb, anime.id);
  }, [anime.id]);

  return (
    <div className="content-details-page-container">
      <div></div>
      <div>
        <PromoComponent promos={promos} />
        <div className="content-details-page-info-container">
          <div className="content-details-page-info-img">
            <img src={anime.imageUrl} className="image" alt="anime cover"></img>
          </div>
          <div className="content-details-page-info-text">
            <div className="header">
              <span>{anime.title}</span>
            </div>
            <div className="desc">{anime.synopsis}</div>
          </div>
        </div>
        <Tabs tabs={[EpisodesTab({ animeId: anime.id }), ReviewsTab()]} />
      </div>
      <div></div>
    </div>
  );
};

export default ContentDetailsPage;
