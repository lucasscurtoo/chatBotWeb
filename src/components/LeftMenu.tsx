import { BoltIcon } from "@heroicons/react/24/solid"

const LeftMenu = () => {
  return (
    <div className="p-10 shadow-lg h-auto">
      <div className="space-x-4 flex items-center mx-auto">
        <BoltIcon className="w-10 text-blue-500" />
        <h1 className="text-3xl font-bold tracking-widest text-neutral-800">
          ChatBot
        </h1>
      </div>
    </div>
  )
}
export default LeftMenu
