import { Model, parseResponse } from "./utils/ServiceResponseParser";

export interface ServiceCallback {
  onSuccess: (response: any) => any;
  onFaliure: (err: any) => void;
}

export const getSeason = (cb: ServiceCallback) => {
  fetch("https://api.jikan.moe/v3/season/2018/winter", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((jsonData) => {
      let parsedData = parseResponse(Model.SEASON, jsonData);
      cb.onSuccess(parsedData);
    })
    .catch((err) => {
      cb.onFaliure(err);
    });
};
