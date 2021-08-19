/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import backgroundNavigation from "src/component/Header/Navigation/menu-bg.png";
import { maxWidth } from "src/App";

const pageList = [
  { displayName: "ホーム", urlName: "index" },
  { displayName: "店舗案内", urlName: "about" },
  { displayName: "アクセス", urlName: "access" },
  { displayName: "メニュー", urlName: "menu" },
  { displayName: "お問い合わせ", urlName: "contact" },
];

const pages = pageList.map((page) => {
  return (
    <a href={`${page.urlName}.html`}>
      <li
        css={css`
          font-size: 16px;
          padding-right: 30px;
        `}
      >
        {page.displayName}
      </li>
    </a>
  );
});

export const Navigation = () => {
  return (
    <div
      css={css`
        background-image: url(${backgroundNavigation});
        background-repeat: repeat-x;
        vertical-align: top;
        @media (max-width: ${maxWidth}) {
          background-color: #dfddda;
          margin-bottom: 15px;
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
        {pages}
      </ul>
    </div>
  );
};
