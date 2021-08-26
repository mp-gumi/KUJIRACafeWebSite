/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";
import { textBlue, backgroundColor } from "src/constants";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const HamburgerBar = (props: Props) => {
  const { open, setOpen } = props;

  const barCss = css`
    width: 2rem;
    height: 0.25rem;
    background-color: ${backgroundColor};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  `;

  return (
    <div
      onClick={() => setOpen(!open)}
      css={css`
        position: fixed;
        top: 3%;
        left: 5%;
        background-color: ${open ? `transparent` : `${textBlue}`};
        border-radius: 50%;
        height: 3rem;
        width: 3rem;
        cursor: pointer;
        z-index: 10;
        @media (min-width: 768px) {
          display: none;
        }
        &:focus {
          outline: none;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          justify-content: space-around;
          height: 2rem;
          width: 2rem;
          background: transparent;
          border: none;
        `}
      >
        <div
          css={css`
            ${barCss};
            transform: ${open ? `rotate(45deg)` : `rotate(0)`};
          `}
        />
        <div
          css={css`
            ${barCss};
            transform: ${open ? `translateX(-20px)` : `translateX(0)`};
            opacity: ${open ? `0` : `1`};
          `}
        />
        <div
          css={css`
            ${barCss};
            transform: ${open ? `rotate(-45deg)` : `rotate(0)`};
          `}
        />
      </div>
    </div>
  );
};
