import { configureStore } from '@reduxjs/toolkit'
import { ApiSlice } from './slices/apiSlice';
const store = configureStore({
    reducer: {
        [ApiSlice.reducerPath]:ApiSlice.reducer,

    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(ApiSlice.middleware),
    devTools: true,
})

export default store;