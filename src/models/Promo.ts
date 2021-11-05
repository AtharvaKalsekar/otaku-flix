export class Promo {
  title: string;
  imageUrl: string;
  videoUrl: string;

  constructor(rawData: any) {
    this.title = rawData.title;
    this.imageUrl = rawData.image_url;
    this.videoUrl = rawData.video_url;
  }
}
