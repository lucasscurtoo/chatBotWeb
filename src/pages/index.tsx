import Chat from "@/components/Chat"
import LeftMenu from "@/components/LeftMenu"
import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>ChatBot</title>
        <meta name="description" content="My personal to-do project" />
        <meta name="keywords" content="nextjs, react, web development" />
      </Head>
      <div className="w-screen h-screen flex  overflow-hidden font-sans bg-[#F8F9FA]">
        <LeftMenu />
        <Chat />
      </div>
    </>
  )
}
export default Home
