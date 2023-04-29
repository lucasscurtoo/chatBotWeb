import Messages from "./Messages"
import UserInput from "./UserInput"

const Chat = () => {
  return (
    <div className="flex flex-col mx-auto w-8/12 p-20 h-full overflow-y-scroll scrollbar-none">
      {/* donde contesta el bot */}
      <div className="mb-8">
        <Messages />
      </div>
      {/* donde pregunta el usr */}
      <div className="mt-auto">
        <UserInput />
      </div>
    </div>
  )
}
export default Chat
