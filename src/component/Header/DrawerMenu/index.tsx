/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { pageList } from "src/component/Header";

export const DrawerMenu = () => {
  return (
    <div>
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
