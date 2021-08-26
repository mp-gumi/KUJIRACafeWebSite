/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Links } from "src/component/Header/Navigation/Links";
import { Line } from "src/component/Header/Navigation/Line";

export const Navigation = () => {
  return (
    <div>
      <Line />
      <Links />
    </div>
  );
};
