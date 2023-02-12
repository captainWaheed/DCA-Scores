import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Card from "./Cardboard";

import React from "react";

const Cardslider = () => {
  return (
    <ScrollingCarousel>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ScrollingCarousel>
  );
};

export default Cardslider;
