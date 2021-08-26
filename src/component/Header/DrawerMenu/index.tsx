/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { pageList } from "src/component/Header";
import { textBlue } from "src/constants";

type Props = {
  open: boolean;
};

export const DrawerMenu = (props: Props) => {
  const { open } = props;
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 70%;
        height: 100vh;
        background-color: ${textBlue};
        transform: ${open ? "translateX(0)" : "translateX(-100%)"};
        transition: transform 0.3s ease-in-out;
        z-index: 1;
      `}
    >
      <ul>
        {pageList.map((page) => {
          return (
            <li
              css={css`
                text-decoration: none;
              `}
            >
              {page.displayName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
