import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type UserMessage = {
  message: any
  userMessage: string
}

const baseUrl = "/api"
export const chatBotApi = createApi({
  reducerPath: "chatBotApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation<UserMessage, {}>({
      query: (body) => ({ url: `/askBot`, method: "POST", body }),
    }),
  }),
})

export const { useSendMessageMutation } = chatBotApi
