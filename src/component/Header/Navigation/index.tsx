/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import backgroundNavigation from "src/component/Header/Navigation/menu-bg.png";

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
      <li>{page.displayName}</li>
    </a>
  );
});

export const Navigation = () => {
  return (
    <div
      css={css`
        background-image: url(${backgroundNavigation});
        background-repeat: repeat-x;
      `}
    >
      <ul>{pages}</ul>
    </div>
  );
};
