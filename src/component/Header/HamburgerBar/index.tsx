/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const HamburgerBar = (props: Props) => {
  const { open, setOpen } = props;
  return (
    <div
      onClick={() => setOpen(!open)}
      css={css`
        display: flex;
      `}
    >
      <div />
      <div />
      <div />
    </div>
  );
};
