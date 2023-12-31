import { Avatar, TextField, Tooltip, styled } from "@mui/material"
import { useMemo, useState } from "react";
import DropDown from "./dropdown";
import { BellIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/20/solid";
import { Menu } from "@headlessui/react";
import { useEffect } from "react";

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&': {
      color: '#fff'
    },
  },
});

const ProfileDropdownItems = () => {
  const Items = ["My Profile", "Settings", "Log Out"]
  return (
    <div className="py-1 border border-black rounded-md">
      {Items.map((item, idx) =>
        <Menu.Item key={idx}>
          {({ active }) => (
            <span
              className={`block px-4 py-2 text-sm cursor-pointer text-dark-them ${active ? 'bg-dark-them-active' : ''}`}
            >
              {item}
            </span>
          )}
        </Menu.Item>
      )}
    </div>
  )
}

const Navbar = ({ open, setOpen }) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    window.onresize = e => {
      if (e.target.innerWidth < 1024) setOpen(false)
      else setOpen(true)
    }
  }, [])

  return (
    <>
      <div className="bg-dark-them py-4 px-2 sm:px-6 flex justify-between fixed lg:absolute top-0 right-0 left-0 z-[3]">
        <div className="flex">
          <div className="flex justify-center items-center mr-2 sm:mr-4 lg:hidden">
            <span className="text-2xl font-extrabold text-indigo-600">LOGO</span>
          </div>
          <div className="cursor-pointer" onClick={() => setOpen(!open)}>
            <span className="w-10 h-10 bg-dark-them-active text-indigo-600 rounded-full flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </span>
          </div>
          <div className="pl-4 max-md:hidden">
            <CssTextField
              placeholder="Search"
              variant="outlined"
              color="primary"
              size="small"
              className="bg-dark-them-active text-white rounded-lg"
              value={search}
              onChange={e => setSearch(e.target.value)}
              InputProps={{
                endAdornment:
                  <span className={`p-1 text-indigo-600 relative`}>
                    <svg onClick={() => setSearch('')} className={`w-4 h-4 absolute -top-1 right-0 cursor-pointer ${search.length === 0 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
              }}
            />
          </div>
        </div>
        <div>
          <div className="flex gap-1 sm:gap-2">
            <DropDown items={() => ProfileDropdownItems()}>
              <div className="p-1 w-10 h-10 flex justify-center items-center bg-dark-them-active rounded-full">
                <EnvelopeIcon className="w-6 h-6" />
              </div>
              <span className="text-base font-medium p-2 max-lg:hidden">Message</span>
            </DropDown>
            <DropDown items={() => ProfileDropdownItems()}>
              <div className="p-1 w-10 h-10 flex justify-center items-center bg-dark-them-active rounded-full">
                <BellIcon className="w-6 h-6" />
              </div>
              <span className="text-base font-medium p-2 max-lg:hidden">Notification</span>
            </DropDown>
            <DropDown items={() => ProfileDropdownItems()}>
              <Tooltip title="Dashboard">
                <div className="p-1 w-10 h-10 flex justify-center items-center bg-dark-them-active rounded-full">
                  <UserIcon className="w-6 h-6" />
                </div>
              </Tooltip>
            </DropDown>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar