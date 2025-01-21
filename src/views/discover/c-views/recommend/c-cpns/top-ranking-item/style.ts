import styled from "styled-components";
export const RankingItemWrapper = styled.div`
   width: 100%;

   .header {
      display: flex;
      height: 100px;
      margin: 18px 0 0 21.5px;

      .info {
         position: relative;
         font-size: 12px;
         margin-left: 10px;
         margin-top: 15px;
         color: #000;

         .name {
            margin-left: 5px;
         }

         .icon {
            .btn {
               display: inline-block;
               border: none;
               width: 22px;
               height: 22px;
               margin-right: 10px;
               margin-top: 15px;
               cursor: pointer;
            }

            .play {
               background-position: -267px -205px;
               &:hover {
                  background-position: -267px -235px;
               }
            }
            .favor {
               background-position: -300px -205px;
               &:hover {
                  background-position: -300px -235px;
               }
            }
         }
      }
   }

   .list {
      margin-top: 5px;
      .item {
         position: relative;
         display: flex;
         align-items: center;
         height: 32px;

         ._index {
            color: #666;
            width: 35px;
            text-align: center;
            margin-left: 10px;
            font-size: 16px;
         }

         .index {
            color: #c10d0c;
            width: 35px;
            text-align: center;
            margin-left: 10px;
            font-size: 16px;
         }

         .info {
            color: #000;
            width: 170px;
            height: 17px;
            line-height: 17px;
            display: flex;
            justify-content: space-between;

            .name {
               flex: 1;

               white-space: nowrap;
               text-overflow: ellipsis;
               overflow: hidden;
               cursor: pointer;

               &:hover {
                  text-decoration: underline;
               }
            }

            .operator {
               display: flex;
               align-items: center;
               display: none;
               width: 82px;

               .btn {
                  border: none;
                  width: 17px;
                  height: 17px;
                  margin-left: 8px;
                  cursor: pointer;
               }

               .play {
                  background-position: -267px -268px;
               }

               .add {
                  position: relative;
                  top: 2px;
                  background-position: 0 -700px;
               }

               .favor {
                  background-position: -297px -268px;
               }
            }
         }

         &:hover {
            .operator {
               display: block;
            }
         }
      }
   }
   .footer {
      display: flex;
      color: #000;
      position: relative;
      justify-content: flex-end;
      right: 20px;
      top: 7px;

      &:hover {
         text-decoration: underline;
      }
   }
`;
