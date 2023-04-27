import { useSendMessageMutation } from "@/redux/api"
import { setUserMessage } from "@/redux/messagesSlice"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import React, { useRef } from "react"
import { useDispatch } from "react-redux"

const UserInput = () => {
  const userMessageRef = useRef<HTMLInputElement | null>(null)
  const [sendMessage, { isLoading }] = useSendMessageMutation()
  const dispatch = useDispatch()

  const handleSendMessage = () => {
    if (userMessageRef.current?.value) {
      sendMessage({ userMessage: userMessageRef.current.value })
      dispatch(setUserMessage(userMessageRef.current.value))
      userMessageRef.current.value = ""
    }
  }

  const handleKeyEvent: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="flex items-center p-3 w-full border border-blue-500 rounded-md text-neutral-800 justify-between bg-white">
      <input
        type="text"
        placeholder="Ask our IA some programming questions "
        className="ml-4 outline-none w-full mr-2"
        ref={userMessageRef}
        onKeyDown={handleKeyEvent}
      />
      <PaperAirplaneIcon
        className="w-6 -rotate-45 mr-8"
        onClick={handleSendMessage}
      />
    </div>
  )
}

export default UserInput