/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import mapImage from "src/component/Access/AccessBody/map.png";
import { textBlue } from "src/constants";

const routeList = [
  "駅東口を出ます。",
  "駅前商店街を国道999号線方面へ向かいます。",
  "国道999号線を渡り直進します。",
  "銀行ATMの角を左に曲がり2軒目の1階です。",
];
const routes = routeList.map((route) => {
  return (
    <li
      css={css`
        &:before {
          counter-increment: order;
          content: counter(order) ". ";
          color: ${textBlue};
        }
      `}
    >
      {route}
    </li>
  );
});

export const AccessBody = () => {
  return (
    <div>
      <h2
        css={css`
          margin: 20px 0;
          padding: 5px;
          font-size: 22px;
          font-weight: bold;
          color: ${textBlue};
          border-bottom: dotted 3px ${textBlue};
        `}
      >
        アクセス
      </h2>
      <div
        css={css`
          text-align: center;
        `}
      >
        <img
          src={mapImage}
          alt="地図"
          css={css`
            max-width: 100%;
          `}
        />
      </div>
      <div
        css={css`
          font-size: 16px;
          line-height: 1.6;
        `}
      >
        <p
          css={css`
            margin: 16px 0;
          `}
        >
          九寺楽駅 東口 徒歩2分
        </p>
        <ol
          css={css`
            counter-reset: order;
            list-style-type: none;
            padding-left: 15px;
          `}
        >
          {routes}
        </ol>
      </div>
    </div>
  );
};
