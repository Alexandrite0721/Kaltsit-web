import { memo } from "react";
import type { ReactNode, FC } from "react";
import { RecommendWrapper } from "../../style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { useAppSelector } from "@/store";
import { shallowEqual } from "react-redux";
import SongMenuItem from "@/components/songs-item";
import { HotWrapper } from "./style";

interface Iprops {
   children?: ReactNode;
}

const HotRecommend: FC<Iprops> = (props?) => {
   const { hotRecommends } = useAppSelector(
      (state) => ({
         hotRecommends: state.recommend.recommends
      }),
      shallowEqual
   );

   return (
      <RecommendWrapper>
         <AreaHeaderV1
            title="热门推荐"
            keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
            moreLink="/discover/songs"
         ></AreaHeaderV1>
         <HotWrapper>
            <div className="recommend-list">
               {hotRecommends.map((item) => {
                  return <SongMenuItem key={item.id} itemData={item} />;
               })}
            </div>
         </HotWrapper>
      </RecommendWrapper>
   );
};

export default memo(HotRecommend);
