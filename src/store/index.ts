import { configureStore } from "@reduxjs/toolkit";
import {
   useSelector,
   TypedUseSelectorHook,
   useDispatch,
   shallowEqual
} from "react-redux";

import counterReducer from "./modules/counter";

const store = configureStore({
   reducer: {
      counter: counterReducer
   }
});

type GetStateFnType = typeof store.getState;
type FnReturnType = ReturnType<GetStateFnType>;

type DispatchType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<FnReturnType> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch;
export const AppShallowEqual = shallowEqual;

export default store;
