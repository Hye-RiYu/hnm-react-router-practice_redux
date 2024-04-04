// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from '@redux-devtools/extension';
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers";

import productSlice from "./reducers/productSlice";
import authenticateReducer from "./reducers/authenticateReducer";
import { configureStore } from "@reduxjs/toolkit";

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
//   );

// 기존 createStore 사용할때 combinereducer, thunk, applyMiddleware, composeWithDevTools 를 사용(셋팅)했어야 했다
// configureStore = composeWithDevTools(devTool이 자동으로 셋업), applyMiddleware,thunk (자동으로 셋업), combinereducer (자동으로 셋업)

const store = configureStore({
  reducer: {
    auth : authenticateReducer,
    product : productSlice,
  }
})


export default store;