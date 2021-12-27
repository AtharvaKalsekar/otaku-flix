export class Score {
  label: string;
  score: number;
  limit: number;

  constructor(label, score, limit) {
    this.label = label;
    this.score = score;
    this.limit = limit;
  }
}

export interface Scores {
  getScoresArray: () => Score[];
}

export class ReviewScores implements Scores {
  overall: number;
  story: number;
  animation: number;
  sound: number;
  character: number;
  enjoyment: number;

  constructor(rawData: any) {
    this.overall = rawData.overall;
    this.story = rawData.story;
    this.animation = rawData.animation;
    this.sound = rawData.sound;
    this.character = rawData.character;
    this.enjoyment = rawData.enjoyment;
  }

  public getScoresArray = (): Score[] => {
    let scores: Score[] = [];
    scores.push(new Score("overall", this.overall, 10));
    scores.push(new Score("story", this.story, 10));
    scores.push(new Score("animation", this.animation, 10));
    scores.push(new Score("sound", this.sound, 10));
    scores.push(new Score("character", this.character, 10));
    scores.push(new Score("enjoyment", this.enjoyment, 10));
    return scores;
  };
}

export class Review {
  id: number;
  url: string;
  imageUrl: string;
  userName: string;
  episodesSeen: number;
  scores: ReviewScores;
  helpfulCount: number;
  date: string;
  content: string;

  constructor(rawData: any) {
    this.id = rawData.mal_id;
    this.url = rawData.reviewer.url;
    this.imageUrl = rawData.reviewer.image_url;
    this.userName = rawData.reviewer.username;
    this.episodesSeen = rawData.reviewer.episodes_seen;
    this.scores = new ReviewScores(rawData.reviewer.scores);
    this.content = rawData.content;
    this.helpfulCount = rawData.helpful_count;
    this.date = rawData.date;
  }
}
