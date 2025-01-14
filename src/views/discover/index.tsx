import React from "react";
import { memo, Suspense } from "react";
import type { ReactNode, FC } from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "./c-cpns/nav-bar";

interface Iprops {
   children?: ReactNode;
}

const Discover: FC<Iprops> = () => {
   return (
      <div>
         <NavBar />
         <Suspense fallback="">
            <Outlet />
         </Suspense>
      </div>
   );
};

export default memo(Discover);
