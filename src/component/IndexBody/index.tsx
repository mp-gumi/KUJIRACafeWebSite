/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import keyVisual from "src/component/IndexBody/keyvisual.jpg";

export const IndexBody = () => {
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
        css={css`
          margin: 20px 0;
          padding: 5px;
          font-size: 22px;
          color: #3f5170;
          border-bottom: dotted 3px #3f5170;
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
        <a href={""}>PICNIC</a>
        」のライブを開催します。投げ銭方式です。お楽しみに！
      </p>
    </div>
  );
};
