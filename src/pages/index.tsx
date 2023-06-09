import Chat from "@/components/Chat"
import LeftMenu from "@/components/LeftMenu"
import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>ChatBot</title>
        <meta
          name="description"
          content="My personal chatbot project using langchain"
        />
        <meta name="keywords" content="nextjs, react, web development, IA" />
      </Head>
      <div className="w-screen h-screen flex  overflow-hidden font-sans bg-[#F8F9FA]">
        <div className="hidden md:flex">
          <LeftMenu />
        </div>
        <Chat />
      </div>
    </>
  )
}
export default Home
