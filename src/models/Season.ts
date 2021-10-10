import { Anime } from "./Anime";

export class Season {
  animeList: Anime[];
  name: string;
  year: number;

  constructor(rawData: any) {
    this.animeList = this.getAnimeList(rawData.anime);
    this.name = rawData.season_name;
    this.year = rawData.season_year;
  }

  private getAnimeList = (anime: any[]): Anime[] => {
    let res: Anime[] = [];
    anime.forEach((content) => {
      res.push(new Anime(content));
    });
    return res;
  };
}
