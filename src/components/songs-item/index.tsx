import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";
import { MenuItemWrapper } from "./style";
import { formatCount, getImageUrl } from "@/utils/format";

interface Iprops {
   children?: ReactNode;
   itemData: any;
}

const SongMenuItem: FC<Iprops> = (props) => {
   const { itemData } = props;
   return (
      <MenuItemWrapper>
         <div className="top">
            <img src={getImageUrl(itemData.picUrl, 140)} alt="" />
            <div className="cover sprite_cover">
               <div className="info sprite_cover">
                  <span>
                     <i className="sprite_icon headset"></i>
                     <span className="count">
                        {formatCount(itemData.playCount)}
                     </span>
                  </span>
                  <i className="sprite_icon play"></i>
               </div>
            </div>
         </div>
         <div className="bottom">{itemData.name}</div>
      </MenuItemWrapper>
   );
};

export default memo(SongMenuItem);
