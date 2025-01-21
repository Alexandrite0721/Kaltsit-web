import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";
import { HotAnchorWrapper } from "./style";
import AreaHeaderV2 from "@/components/area-header-v2";

interface Iprops {
   children?: ReactNode;
}

const HotAnchor: FC<Iprops> = (props?) => {
   return (
      <HotAnchorWrapper>
         <AreaHeaderV2 title="热门主播" />
         <div className="header"></div>
      </HotAnchorWrapper>
   );
};

export default memo(HotAnchor);
