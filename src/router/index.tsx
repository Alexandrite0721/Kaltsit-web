import React, { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Mine = lazy(() => import("@/views/mine"));
const Focus = lazy(() => import("@/views/focus"));
const Discover = lazy(() => import("@/views/discover"));
const Download = lazy(() => import("@/views/download"));

const Recommend = lazy(() => import("@/views/discover/c-views/recommend"));
const Ranking = lazy(() => import("@/views/discover/c-views/ranking"));
const Artists = lazy(() => import("@/views/discover/c-views/artists"));
const Djradio = lazy(() => import("@/views/discover/c-views/djradio"));
const Album = lazy(() => import("@/views/discover/c-views/album"));
const Songs = lazy(() => import("@/views/discover/c-views/songs"));

const routes: any[] = [
   {
      path: "/",
      element: <Navigate to="/discover" />
   },
   {
      path: "/discover",
      element: <Discover />,
      children: [
         {
            path: "/discover",
            element: <Navigate to="/discover/recommend" />
         },
         {
            path: "/discover/recommend",
            element: <Recommend />
         },
         {
            path: "/discover/album",
            element: <Album />
         },
         {
            path: "/discover/ranking",
            element: <Ranking />
         },
         {
            path: "/discover/djradio",
            element: <Djradio />
         },
         {
            path: "/discover/artists",
            element: <Artists />
         },
         {
            path: "/discover/songs",
            element: <Songs />
         }
      ]
   },
   {
      path: "/download",
      element: <Download />
   },
   {
      path: "/focus",
      element: <Focus />
   },
   {
      path: "/mine",
      element: <Mine />
   }
];

export default routes;
