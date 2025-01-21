import hyRequest from "@/service";

export const getBanners = () => {
   return hyRequest.get({
      url: "/banner"
   });
};

export const getHotRecommend = (limit = 30) => {
   return hyRequest.get({
      url: "/personalized",
      params: {
         limit
      }
   });
};

export const getNewAlbum = () => {
   return hyRequest.get({
      url: "/album/newest"
   });
};

export const getPlayListDetail = (id: number) => {
   return hyRequest.get({
      url: "playlist/detail",
      params: {
         id
      }
   });
};

export const getArtistList = (limit = 30) => {
   return hyRequest.get({
      url: "artist/list",
      params: {
         limit
      }
   });
};
