import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import { Typewriter, Cursor } from "react-simple-typewriter"
import { isEmpty } from "lodash"

const BotMessage = () => {
  const botMessage = useSelector(
    (state: RootState) => state.messagesReducer.botMessage
  )
  if (isEmpty(botMessage)) {
    return null
  }
  return (
    <div className="w-full shadow-md p-5 text-xl px-10 break-words bg-white rounded-md">
      <div>
        <Typewriter words={[botMessage]} typeSpeed={20} />
        <Cursor cursorColor="blue" />
      </div>
    </div>
  )
}
export default BotMessage
