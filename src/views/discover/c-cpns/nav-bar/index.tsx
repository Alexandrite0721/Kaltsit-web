import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";
import { NavWrapper } from "./style";
import discoverMenu from "@/assets/data/discoverMenu.json";
import { NavLink } from "react-router-dom";

interface Iprops {
   children?: ReactNode;
}

const NavBar: FC<Iprops> = (props?) => {
   return (
      <NavWrapper>
         <div className="nav wrapper-v1">
            {discoverMenu.map((item) => {
               return (
                  <div key={item.title} className="item">
                     <NavLink to={item.path} className="link">
                        {item.title}
                     </NavLink>
                  </div>
               );
            })}
         </div>
      </NavWrapper>
   );
};

export default memo(NavBar);
