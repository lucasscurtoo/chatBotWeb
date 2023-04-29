import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import BotMessage from "./BotMessage"
import UserMessage from "./UserMessage"

const Messages = () => {
  const initialMessage = useSelector(
    (state: RootState) => state.messagesReducer.initialMessage
  )
  const chatHistory = useSelector(
    (state: RootState) => state.messagesReducer.chatHistory
  )

  return (
    <div className="space-y-4">
      <BotMessage botMessage={initialMessage} />
      <div className="w-full space-y-4 text-neutral-700">
        {chatHistory.map((item, indx) => (
          <div className="space-y-8" key={indx}>
            <UserMessage userMessage={item?.userMessage} />
            <BotMessage botMessage={item?.aiMessage} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Messages
