import { Model, parseResponse } from "./utils/ServiceResponseParser";

export interface ServiceCallback {
  onSuccess: (response: any) => any;
  onFaliure: (err: any) => void;
}

const onFetchSuccess = (
  data: Response,
  cb: ServiceCallback,
  model: Model
): any => {
  data
    .json()
    .then((jsonData) => {
      let parsedData = parseResponse(model, jsonData);
      cb.onSuccess(parsedData);
    })
    .catch((err) => {
      cb.onFaliure({ error: err });
    });
};

const onFetchFailure = (err: any, cb: ServiceCallback) => {
  cb.onFaliure(err);
};

export const getSeason = async (cb: ServiceCallback) => {
  fetch("https://api.jikan.moe/v3/season/2018/winter", {
    method: "GET",
  })
    .then((response) => {
      onFetchSuccess(response, cb, Model.SEASON);
    })
    .catch((err) => {
      onFetchFailure(err, cb);
    });
};
