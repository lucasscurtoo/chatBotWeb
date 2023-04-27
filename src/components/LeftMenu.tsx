import { BoltIcon } from "@heroicons/react/24/solid"
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline"

const LeftMenu = () => {
  return (
    <div className="flex-col items-center p-10 shadow-lg h-auto space-y-10">
      <div className="space-x-4 flex items-center">
        <BoltIcon className="w-10 text-blue-500" />
        <h1 className="text-3xl font-bold tracking-widest text-neutral-800">
          ChatBot
        </h1>
      </div>
      <div className="flex items-center space-x-4 active bg-[#EDEDED] px-3 py-1 rounded-md">
        <ChatBubbleOvalLeftIcon className="text-neutral-800 w-6" />
        <p className="text-lg text-neutral-800">AI Chat</p>
      </div>
    </div>
  )
}
export default LeftMenu
