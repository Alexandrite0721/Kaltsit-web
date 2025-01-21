import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";
import { Link } from "react-router-dom";

import { HeaderV1Wrapper } from "./style";
import { Divider } from "antd";

interface Iprops {
   children?: ReactNode;
   title?: string;
   keywords?: string[];
   moreText?: string;
   moreLink?: string;
}

const AreaHeaderV1: FC<Iprops> = (props) => {
   const {
      title = "默认标题",
      keywords = [],
      moreText = "更多",
      moreLink = "/"
   } = props;

   return (
      <HeaderV1Wrapper className="sprite_02">
         <div className="left">
            <h3 className="title">{title}</h3>
            <div className="keywords">
               {keywords.map((item: any) => {
                  return (
                     <div className="item" key={item}>
                        <span className="link">{item}</span>
                        <span className="divider">|</span>
                     </div>
                  );
               })}
            </div>
         </div>
         <div className="right">
            <Link to={moreLink} className="more">
               {moreText}
            </Link>
            <i className="icon sprite_02"></i>
         </div>
      </HeaderV1Wrapper>
   );
};

export default AreaHeaderV1;
