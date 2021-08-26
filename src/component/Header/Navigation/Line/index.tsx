/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import backgroundNavigation from "src/component/Header/Navigation/Line/menu-bg.png";
import { maxWidth } from "src/constants";

export const Line = () => {
  return (
    <div
      css={css`
        background-image: url(${backgroundNavigation});
        height: 6px;
        background-repeat: repeat-x;
        vertical-align: top;
        margin-bottom: 15px;
        }
      `}
    >
      {""}
    </div>
  );
};
