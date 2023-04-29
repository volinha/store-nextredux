import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./searchSlice";

import { productApi } from "./productApi";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        productApi: productApi.reducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(productApi.middleware);
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;