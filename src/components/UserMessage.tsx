import { RootState } from "@/redux/store"
import { isEmpty } from "lodash"
import React from "react"
import { useSelector } from "react-redux"

const UserMessage = () => {
  const userMessage = useSelector(
    (state: RootState) => state.messagesReducer.userMessage
  )
  if (isEmpty(userMessage)) {
    return null
  }
  return (
    <div className="w-fit shadow-md p-3 text-xl px-5 break-words bg-[#EDEDED] rounded-md ml-auto">
      <p>{userMessage}</p>
    </div>
  )
}
export default UserMessage
