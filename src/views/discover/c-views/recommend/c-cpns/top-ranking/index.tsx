import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";
import { RankingWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { useAppSelector } from "@/store";
import { shallowEqual } from "react-redux";
import TopRankingItem from "../top-ranking-item";

interface Iprops {
   children?: ReactNode;
}

const TopRanking: FC<Iprops> = (props?) => {
   const { rankings } = useAppSelector(
      (state) => ({
         rankings: state.recommend.rankings
      }),
      shallowEqual
   );

   return (
      <RankingWrapper>
         <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
         <div className="content">
            {rankings.map((item) => {
               return <TopRankingItem key={item.id} itemData={item} />;
            })}
         </div>
      </RankingWrapper>
   );
};

export default memo(TopRanking);
