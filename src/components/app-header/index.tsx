import React from "react";
import { memo, useState } from "react";
import type { ReactNode, FC } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { NavLink } from "react-router-dom";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";

import headerTitles from "@/assets/data/header.json";

interface Iprops {
   children?: ReactNode;
}

const AppHeader: FC<Iprops> = (props?) => {
   const showItem = (item: any) => {
      if (item.type === "path") {
         return (
            <NavLink
               to={item.path}
               className={({ isActive }) => {
                  return isActive ? "active" : "undefined";
               }}
            >
               {item.title}
               <i className="icon sprite_01"></i>
            </NavLink>
         );
      } else if (item.type === "link") {
         return <a href={item.path}>{item.title}</a>;
      }
   };

   return (
      <HeaderWrapper>
         <div className="content">
            <HeaderLeft>
               <a href="/#" className="logo logo1"></a>
               <div className="titleList">
                  {headerTitles.map((item) => {
                     return <div className="item">{showItem(item)}</div>;
                  })}
               </div>
            </HeaderLeft>
            <HeaderRight>
               <span className="input">
                  <Input
                     className="search"
                     placeholder="音乐/视频/电台/用户"
                     prefix={<SearchOutlined />}
                  />
               </span>
               <span className="center">创作者中心</span>
               <span className="login">登录</span>
            </HeaderRight>
         </div>
         <div className="divider"></div>
      </HeaderWrapper>
   );
};

export default memo(AppHeader);
