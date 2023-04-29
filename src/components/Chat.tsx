import Messages from "./Messages"
import UserInput from "./UserInput"

const Chat = () => {
  return (
    <div className="flex flex-col mx-auto w-full md:w-8/12 px-5 md:p-20 h-5/6 md:h-full overflow-y-scroll scrollbar-none">
      {/* donde contesta el bot */}
      <div className="mb-8">
        <Messages />
      </div>
      {/* donde pregunta el usr */}
      <div className="mt-auto w-full">
        <UserInput />
      </div>
    </div>
  )
}
export default Chat
