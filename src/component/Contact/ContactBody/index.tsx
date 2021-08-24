/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { useState } from "react";
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

const howList = [
  { value: "friends", id: "how_friends", displayName: "お友達の紹介で" },
  {
    value: "magazines",
    id: "how_magazines",
    displayName: "雑誌・Webサイトで見て",
  },
  { value: "other", id: "how_other", displayName: "その他" },
];

// const hows =

export const ContactBody = () => {
  const [values, setValues] = useState({
    kind: "reservation",
    first: "no",
    how: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    setValues({ ...values, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    setValues({ ...values, [name]: value });
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    const name = event.target.name;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    alert({ values });
  };

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

      <form onSubmit={handleSubmit}>
        <div
          css={css`
            ${formDecoration};
          `}
        >
          お問い合わせの種類
          <br />
          <select
            name="kind"
            onChange={handleSelectChange}
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
          <input
            type="radio"
            name="first"
            value="no"
            id="first_no"
            checked
            onChange={handleInputChange}
          />
          <label
            htmlFor="first_no"
            css={css`
              padding-right: 10px;
            `}
          >
            はい
          </label>
          <input
            type="radio"
            name="first"
            value="yes"
            id="first_yes"
            onChange={handleInputChange}
          />
          <label htmlFor="first_yes">いいえ</label>
        </div>
        <div
          css={css`
            ${formDecoration};
          `}
        >
          当カフェをお知りになったきっかけは？
          <br />
          {howList.map((how) => {
            return (
              <div>
                <input
                  type="checkbox"
                  name="how"
                  value={how.value}
                  id={how.id}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor={how.id}
                  css={css`
                    padding-right: 10px;
                  `}
                >
                  {how.displayName}
                </label>
              </div>
            );
          })}
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
            value={values.subject}
            onChange={handleInputChange}
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
            onChange={handleTextAreaChange}
            value={values.message}
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
          {console.log(values)}
        </div>
      </form>
    </div>
  );
};
