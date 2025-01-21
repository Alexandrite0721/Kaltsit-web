import styled from "styled-components";

export const RecommendWrapper = styled.div`
   > .content {
      border: 1px solid #d3d3d3;
      display: flex;
      background-image: url(${require("@/assets/img/wrap-bg.png")});
      background-size: 103% 100%;
      > .left {
         width: 730px;
         padding: 10px;
      }
      > .right {
         width: 250px;
         margin-left: 1px;
      }
   }
`;
