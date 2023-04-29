import { Cursor, Typewriter } from "react-simple-typewriter"
import { isEmpty } from "lodash"
import React, { useState } from "react"
import { BoltIcon } from "@heroicons/react/24/solid"

interface BotMessageProps {
  botMessage: string
}

const BotMessage: React.FC<BotMessageProps> = ({ botMessage }) => {
  const [showCursor, setShowCursor] = useState(true)
  if (isEmpty(botMessage)) {
    return null
  }
  return (
    <div className="w-full shadow-sm p-5 text-lg px-5 break-words bg-white rounded-md max-w-4xl">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-200 rounded-full p-2 self-start">
          <BoltIcon className="w-10 text-blue-500" />
        </div>
        <div>
          <Typewriter
            words={[botMessage]}
            typeSpeed={20}
            onLoopDone={() => setShowCursor(false)}
          />
          {showCursor && <Cursor cursorColor="blue" />}
        </div>
      </div>
    </div>
  )
}
export default BotMessage
