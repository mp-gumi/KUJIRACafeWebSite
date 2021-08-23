/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link } from "react-router-dom";
import { textBlue } from "src/component/Home/HomeBody";

const addressContent = (
  <div>
    〒199-9999 或留県九寺楽市九寺楽町3-30-8（
    <Link
      to="/access"
      css={css`
        color: #d25833;
        &:hover {
          color: #e3937a;
        }
      `}
    >
      地図
    </Link>
    ）
  </div>
);

const reserveContent = (
  <div>
    <p>
      ご予約は、お電話もしくは
      <Link
        to="/contact"
        css={css`
          color: #d25833;
          &:hover {
            color: #e3937a;
          }
        `}
      >
        お問い合わせフォーム
      </Link>
      より受け付けております。ご予約希望日時と人数をお知らせください。
    </p>
    <p>
      ※フォームからのご予約にはお時間がかかる場合がございますので、ご了承ください。
    </p>
  </div>
);

const informationList = [
  { name: "住所", content: addressContent },
  { name: "電話番号", content: "09-9280-2611" },
  { name: "営業時間", content: "10:00～22:00" },
  { name: "定休日", content: "水曜日・日曜日" },
  { name: "ご予約", content: reserveContent },
];
const informationTable = informationList.map((information) => {
  return (
    <tr>
      <th
        css={css`
          border: 1px solid #bec2c7;
          white-space: nowrap;
          padding: 8px;
          line-height: 1.6;
          color: ${textBlue};
          font-weight: bold;
          background-color: #dde2ea;
        `}
      >
        {information.name}
      </th>
      <td
        css={css`
          border: 1px solid #bec2c7;
          padding: 8px;
          line-height: 1.6;
        `}
      >
        {information.content}
      </td>
    </tr>
  );
});

export const Information = () => {
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
        店舗情報
      </h2>
      <table
        css={css`
          border-collapse: collapse;
          text-align: left;
          font-size: 16px;
        `}
      >
        {informationTable}
      </table>
    </div>
  );
};
