import { Outlet } from "react-router"
import Menu from "../menu"
import Navbar from "../navbar"
import { useState } from "react"

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(true)

  return (
    <>
      <div className="flex justify-between bg-black absolute top-0 left-0 right-0 bottom-0 overflow-auto overflow-x-hidden">
        <Menu open={openMenu} setOpen={setOpenMenu} />
        <div className="p-4 w-full h-full relative">
          <Navbar open={openMenu} setOpen={setOpenMenu} />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout