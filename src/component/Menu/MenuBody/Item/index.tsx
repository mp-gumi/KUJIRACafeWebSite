/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { maxWidth } from "src/constants";

type ItemType = {
  name: string;
  image: string;
  description: string;
  price: number;
};

type Props = {
  item: ItemType;
};

export const Item = (props: Props) => {
  const { item } = props;
  return (
    <div
      css={css`
        display: flex;
        font-size: 16px;
        line-height: 1.6;
        padding: 20px 8px;
        border-bottom: 1px dotted #bec2c7;
        @media (max-width: ${maxWidth}) {
          flex-direction: column;
        }
      `}
    >
      <img
        src={item.image}
        alt={`${item.name}`}
        css={css`
          min-width: 0;
          flex: 1 1 auto;
          margin-right: 16px;
        `}
      />
      <div
        css={css`
          flex: 0 0 336px;
          @media (max-width: ${maxWidth}) {
            flex: none;
          }
        `}
      >
        <h3
          css={css` 
            font-weight: bold;
            @media (max-width: ${maxWidth}) {
              margin-top: 16px;
          `}
        >
          {item.name}
        </h3>
        <p
          css={css`
            margin: 16px 0;
          `}
        >
          {item.description}
        </p>
        <p>¥{item.price}-</p>
      </div>
    </div>
  );
};
