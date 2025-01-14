import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";

interface Iprops {
   children?: ReactNode;
}

const Artists: FC<Iprops> = (props?) => {
   return <div>Artists</div>;
};

export default memo(Artists);
