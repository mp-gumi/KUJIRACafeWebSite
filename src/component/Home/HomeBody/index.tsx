/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { HeroImage } from "./HeroImage";
import { News } from "src/component/Home/HomeBody/News";

export const HomeBody = () => {
  return (
    <div>
      <HeroImage />
      <News />
    </div>
  );
};
