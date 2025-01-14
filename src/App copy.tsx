import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./router";
import { useAppDispatch, useAppSelector, AppShallowEqual } from "./store";
import { increment, decrement } from "./store/modules/counter";

import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

function App() {
   const { count, message } = useAppSelector(
      (state) => ({
         count: state.counter.count,
         message: state.counter.message
      }),
      AppShallowEqual
   );

   const dispatch = useAppDispatch();

   const handleIncrement1 = () => {
      dispatch(increment());
   };
   const handleIncrement2 = () => {
      dispatch(decrement());
   };

   return (
      <div className="App">
         <AppHeader />
         <Suspense fallback="">
            <div className="main">{useRoutes(routes)}</div>
         </Suspense>
         <AppFooter />

         {/* <h2>当前计数{count}</h2>
         <h2>当前消息{message}</h2>
         <button onClick={handleIncrement1}>addCount</button>
         <button onClick={handleIncrement2}>subCount</button> */}
      </div>
   );
}

export default App;
