import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

export default configureStore ({
    reducer: {},
    applyMiddleware(logger)
})