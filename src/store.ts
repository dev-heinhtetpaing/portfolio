import { configureStore } from '@reduxjs/toolkit'
import ActiveSectionReducer from "./features/active_section/activeSectionSlice"


export const store = configureStore({
  reducer: {
    active_section:ActiveSectionReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch