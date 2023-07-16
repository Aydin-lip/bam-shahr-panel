import { useState } from "react"
import { useNavigate } from "react-router"

const Menu = () => {
  const [open, setOpen] = useState(true)
  const [value, setValue] = useState(0)
  const [showUsers, setShowUsers] = useState(false)
  const [showGame, setShowGame] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const navigate = useNavigate()


  const openHandler = () => {
    setOpen(!open)
    setShowUsers(false)
    setShowGame(false)
  }

  return (
    <>
      <div className={`min-w-[15rem] rtl bg-dark-them text-dark-them overflow-auto transition-all ${!open ? 'ml-[-15rem] md:ml-[-12rem]' : ''} z-10 fixed md:relative top-0 left-0 bottom-0`}>
        {/* <div className="absolute top-1 left-1">
          <span
            className={`block p-2 rounded-lg cursor-pointer transition-all hover:shadow ${open ? 'bg-[#f0f0ff] text-indigo-500' : ''}`}
            onClick={openHandler}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>
        </div> */}
        <div className="p-8 text-center">
          <span className="text-4xl font-bold cursor-default">LOGO</span>
        </div>
        <div>
          <span className="block text-end p-4 font-extrabold text-sm pb-2">
            Navigation
          </span>
          <ul className={`relative flex flex-col gap-4 pt-2 pb-2 ${open ? 'px-4' : 'px-2'}`}>
            <li className="">
              <div
                className={`flex items-center flex-row-reverse gap-3 rounded-[1rem_10rem_10rem_1rem] px-3 py-3 h-[48px] cursor-default transition-all hover:bg-dark-them-active hover:text-white ${value === 0 ? 'bg-dark-them-active text-white' : 'cursor-pointer'}`}
                onClick={() => {
                  setValue(0)
                  navigate('/')
                }}
              >
                <span className="w-8 h-8 bg-dark-them-light rounded-full flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </span>
                <span className={`text-[.9rem] font-bold ${value === 0 ? 'text-shadow' : ''}`}>Dashboard</span>
              </div>
            </li>
            <li className="">
              <div
                className={`flex items-center flex-row-reverse gap-3 rounded-[1rem_10rem_10rem_1rem] px-3 py-3 h-[48px] cursor-default transition-all hover:bg-dark-them-active hover:text-white ${value === 1 ? 'bg-dark-them-active text-white' : 'cursor-pointer'}`}
                onClick={() => {
                  setValue(1)
                  navigate('/')
                }}
              >
                <span className="w-8 h-8 bg-dark-them-light rounded-full flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </span>
                <span className={`text-[.9rem] font-bold ${value === 1 ? 'text-shadow' : ''}`}>Users</span>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </>
  )
}

export default Menu