import { configureStore } from "@reduxjs/toolkit";
import user from "./slice/user";
import loading from "./slice/loading";

export const store = configureStore({
    reducer: {
        user,
        loading
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});