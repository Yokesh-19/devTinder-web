import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./useSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice";
import requestReducer from "./requestSlice";


const appStore = configureStore({
    reducer:{
        user: userReducer,
        feed: feedReducer,
        connections: connectionReducer,
        requests: requestReducer,
    },
});

export default appStore;