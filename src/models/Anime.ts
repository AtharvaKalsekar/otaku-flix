import { Genre } from "./Genre";

export class Anime {
  id: number;
  numberOfEpisodes: number;
  synopsis: string;
  title: string;
  type: string;
  url: string;
  imageUrl: string;
  genres: Genre[];
  score: number;

  constructor(rawData: any) {
    this.id = rawData.mal_id;
    this.numberOfEpisodes = rawData.episodes;
    this.synopsis = rawData.synopsis;
    this.title = rawData.title;
    this.type = rawData.type;
    this.url = rawData.url;
    this.imageUrl = rawData.image_url;
    this.genres = getGeners(rawData.genres);
    this.score = rawData.score;
  }
}

const getGeners = (rawGeners: any[]): Genre[] => {
  let finalRes: Genre[] = [];
  rawGeners.forEach((rawGenre) => {
    finalRes.push(new Genre(rawGenre));
  });
  return finalRes;
};
