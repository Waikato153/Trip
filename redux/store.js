import { configureStore } from "@reduxjs/toolkit";
import user from "./slice/user";

export const store = configureStore({
    reducer: {
        user,
    }
});