export enum TabType {
  EPISODES = "episode",
  REVIEWS = "reviews",
}

export type Tab = {
  type: TabType;
  title: string;
  body: JSX.Element;
};
