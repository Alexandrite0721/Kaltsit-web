import React, { useRef } from "react";
import { memo } from "react";
import type { ReactNode, FC, ElementRef } from "react";
import { AlbumWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { Carousel } from "antd";
import { useAppSelector } from "@/store";
import { shallowEqual } from "react-redux";
import NewAlbumItem from "@/components/new-album-item";

interface Iprops {
   children?: ReactNode;
}

const NewAlbum: FC<Iprops> = (props?) => {
   const { newAlbums } = useAppSelector(
      (state) => ({
         newAlbums: state.recommend.newAlbums
      }),
      shallowEqual
   );

   let newAlbums1 = newAlbums.slice(0, 5);
   let newAlbums2 = newAlbums.slice(5, 10);
   let newAlbumsBox = [newAlbums1, newAlbums2];

   const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

   const handlePrevClick = () => {
      bannerRef.current?.prev();
   };
   const handleNextClick = () => {
      bannerRef.current?.next();
   };

   return (
      <AlbumWrapper>
         <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
         <div className="content">
            <button
               onClick={handlePrevClick}
               className="sprite_02 arrow arrow-left"
            ></button>
            <div className="banner">
               <Carousel ref={bannerRef} dots={false} speed={1500}>
                  {newAlbumsBox.map((item, index) => {
                     return (
                        <div className="album-list" key={index}>
                           {item.map((_item) => {
                              return (
                                 <NewAlbumItem
                                    key={_item.id}
                                    itemData={_item}
                                 />
                              );
                           })}
                        </div>
                     );
                  })}
               </Carousel>
            </div>
            <button
               onClick={handleNextClick}
               className="sprite_02 arrow arrow-right"
            ></button>
         </div>
      </AlbumWrapper>
   );
};

export default memo(NewAlbum);
