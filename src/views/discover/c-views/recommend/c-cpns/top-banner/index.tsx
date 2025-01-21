import { useAppSelector } from "@/store";
import { memo, useRef, useState } from "react";
import type { ReactNode, FC, ElementRef } from "react";
import { shallowEqual } from "react-redux";
import { Carousel } from "antd";
import classNames from "classnames";

import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from "./style";

interface Iprops {
   children?: ReactNode;
}

const topBanner: FC<Iprops> = (props?) => {
   const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

   const [currentIndex, setCurrentIndex] = useState(0);
   const [dotsIsActived, setDotsIsActived] = useState(1);

   const { banners } = useAppSelector(
      (state) => ({
         banners: state.recommend.banners
      }),
      shallowEqual
   );

   const handlePrevClick = () => {
      bannerRef.current?.prev();
   };

   const handleNextClick = () => {
      bannerRef.current?.next();
   };

   const handleAfterChange = (current: number) => {
      setCurrentIndex(current);
      setDotsIsActived(1);
   };

   const handleBeforeChange = () => {
      let flag = 0;
      if (flag === 0) flag = 1;
      else {
         setDotsIsActived(0);
      }
   };

   let bgImage = banners[currentIndex]?.imageUrl;
   bgImage = bgImage + "?imageView&blur=40x20";

   return (
      <BannerWrapper
         style={{
            background: `url(${bgImage}) `
         }}
      >
         <div className="banner wrap-v2">
            <BannerLeft>
               <Carousel
                  effect="fade"
                  dots={false}
                  autoplay
                  autoplaySpeed={3000}
                  ref={bannerRef}
                  afterChange={handleAfterChange}
                  beforeChange={handleBeforeChange}
               >
                  {banners.map((item) => {
                     return (
                        <div className="banner-item" key={item.imageUrl}>
                           <img src={item.imageUrl} className="image" />
                        </div>
                     );
                  })}
               </Carousel>
               <ul className="dots">
                  {banners.map((item, index) => {
                     return (
                        <li key={item.imageUrl}>
                           <span
                              onClick={() => {
                                 bannerRef.current?.goTo(index);
                              }}
                              className={classNames("item", {
                                 active:
                                    index === currentIndex &&
                                    dotsIsActived === 1
                              })}
                           ></span>
                        </li>
                     );
                  })}
               </ul>
            </BannerLeft>
            <BannerRight></BannerRight>
            <BannerControl>
               <button className="btn left" onClick={handlePrevClick}></button>
               <button className="btn right" onClick={handleNextClick}></button>
            </BannerControl>
         </div>
      </BannerWrapper>
   );
};

export default memo(topBanner);
