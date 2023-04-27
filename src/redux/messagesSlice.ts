import { createSlice } from "@reduxjs/toolkit"
import { chatBotApi } from "./api"

export interface MessagesState {
  userMessage: string
  botMessage: string
  chathistory: { userMessage: string; botMessages: string }[]
}

const initialState: MessagesState = {
  userMessage: "",
  botMessage: "",
  chathistory: [],
}

export const messagesReducer = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setUserMessage: (state, action) => {
      state.userMessage = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      chatBotApi.endpoints.sendMessage.matchFulfilled,
      (state, action) => {
        state.botMessage = action.payload.message.text
      }
    )
  },
})

export const { setUserMessage } = messagesReducer.actions
export default messagesReducer.reducer
