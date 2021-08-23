/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { textBlue } from "src/component/Home/HomeBody";
import { maxWidth } from "src/App";

const kindList = [
  { value: "reservation", displayText: "ご予約" },
  { value: "event", displayText: "イベントについて" },
  { value: "other", displayText: "その他のお問い合わせ" },
];

const kinds = kindList.map((kind) => {
  return <option value={`${kind.value}`}>{kind.displayText}</option>;
});

export const ContactBody = () => {
  const formDecoration = css`
    font-size: 16px;
    line-height: 1.6;
    width: 30em;
    padding: 12px;
    border-bottom: 1px dotted #bec2c7;
    @media (max-width: ${maxWidth}) {
      width: 100%;
    }
  `;

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

      <form>
        <div
          css={css`
            ${formDecoration};
          `}
        >
          お問い合わせの種類
          <br />
          <select
            name="kind"
            css={css`
              width: 100%;
            `}
          >
            {kinds}
          </select>
        </div>
        <div
          css={css`
            ${formDecoration};
          `}
        >
          KUJIRA　Cafeにご来店いただいたことはありますか。
          <br />
          <input type="radio" name="first" value="no" id="first_no" checked />
          <label
            htmlFor="first_no"
            css={css`
              padding-right: 10px;
            `}
          >
            はい
          </label>
          <input type="radio" name="first" value="yes" id="first_yes" />
          <label htmlFor="first_yes">いいえ</label>
        </div>
        <div
          css={css`
            ${formDecoration};
          `}
        >
          当カフェをお知りになったきっかけは？
          <br />
          <input type="checkbox" name="how" value="friends" id="how_friends" />
          <label
            htmlFor="how_friends"
            css={css`
              padding-right: 10px;
            `}
          >
            知り合いの紹介で
          </label>
          <input
            type="checkbox"
            name="how"
            value="magazines"
            id="how_magazines"
          />
          <label
            htmlFor="how_magazines"
            css={css`
              padding-right: 10px;
            `}
          >
            雑誌・Webサイトで見て
          </label>
          <input type="checkbox" name="how" value="other" id="how_other" />
          <label
            htmlFor="how_other"
            css={css`
              padding-right: 10px;
            `}
          >
            その他
          </label>
        </div>
        <div
          css={css`
            ${formDecoration};
          `}
        >
          お問い合わせの件名
          <br />
          <input
            type="text"
            name="subject"
            placeholder="お問い合わせ"
            css={css`
              width: 100%;
            `}
          />
        </div>
        <div
          css={css`
            ${formDecoration};
          `}
        >
          お問い合わせの具体的な内容
          <br />
          <textarea
            name="message"
            css={css`
              width: 100%;
              height: 10em;
            `}
          ></textarea>
        </div>
        <div
          css={css`
            ${formDecoration};
          `}
        >
          <input
            type="submit"
            name="submit"
            value="送信"
            css={css`
              width: 100%;
            `}
          />
        </div>
      </form>
    </div>
  );
};
