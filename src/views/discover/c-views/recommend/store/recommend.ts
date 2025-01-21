import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
   getArtistList,
   getBanners,
   getHotAnchor,
   getHotRecommend,
   getNewAlbum,
   getPlayListDetail
} from "../service/recommend";

export const fetchBannerDataAction = createAsyncThunk(
   "banners",
   async (arg, { dispatch }) => {
      const res = await getBanners();
      dispatch(changeBannersAction(res.banners));
   }
);

export const fetchHotRecommendAction = createAsyncThunk(
   "hotRecommend",
   async (arg, { dispatch }) => {
      const res = await getHotRecommend(8);
      dispatch(changeHotRecommendAction(res.result));
   }
);

export const fetchNewAlbumAction = createAsyncThunk(
   "newAlbum",
   async (arg, { dispatch }) => {
      const res = await getNewAlbum();
      dispatch(changeNewAlbumAction(res.albums));
   }
);

const rankingIds = [19723756, 3779629, 2884035];
export const fetchRankingDataAction = createAsyncThunk(
   "rakingData",
   (arg, { dispatch }) => {
      const res: Promise<any>[] = [];
      rankingIds.forEach((id) => {
         res.push(getPlayListDetail(id));
      });
      Promise.all(res).then((res) => {
         const playlists = res.map((item) => item.playlist);
         dispatch(changeRankingAction(playlists));
      });
   }
);

export const fetchArtistListAction = createAsyncThunk(
   "artistList",
   async (arg, { dispatch }) => {
      const res = await getArtistList(5);
      dispatch(changeArtistListAction(res.artists));
   }
);

export const fetchHotAnchorAction = createAsyncThunk(
   "hotAnchor",
   async (arg, { dispatch }) => {
      const res = await getHotAnchor();
      dispatch(changeHotAnchorAction(res.data));
   }
);

interface IRecommendState {
   banners: any[];
   recommends: any[];
   newAlbums: any[];
   rankings: any[];
   settleSingers: any[];
   hotAnchor: any;
}
const initialState: IRecommendState = {
   banners: [],
   recommends: [],
   newAlbums: [],
   rankings: [],
   settleSingers: [],
   hotAnchor: {}
};

const recommendSlice = createSlice({
   name: "recommend",
   initialState,
   reducers: {
      changeBannersAction(state, { payload }) {
         state.banners = payload;
      },
      changeHotRecommendAction(state, { payload }) {
         state.recommends = payload;
      },
      changeNewAlbumAction(state, { payload }) {
         state.newAlbums = payload;
      },
      changeRankingAction(state, { payload }) {
         state.rankings = payload;
      },
      changeArtistListAction(state, { payload }) {
         state.settleSingers = payload;
      },
      changeHotAnchorAction(state, { payload }) {
         state.hotAnchor = payload;
      }
   }
});

export default recommendSlice.reducer;
export const {
   changeBannersAction,
   changeHotRecommendAction,
   changeNewAlbumAction,
   changeRankingAction,
   changeArtistListAction,
   changeHotAnchorAction
} = recommendSlice.actions;
