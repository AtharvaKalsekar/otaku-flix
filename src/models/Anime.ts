export class Anime {
  numberOfEpisodes: number;
  synopsis: string;
  title: string;
  type: string;
  url: string;
  imageUrl: string;

  constructor(rawData: any) {
    this.numberOfEpisodes = rawData.episodes;
    this.synopsis = rawData.synopsis;
    this.title = rawData.title;
    this.type = rawData.type;
    this.url = rawData.url;
    this.imageUrl = rawData.image_url;
  }
}
