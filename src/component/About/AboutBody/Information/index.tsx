/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { textBlue } from "src/component/Home/HomeBody";

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
      <table>
        <tr>
          <th>住所</th>
          <td>〒199-9999 或留県九寺楽市九寺楽町3-30-8（地図）</td>
        </tr>
        <tr>
          <th>電話番号</th>
          <td>09-9280-2611</td>
        </tr>
        <tr>
          <th>営業時間</th>
          <td>10:00~20:00</td>
        </tr>
        <tr>
          <th>定休日</th>
          <td>水曜日・日曜日</td>
        </tr>
        <tr>
          <th>ご予約</th>
          <td>
            ご予約は、お電話もしくはお問い合わせフォームより受け付けております。ご予約希望日時と人数をお知らせください。
            ※フォームからのご予約にはお時間がかかる場合がございますので、ご了承ください。
          </td>
        </tr>
      </table>
    </div>
  );
};
