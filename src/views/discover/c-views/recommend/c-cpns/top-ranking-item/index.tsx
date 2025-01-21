import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";
import { RankingItemWrapper } from "./style";
import { getImageUrl } from "@/utils/format";

interface Iprops {
   children?: ReactNode;
   itemData: any;
}

const TopRankingItem: FC<Iprops> = (props) => {
   const { itemData } = props;
   const { tracks = [] } = itemData;

   return (
      <RankingItemWrapper>
         <div className="header">
            <div className="image">
               <img src={getImageUrl(itemData.coverImgUrl, 82)} alt="" />
               <a href="" className="sprite_cover"></a>
            </div>
            <div className="info">
               <div className="name"> {itemData.name}</div>
               <div className="icon">
                  <button className="btn sprite_02 play"></button>
                  <button className="btn sprite_02 favor"></button>
               </div>
            </div>
         </div>

         <div className="list">
            {tracks.slice(0, 10).map((item: any, index: number) => {
               return (
                  <div className="item" key={item.id}>
                     <div className={index <= 2 ? "index" : "_index"}>
                        {index + 1}
                     </div>
                     <div className="info">
                        <div className="name">{item.name}</div>
                        <div className="operator">
                           <button className="btn sprite_02 play"></button>
                           <button className="btn sprite_icon2 add"></button>
                           <button className="btn sprite_02 favor"></button>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
         <div className="footer">
            <a href="#/discover/ranking">{"查看全部>"}</a>
         </div>
      </RankingItemWrapper>
   );
};

export default memo(TopRankingItem);
