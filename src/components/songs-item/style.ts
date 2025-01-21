import styled from "styled-components";

export const MenuItemWrapper = styled.div`
   width: 140px;
   margin: 15px 10px;
   .top {
      position: relative;

      & > img {
         width: 140px;
         height: 140px;
      }

      .cover {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background-position: 0 0;

         .info {
            dispaly: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-position: 0 -537px;
            color: #ccc;
            height: 25px;

            .count {
               position: relative;
               left: -5px;
               top: 6px;
            }

            .headset {
               position: relative;
               display: inline-block;
               width: 14px;
               height: 11px;
               margin-right: 10px;
               background-position: 0 -24px;
               left: -2px;
               top: 7px;
            }

            .play {
               display: inline-block;
               width: 17px;
               height: 16px;
               background-position: 0 0;

               position: absolute;
               top: 5px;
               right: 4px;
            }
         }
      }
   }

   > .bottom {
      font-size: 14px;
      color: #000;
      margin-top: 5px;
   }
`;
