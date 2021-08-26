/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link } from "react-router-dom";
import { pageList } from "src/component/Header";
import { backgroundColor, textBlue } from "src/constants";

type Props = {
  open: boolean;
};

export const DrawerMenu = (props: Props) => {
  const { open } = props;
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 50%;
        height: 100vh;
        background-color: ${textBlue};
        transform: ${open ? "translateX(0)" : "translateX(-100%)"};
        transition: transform 0.3s ease-in-out;
        z-index: 1;
        @media (min-width: 768px) {
          display: none;
        }
      `}
    >
      <div
        css={css`
          height: 15vh;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        {pageList.map((page) => {
          return (
            <Link
              to={`/${page.urlName}`}
              css={css`
                text-decoration: none;
              `}
            >
              <div
                css={css`
                  color: ${backgroundColor};
                  font-size: 20px;
                  padding-bottom: 2px;
                  margin: 10px 0;
                  border-bottom: transparent solid 1px;
                  &:hover {
                    border-bottom: ${backgroundColor} solid 1px;
                    transition-duration: 0.3s;
                  }
                `}
              >
                {page.displayName}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
