export class Episode {
  id: number;
  title: string;
  titleJapanese: string;
  aired: string;
  filler: boolean;

  constructor(rawData: any) {
    this.id = rawData.episode_id;
    this.title = rawData.title;
    this.titleJapanese = rawData.title_japanese;
    this.aired = rawData.aired;
    this.filler = rawData.filler;
  }
}
