import { Episode } from "../models/Episode";
import { Promo } from "../models/Promo";
import { Review } from "../models/Review";
import {
  Model,
  parseEpisodes,
  parsePromos,
  parseResponse,
  parseReviews,
} from "./utils/ServiceResponseParser";

export interface ServiceCallback {
  onSuccess: (response: any) => any;
  onFaliure: (err: any) => void;
}

export const getSeason = (cb: ServiceCallback) => {
  fetch("https://api.jikan.moe/v3/season/2018/winter", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((jsonData) => {
      let parsedData = parseResponse(Model.SEASON, jsonData);
      cb.onSuccess(parsedData);
    })
    .catch((err) => {
      cb.onFaliure(err);
    });
};

export const getPromos = (cb: ServiceCallback, animeId: number) => {
  fetch(`https://api.jikan.moe/v3/anime/${animeId}/videos`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((jsonData) => {
      let promos: Promo[] = parsePromos(jsonData.promo);
      cb.onSuccess(promos);
    })
    .catch((err) => {
      cb.onFaliure(err);
    });
};

export const getEpisodes = (cb: ServiceCallback, animeId: number) => {
  fetch(`https://api.jikan.moe/v3/anime/${animeId}/episodes/1`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((jsonData) => {
      let episodes: Episode[] = parseEpisodes(jsonData.episodes);
      cb.onSuccess(episodes);
    })
    .catch((err) => {
      cb.onFaliure(err);
    });
};

export const getReviews = (cb: ServiceCallback, animeId: number) => {
  fetch(`https://api.jikan.moe/v3/anime/${animeId}/reviews/`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((jsonData) => {
      let reviews: Review[] = parseReviews(jsonData.reviews);
      cb.onSuccess(reviews);
    })
    .catch((err) => {
      cb.onFaliure(err);
    });
};
