import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";

interface Iprops {
   children?: ReactNode;
}

const Songs: FC<Iprops> = (props?) => {
   return <div>Songs</div>;
};

export default memo(Songs);
