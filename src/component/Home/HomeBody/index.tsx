/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { titleCss } from "src/constants";
import keyVisual from "src/component/Home/HomeBody/keyvisual.jpg";

export const HomeBody = () => {
  return (
    <div>
      <img
        src={keyVisual}
        alt=""
        css={css`
          width: 100%;
        `}
      />
      <h2
        id="news"
        css={css`
          ${titleCss}
        `}
      >
        News
      </h2>
      <p
        css={css`
          font-size: 16px;
          line-height: 1.6rem;
        `}
      >
        4月29日（土）は、九寺楽町の春祭りに出店するため、お店は休業させていたただきます。春祭りでタルトやキッシュ、コーヒーも販売するので、ぜひお越しください。
      </p>
      <p
        css={css`
          font-size: 16px;
          line-height: 1.6rem;
        `}
      >
        3月20日（月・祝）は、18時からアコースティックギターデュオ「
        <a
          href={"https://larc-en-ciel.com/index.php"}
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            color: #d25833;
            &:hover {
              color: #e3937a;
            }
          `}
        >
          PICNIC
        </a>
        」のライブを開催します。投げ銭方式です。お楽しみに！
      </p>
    </div>
  );
};
