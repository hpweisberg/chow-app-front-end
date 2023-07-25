import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'


const ProfileDropDown = ({ handleLogout, profile }) => {

  function EditInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    )
  }

  function EditActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }

  // function DuplicateInactiveIcon(props) {
  //   return (
  //     <svg
  //       {...props}
  //       viewBox="0 0 20 20"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M4 4H12V12H4V4Z"
  //         fill="#EDE9FE"
  //         stroke="#A78BFA"
  //         strokeWidth="2"
  //       />
  //       <path
  //         d="M8 8H16V16H8V8Z"
  //         fill="#EDE9FE"
  //         stroke="#A78BFA"
  //         strokeWidth="2"
  //       />
  //     </svg>
  //   )
  // }

  // function DuplicateActiveIcon(props) {
  //   return (
  //     <svg
  //       {...props}
  //       viewBox="0 0 20 20"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M4 4H12V12H4V4Z"
  //         fill="#8B5CF6"
  //         stroke="#C4B5FD"
  //         strokeWidth="2"
  //       />
  //       <path
  //         d="M8 8H16V16H8V8Z"
  //         fill="#8B5CF6"
  //         stroke="#C4B5FD"
  //         strokeWidth="2"
  //       />
  //     </svg>
  //   )
  // }

  function LogoutInactiveIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#C4B5FD"
      // class="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </svg>
    )
  }

  function LogoutActiveIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#C4B5FD"
      // class="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </svg>
    )
  }

  return (
    <div className="pb-3 pr-1">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center 
          
          rounded-full p-1 text-lg font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
          ">
            ...
            {/* <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> */}
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
          <Menu.Items className="absolute right-[0px] mt-1 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
          z-10">
            <div className="px-1 py-1 ">
              <Link to={'/edit-profile'} state={profile}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <EditActiveIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <EditInactiveIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      Edit
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <LogoutActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <LogoutInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default ProfileDropDown