import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const DropDown = ({children, items}) => {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="hover:text-indigo-600 text-dark-them hover:bg-dark-them-active transition-all inline-flex w-full justify-center items-center gap-x-1.5 rounded-md text-sm font-semibold shadow-">
          {children}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-dark-them shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {items}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}


export default DropDown