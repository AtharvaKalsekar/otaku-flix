export class Genre {
  name: String;
  type: String;
  url: String;

  constructor(rawData: any) {
    this.name = rawData.name;
    this.type = rawData.type;
    this.url = rawData.url;
  }
}
