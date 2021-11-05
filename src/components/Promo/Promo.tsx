import React from "react";
import { Promo } from "../../models/Promo";

const PromoComponent = (props: Promo) => {
  return (
    <iframe
      title="promo"
      width="100%"
      height="315"
      src={`${props.videoUrl}&controls=0`}
    ></iframe>
  );
};

export default PromoComponent;
