/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link } from "react-router-dom";
import { maxWidth } from "src/constants";
import { pageList } from "src/component/Header";

export const Links = () => {
  return (
    <ul
      css={css`
        display: flex;
        justify-content: start;
        padding: 10px 10px 15px 20px;
        @media (max-width: ${maxWidth}) {
          display: none;
          //flex-direction: column;
          //padding: 20px 10px 15px 20px;
        }
      `}
    >
      {pageList.map((page) => {
        return (
          <li
            css={css`
              font-size: 16px;
              padding-right: 30px;
              //@media (max-width: ${maxWidth}) {
              //  padding-bottom: 10px;
              //}
            `}
          >
            <Link
              to={`/${page.urlName}`}
              css={css`
                text-decoration: none;
                color: #3c454d;
                &:hover {
                  color: #7b8dac;
                }
              `}
            >
              {page.displayName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
