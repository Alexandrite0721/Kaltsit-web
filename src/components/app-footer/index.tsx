import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";

interface Iprops {
   children?: ReactNode;
}

const AppFooter: FC<Iprops> = (props?) => {
   return <h2>AppFooter</h2>;
};

export default memo(AppFooter);
