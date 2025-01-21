import styled from "styled-components";

export const BannerWrapper = styled.div`
   .banner {
      display: flex;
      height: 270px;
      position: relative;
   }
`;

export const BannerLeft = styled.div`
   position: relative;
   width: 730px;

   .banner-item {
      overflow: hidden;
      height: 270px;
      .image {
         width: 100%;
      }
   }

   .dots {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      margin: 0 auto;
      justify-content: center;
      > li {
         margin: 0 2px;
         .item {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url(${require("@/assets/img/banner_sprite.png")})
               3px -343px;
            cursor: pointer;

            &:hover,
            &.active {
               background-position: -16px -343px;
            }
         }
      }
   }
`;
export const BannerRight = styled.a.attrs({
   href: "https://music.163.com/#/download",
   target: "_blank"
})`
   width: 250px;
   height: 270px;
   background: url(${require("@/assets/img/download.png")});
`;

export const BannerControl = styled.div`
   position: absolute;
   left: 0;
   right: 0;
   top: 40%;
   transform: translateY(-50%);

   .btn {
      position: absolute;
      width: 37px;
      height: 63px;
      background-image: url(${require("@/assets/img/banner_sprite.png")});
      background-color: transparent;
      cursor: pointer;
      border: none;

      &:hover {
         background-color: rgba(0, 0, 0, 0.1);
      }
   }

   .left {
      left: -100px;
      background-position: 0 -360px;
   }

   .right {
      right: -100px;
      background-position: 0 -508px;
   }
`;
