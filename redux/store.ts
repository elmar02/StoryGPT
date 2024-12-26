import { configureStore } from "@reduxjs/toolkit";
import saveSlice from './slices/saveSlice'
export const makeStore = () => {
    return configureStore({
        reducer: {
            save: saveSlice,
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']