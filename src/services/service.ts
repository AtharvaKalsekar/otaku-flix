import { Promo } from "../models/Promo";
import {
  Model,
  parsePromos,
  parseResponse,
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
