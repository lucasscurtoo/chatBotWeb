import Chat from "@/components/Chat"
import Header from "@/components/Header"
import LeftMenu from "@/components/LeftMenu"

const Home = () => {
  return (
    <div className="w-screen h-screen flex  overflow-hidden font-sans bg-[#F8F9FA]">
      <LeftMenu />
      <div className="w-full h-full ">
        <Header />
        <Chat />
      </div>
    </div>
  )
}
export default Home
