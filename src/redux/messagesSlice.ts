import { createSlice } from "@reduxjs/toolkit"
import { chatBotApi } from "./api"

export interface MessagesState {
  initialMessage: string
  chatHistory: { userMessage: string; aiMessage: string }[]
}

const initialState: MessagesState = {
  initialMessage: "Welcome to chatBot, ask me anything about programming!",
  chatHistory: [],
}

export const messagesReducer = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addUserMessage: (state, action) => {
      const userMessage = action?.payload
      console.log(userMessage)
      state.chatHistory.push({
        userMessage,
        aiMessage: "",
      })
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      chatBotApi.endpoints.sendMessage.matchFulfilled,
      (state, action) => {
        console.log(action)
        const aiMessage = action.payload.message.text
        const chatHistory = JSON.parse(JSON.stringify(state.chatHistory))
        const emptyMessageIndex = chatHistory.findIndex(
          (item: { aiMessage: string }) => item.aiMessage === ""
        )

        state.chatHistory[emptyMessageIndex].aiMessage = aiMessage
      }
    )
  },
})

export const { addUserMessage } = messagesReducer.actions
export default messagesReducer.reducer
