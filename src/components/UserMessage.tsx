import { UserIcon } from "@heroicons/react/24/solid"
import { isEmpty } from "lodash"
import React from "react"

interface UserMessageProps {
  userMessage: string
}

const UserMessage: React.FC<UserMessageProps> = ({ userMessage }) => {
  if (isEmpty(userMessage)) {
    return null
  }
  return (
    <div className="w-fit max-w-xl shadow-sm p-3 text-lg px-5 break-words bg-[#272727] rounded-md ml-auto text-white flex items-center space-x-4">
      <p>{userMessage}</p>
      <div className="bg-blue-200 rounded-full p-2 self-start">
        <UserIcon className="w-8 text-blue-500" />
      </div>
    </div>
  )
}
export default UserMessage
