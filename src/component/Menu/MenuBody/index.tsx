/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import cassisOrangeJuice from "src/component/Menu/MenuBody/menu-photo1.jpg";
import nutsTarte from "src/component/Menu/MenuBody/menu-photo2.jpg";
import plumTarte from "src/component/Menu/MenuBody/menu-photo3.jpg";
import { maxWidth, titleCss } from "src/constants";

const itemList = [
  {
    name: "カシスとオレンジのジュース",
    image: cassisOrangeJuice,
    description:
      "リキュールを使ったカクテルでおなじみのカシスは、ポリフェノールやビタミンが豊富なベリー系のフルーツです。オレンジとともにジューサーにかけて、爽やかなドリンクに仕上げました。",
    price: 480,
  },
  {
    name: "ナッツのタルト",
    image: nutsTarte,
    description:
      "ピーカンナッツにアーモンド、くるみ、ヘーゼルナッツ、パンプキンシード。5種類のナッツを贅沢にトッピングした当店の定番タルトです。黒糖を使用したコクのある甘味は、コーヒーのお供にぴったりです。",
    price: 550,
  },
  {
    name: "太陽プラムのタルト",
    image: plumTarte,
    description:
      "今月の旬のタルトはこちら。山梨産のプラム「太陽」を使用しています。太陽は、完熟すると酸味が抜けて、驚くほど甘くなります。クリームチーズを混ぜ込んだフィリングとも相性抜群。この時期だけの味、ぜひお試しください.",
    price: 600,
  },
];

export const MenuBody = () => {
  return (
    <div>
      <h2
        css={css`
          ${titleCss};
        `}
      >
        メニュー
      </h2>

      {itemList.map((item) => {
        return (
          <div
            css={css`
              display: flex;
              border-bottom: 1px dotted #bec2c7;
              font-size: 16px;
              line-height: 1.6;
              padding: 20px 8px;
              width: 100%;
              @media (max-width: ${maxWidth}) {
                flex-direction: column;
              }
            `}
          >
            <img
              src={item.image}
              alt={`${item.name}`}
              css={css`
                max-width: 100%;
                margin-right: 16px;
              `}
            />

            <div
              css={css`
                min-width: 328px;
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
      })}
    </div>
  );
};
