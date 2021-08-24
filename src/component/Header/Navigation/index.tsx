/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link } from "react-router-dom";
import backgroundNavigation from "src/component/Header/Navigation/menu-bg.png";
import { maxWidth } from "src/constants";

const pageList = [
  { displayName: "ホーム", urlName: "home" },
  { displayName: "店舗案内", urlName: "about" },
  { displayName: "アクセス", urlName: "access" },
  { displayName: "メニュー", urlName: "menu" },
  { displayName: "お問い合わせ", urlName: "contact" },
];

export const Navigation = () => {
  return (
    <div
      css={css`
        background-image: url(${backgroundNavigation});
        background-repeat: repeat-x;
        vertical-align: top;
        margin-bottom: 15px;
        @media (max-width: ${maxWidth}) {
          background-color: #dfddda;
        }
      `}
    >
      <ul
        css={css`
          display: flex;
          justify-content: start;
          padding: 20px 10px 15px 20px;
          @media (max-width: ${maxWidth}) {
            flex-direction: column;
            padding: 20px 10px 15px 20px;
          }
        `}
      >
        {pageList.map((page) => {
          return (
            <li
              css={css`
                font-size: 16px;
                padding-right: 30px;
                @media (max-width: ${maxWidth}) {
                  padding-bottom: 10px;
                }
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
    </div>
  );
};
