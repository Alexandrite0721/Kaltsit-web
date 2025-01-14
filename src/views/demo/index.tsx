import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";

interface User {
   children?: ReactNode;
   id: number;
   name: string;
   age?: number;
}

const Download: FC<User> = (props) => {
   return (
      <div>
         <div>{props.id}</div>
         <div>{props.name}</div>
         <div>{props.age}</div>
         <div>{props.children}</div>
      </div>
   );
};

Download.defaultProps = {
   id: 0,
   name: "unknown",
   age: 0
};

export default memo(Download);
