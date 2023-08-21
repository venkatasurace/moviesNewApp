import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./slice/rootReducer";

import restApi from "./api/restApis";

import { setupListeners } from "@reduxjs/toolkit/query";

const middleware = [restApi.middleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
setupListeners(store.dispatch);

export { store };
