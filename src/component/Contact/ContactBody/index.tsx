/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { textBlue } from "src/component/Home/HomeBody";

const inquiryList = [
  { value: "reservation", displayName: "ご予約" },
  { value: "event", displayName: "イベントについて" },
  { value: "other", displayName: "その他のお問い合わせ" },
];

const inquirys = inquiryList.map((inquiry) => {
  return <option value={`${inquiry.value}`}>{inquiry.displayName}</option>;
});

export const ContactBody = () => {
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
        お問い合わせ
      </h2>
      <form
        css={css`
          font-size: 16px;
          line-height: 1.6;
        `}
      >
        <div
          css={css`
            border-bottom: 1px dotted #bec2c7;
            padding: 12px;
          `}
        >
          お問い合わせの種類
          <br />
          <select name="kind">{inquirys}</select>
        </div>
        <div
          css={css`
            border-bottom: 1px dotted #bec2c7;
          `}
        >
          KUJIRA　Cafeにご来店いただいたことはありますか。
          <br />
          <input type="radio" name="first" value="yes" checked />
          はい
          <input type="radio" name="first" value="no" />
          いいえ
        </div>
        <div
          css={css`
            border-bottom: 1px dotted #bec2c7;
          `}
        >
          当カフェをお知りになったきっかけは？
          <br />
          <input type="checkbox" name="how" value="friends" />
          知り合いの紹介で
          <input type="checkbox" name="how" value="magazines" />
          雑誌・Webサイトで見て
        </div>
        <div
          css={css`
            border-bottom: 1px dotted #bec2c7;
          `}
        >
          お問い合わせの件名
          <br />
          <input type="text" name="subject" placeholder="お問い合わせ" />
        </div>
        <div
          css={css`
            border-bottom: 1px dotted #bec2c7;
          `}
        >
          お問い合わせの具体的な内容
          <br />
          <textarea name="message"></textarea>
        </div>
      </form>
    </div>
  );
};
