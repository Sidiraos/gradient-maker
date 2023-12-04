import { configureStore } from '@reduxjs/toolkit';
import gradientValues from './slices/gradientValues';


export const store = configureStore({
    reducer: {
        gradientValues
    },
    devTools: true
})