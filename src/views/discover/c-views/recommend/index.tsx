import { useAppDispatch } from "@/store";
import React, { useEffect, memo } from "react";
import type { ReactNode, FC } from "react";

import {
   fetchArtistListAction,
   fetchBannerDataAction,
   fetchHotRecommendAction,
   fetchNewAlbumAction,
   fetchRankingDataAction
} from "./store/recommend";
import TopBanner from "./c-cpns/top-banner";
import { RecommendWrapper } from "./style";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import TopRanking from "./c-cpns/top-ranking";
import UserLogin from "./c-cpns/user-login";
import SettleSinger from "./c-cpns/settle-singer";
import HotAnchor from "./c-cpns/hot-anchor";

interface Iprops {
   children?: ReactNode;
}

const Recommend: FC<Iprops> = (props?) => {
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(fetchBannerDataAction());
      dispatch(fetchHotRecommendAction());
      dispatch(fetchNewAlbumAction());
      dispatch(fetchRankingDataAction());
      dispatch(fetchArtistListAction());
   }, []);

   return (
      <RecommendWrapper>
         <TopBanner />
         <div className="content wrap-v2">
            <div className="left">
               <HotRecommend />
               <NewAlbum />
               <TopRanking />
            </div>
            <div className="right">
               <UserLogin />
               <SettleSinger />
               <HotAnchor />
            </div>
         </div>
      </RecommendWrapper>
   );
};

export default memo(Recommend);
