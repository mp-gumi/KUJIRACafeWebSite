/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import backgroundImage from "src/component/Header/Navigation/menu-bg.png";

const pageList = [
  { displayName: "ホーム", urlName: "home" },
  { displayName: "店舗案内", urlName: "about" },
  { displayName: "アクセス", urlName: "access" },
  { displayName: "メニュー", urlName: "menu" },
  { displayName: "お問い合わせ", urlName: "contact" },
];

const pages = pageList.map((page) => {
  return (
    <a>
      <li>{page.displayName}</li>
    </a>
  );
});

export const Navigation = () => {
  return (
    <div>
      <ul>{pages}</ul>
    </div>
  );
};
