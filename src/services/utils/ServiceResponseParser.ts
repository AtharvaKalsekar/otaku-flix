import { Episode } from "../../models/Episode";
import { Promo } from "../../models/Promo";
import { Season } from "../../models/Season";

export enum Model {
  SEASON = "season",
  PROMO = "promo",
}

export const parseResponse = (model: Model, response: any): any => {
  switch (model) {
    case Model.SEASON:
      return new Season(response);
    case Model.PROMO:
      return new Promo(response);
  }
};

export const parsePromos = (rawPromos: any[]): Promo[] => {
  let promos: Promo[] = [];
  rawPromos.forEach((promoRaw) => {
    promos.push(new Promo(promoRaw));
  });
  return promos;
};

export const parseEpisodes = (rawEpisodes: any[]): Episode[] => {
  let episodes: Episode[] = [];
  rawEpisodes.forEach((rawEpisode) => {
    episodes.push(new Episode(rawEpisode));
  });
  return episodes;
};
