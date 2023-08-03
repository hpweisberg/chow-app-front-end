import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'


const ProfileDropDown = ({ post, handleDelete }) => {

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
          fill={props.fill}
          // fill="#EDE9FE"
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
          // fill="#8B5CF6"
          fill={props.fill}
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }

  function DeleteInactiveIcon(props) {
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
          // fill="#EDE9FE"
          fill={props.fill}
          stroke="#A78BFA"
          strokeWidth="1.2"
          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
      </svg>
    )
  }

  // <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"/></svg>

  function DeleteActiveIcon(props) {
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
          // fill="#8B5CF6"
          fill={props.fill}
          stroke="#C4B5FD"
          strokeWidth="2"
          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
      </svg>
    )
  }

  return (
    <div className="pb-3 pr-1">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center 
          
          rounded-full p-1 text-lg font-medium text-light-txt-100 dark:text-dark-txt-100 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 h-1
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
          <Menu.Items className="absolute right-[0px] mt-1 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-light-primary-100 dark:bg-dark-background-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
          z-10">
            <div className="px-1 py-1 ">
              <Link to={`/posts/${post._id}/edit`} state={post}>
                
                
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900 dark:text-gray-200'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <EditActiveIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                          // fill={darkEnabled ? '#09090b' : '#fff'}
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
                    onClick={handleDelete}
                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900 dark:text-gray-200'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Delete
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