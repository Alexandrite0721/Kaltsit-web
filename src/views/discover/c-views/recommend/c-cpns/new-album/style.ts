import styled from "styled-components";

export const AlbumWrapper = styled.div`
   margin-top: 50px;

   > .content {
      height: 186px;
      background-color: #f5f5f5;
      border: 1px solid #d3d3d3;
      margin: 20px 0 37px;
      padding: 0 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .arrow {
      position: relative;
      bottom: 20px;

      width: 17px;
      height: 17px;
      cursor: pointer;
   }

   .arrow-left {
      background-position: -260px -75px;
      border: 1px solid #f5f5f5;

      &:hover {
         background-position: -280px -75px;
      }
   }

   .arrow-right {
      background-position: -300px -75px;
      border: 1px solid #f5f5f5;

      &:hover {
         background-position: -320px -75px;
      }
   }

   .banner {
      overflow: hidden;
      width: 600px;
      height: 200px;

      .album-list {
         display: flex !important;
      }
   }
`;
