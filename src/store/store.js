import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';
import { rootMiddleware } from './middlewares';

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(rootMiddleware),
});
