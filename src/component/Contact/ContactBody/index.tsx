/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { textBlue } from "src/component/Home/HomeBody";

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
    </div>
  );
};
