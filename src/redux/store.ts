import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { chatBotApi } from "../redux/api"
import messagesSlice from "./messagesSlice"

export const store = configureStore({
  reducer: {
    [chatBotApi.reducerPath]: chatBotApi.reducer,
    messagesReducer: messagesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatBotApi.middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
