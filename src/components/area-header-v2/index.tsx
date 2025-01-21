import React from "react";
import { memo } from "react";
import type { ReactNode, FC } from "react";
import { HeaderV2Wrapper } from "./style";

interface Iprops {
   children?: ReactNode;
   title?: string;
   moreText?: string;
   moreLink?: string;
}

const AreaHeaderV2: FC<Iprops> = (props) => {
   const { title = "默认标题", moreLink = "#/", moreText = "默认文本" } = props;

   return (
      <HeaderV2Wrapper>
         <h3 className="title">{title}</h3>
         {moreLink !== "#/" && moreText !== "#/" && (
            <a href={moreLink}>{moreText}</a>
         )}
      </HeaderV2Wrapper>
   );
};

export default memo(AreaHeaderV2);
