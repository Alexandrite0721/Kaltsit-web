import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";

interface Iprops {
   children?: ReactNode;
}

const Album: FC<Iprops> = (props?) => {
   return <div>Album</div>;
};

export default memo(Album);
