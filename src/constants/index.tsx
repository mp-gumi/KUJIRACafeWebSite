import { css } from "@emotion/react";

export const backgroundColor = "#eeece9";
export const maxWidth = "767px";
export const textBlue = "#3f5170";
export const titleCss = css`
  margin: 20px 0;
  padding: 5px;
  font-size: 22px;
  font-weight: bold;
  color: ${textBlue};
  border-bottom: dotted 3px ${textBlue};
`;
export const linkCssOrange = css`
  color: #d25833;
  &:hover {
    color: #e3937a;
  }
`;
