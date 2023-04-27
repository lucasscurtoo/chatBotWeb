import useStartSession from "@/hooks/useStartSession"
import BotMessage from "./BotMessage"
import UserMessage from "./UserMessage"

const Messages = () => {
  const { data } = useStartSession()

  return (
    <div className="space-y-4">
      <div className="w-full shadow-md p-5 text-xl px-10 break-words bg-white rounded-md">
        <p>{data?.text}</p>
      </div>
      <div className="w-full space-y-4 text-neutral-700">
        <UserMessage />
        <BotMessage />
      </div>
    </div>
  )
}

export default Messages
