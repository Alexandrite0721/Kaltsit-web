import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";
import { SettleSingerWrapper } from "./style";
import AreaHeaderV2 from "@/components/area-header-v2";
import { useAppSelector } from "@/store";
import { getImageUrl } from "@/utils/format";

interface Iprops {
   children?: ReactNode;
}

const SettleSinger: FC<Iprops> = (props?) => {
   const { settleSingers } = useAppSelector((state) => {
      return {
         settleSingers: state.recommend.settleSingers
      };
   });

   return (
      <SettleSingerWrapper>
         <AreaHeaderV2
            title="入驻歌手"
            moreText="查看全部>"
            moreLink="#/discover/artists"
         />
         <div className="artists">
            {settleSingers.map((item) => {
               return (
                  <a href="" key={item.id}>
                     <div className="item">
                        <img src={getImageUrl(item.picUrl, 62)} alt="" />
                        <div className="info">
                           <div className="name">{item.name}</div>
                           <div className="alia">{item.alias.join("  ")}</div>
                        </div>
                     </div>
                  </a>
               );
            })}
         </div>
         <div className="apply-for">
            <a href="#/">申请成为网易音乐人</a>
         </div>
      </SettleSingerWrapper>
   );
};

export default memo(SettleSinger);
