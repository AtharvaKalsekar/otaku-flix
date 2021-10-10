import { Season } from "../models/Season";

export enum Model {
  SEASON = "season",
}

export const parseResponse = (model: Model, response: any): any => {
  switch (model) {
    case Model.SEASON:
      return new Season(response);
  }
};
