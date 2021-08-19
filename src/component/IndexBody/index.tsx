/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import keyVisual from "src/component/IndexBody/keyvisual.jpg";

export const IndexBody = () => {
  return (
    <div>
      <img src={keyVisual} alt="" />
      <h2>News</h2>
      <p>
        4月29日（土）は、九寺楽町の春祭りに出店するため、お店は休業させていたただきます。春祭りでタルトやキッシュ、コーヒーも販売するので、ぜひお越しください。
      </p>
      <p>
        3月20日（月・祝）は、18時からアコースティックギターデュオ「
        <a href={""}>PICNIC</a>
        」のライブを開催します。投げ銭方式です。お楽しみに！
      </p>
    </div>
  );
};
