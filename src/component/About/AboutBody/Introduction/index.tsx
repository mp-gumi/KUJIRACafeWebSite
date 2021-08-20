/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link } from "react-router-dom";
import aboutPhoto from "src/component/About/AboutBody/Introduction/about-photo.jpg";
import { textBlue } from "src/component/Home/HomeBody";
import { maxWidth } from "src/App";

export const Introduction = () => {
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
        手作りタルトと香り高い珈琲で、寛ぎのカフェタイムを
      </h2>
      <div
        css={css`
          @media (max-width: ${maxWidth}) {
            float: none;
            text-align: center;
          }
        `}
      >
        <img
          src={aboutPhoto}
          alt="タルト"
          css={css`
            float: left;
            padding: 0 1em 1em 0;
            @media (max-width: ${maxWidth}) {
              float: none;
            }
          `}
        />
      </div>
      <div
        css={css`
          font-size: 16px;
          line-height: 1.6;
        `}
      >
        <p
          css={css`
            margin-top: 16px;
          `}
        >
          大海原を悠然と泳ぐクジラの姿を見たことがあるでしょうか。そのゆったりとした動きや優しい眼差しを見ていると、慌ただしい日常が遠い世界のできごとのように感じられるのです。時間が経つのも忘れて、ただただクジラを眺めてぼーっと過ごしたひとときの心の充実を、私は今も忘れません。
        </p>
        <p
          css={css`
            margin-top: 16px;
          `}
        >
          そんなゆったりとした時間を過ごせるカフェがあったら……そんな思いでつくったのが、このKUJIRA
          CAFEです。古材を活用した味わいのある内装、花と緑に囲まれたテラス。旬の味覚をふんだんに使ったタルトや、地元の野菜にこだわったキッシュは、どれも手作りです。コーヒーは注文をいただいてから焙煎し、挽きたての香りをお楽しみいただいております。
        </p>
        <p
          css={css`
            margin-top: 16px;
          `}
        >
          天気のいい日には、自然を感じられるテラス席もおすすめ。テラス席のみ、ペットの同伴もOKです。おひとり様もお子様連れの方も、お気に入りのお席で、思い思いの時間をゆったりとお過ごしください。
        </p>
        カフェでの時間をより楽しいものにしていただくべく、フラワーアレンジメントの講座や絵本の読み聞かせ、作品展やライブなど、さまざまなイベントも開催しております。スケジュールは
        <Link
          to="/home#news"
          css={css`
            color: #d25833;
            &:hover {
              color: #e3937a;
            }
          `}
        >
          {"<News>"}
        </Link>
        で告知いたしますので、ご確認くださいませ。
        <p
          css={css`
            margin-top: 16px;
          `}
        >
          皆さまのお越しを心よりお待ちしております。
        </p>
        <p
          css={css`
            margin-top: 16px;
            font-weight: bold;
          `}
        >
          KUJIRA Cafe 店主
        </p>
        <p
          css={css`
            margin: 16px 0;
          `}
        >
          鯨井コウタ
        </p>
      </div>
    </div>
  );
};
