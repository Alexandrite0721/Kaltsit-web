import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";
import { HotAnchorWrapper } from "./style";
import AreaHeaderV2 from "@/components/area-header-v2";
import { useAppSelector } from "@/store";
import { getImageUrl } from "@/utils/format";

interface Iprops {
   children?: ReactNode;
}

const HotAnchor: FC<Iprops> = (props?) => {
   const { hotAnchor } = useAppSelector((state) => {
      return {
         hotAnchor: state.recommend.hotAnchor
      };
   });

   //    console.log(hotAnchor);

   return (
      <HotAnchorWrapper>
         <AreaHeaderV2 title="热门主播" />
         <div className="anchor">
            {hotAnchor.list.slice(0, 5).map((item: any) => {
               return (
                  <a href="#/discover/djradio" className="info" key={item.id}>
                     <img src={getImageUrl(item.avatarUrl, 60)} />
                     <div className="name">{item.nickName}</div>
                  </a>
               );
            })}
         </div>
      </HotAnchorWrapper>
   );
};

export default memo(HotAnchor);
