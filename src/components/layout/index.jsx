import { Outlet } from "react-router"
import Menu from "../menu"
import Navbar from "../navbar"

const Layout = () => {
  return (
    <>
      <div className="flex justify-between bg-black absolute top-0 left-0 right-0 bottom-0 overflow-auto overflow-x-hidden">
        <Menu />
        <div className="p-4 w-full h-full relative">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout