import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";

interface Iprops {
   children?: ReactNode;
}

const Mine: FC<Iprops> = (props?) => {
   return <div>Mine</div>;
};

export default memo(Mine);
