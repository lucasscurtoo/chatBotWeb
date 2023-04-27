import Messages from "./Messages"
import UserInput from "./UserInput"

const Chat = () => {
  return (
    <div className="flex flex-col mx-auto w-8/12 p-20 h-full">
      {/* donde contesta el bot */}
      <div className="">
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
