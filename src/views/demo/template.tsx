import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";

interface Iprops {
   children?: ReactNode;
}

const template: FC<Iprops> = (props?) => {
   return <div>template</div>;
};

export default memo(template);
