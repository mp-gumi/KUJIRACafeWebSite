/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Introduction } from "src/component/About/AboutBody/Introduction";
import { Information } from "src/component/About/AboutBody/Information";

export const AboutBody = () => {
  return (
    <div>
      <Introduction />
      <Information />
    </div>
  );
};
