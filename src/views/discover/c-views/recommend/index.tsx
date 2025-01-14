import React, { useEffect } from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";

interface Iprops {
   children?: ReactNode;
}

const Recommend: FC<Iprops> = (props?) => {
   return <div>Recommend</div>;
};

export default memo(Recommend);
