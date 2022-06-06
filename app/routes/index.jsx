import { HomeIcon, SearchIcon, ChevronDownIcon, BellIcon, ChatIcon, MenuIcon } from '@heroicons/react/solid'
import { PlayIcon, ShoppingBagIcon, UserGroupIcon, PuzzleIcon } from '@heroicons/react/outline'

import Facebook from "../components/nav/Facebook";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      {/* left */}
      <nav className="bg-white shadow flex h-nav">
        <div className="flex-1 my-auto">
          <div className='flex align-middle'>
            <div className="ml-3">
              <Facebook className="h-10 w-10" />
            </div>
            <div className='my-auto ml-1 w-60'>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full h-10 pl-10 sm:text-sm text-gray-500 placeholder:text-gray-500 rounded-full bg-gray-100"
                  placeholder="Search Facebook"
                />
              </div>
            </div>
          </div>
        </div>

        {/* middle */}
        <div className="flex space-x-2">
          <div className='flex w-navIcon border-b-3 border-fb-blue cursor-pointer'>
            <HomeIcon className='w-7 h-7 text-fb-blue mx-auto my-auto' />
          </div>

          <div className='my-navB flex w-navIcon rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-out'>
            <PlayIcon className='w-7 h-7 text-gray-500 mx-auto my-auto' />
          </div>

          <div className='my-navB flex w-navIcon rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-out'>
            <ShoppingBagIcon className='w-7 h-7 text-gray-500 mx-auto my-auto' />
          </div>

          <div className='my-navB flex w-navIcon rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-out'>
            <UserGroupIcon className='w-7 h-7 text-gray-500 mx-auto my-auto' />
          </div>

          <div className='my-navB flex w-navIcon rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-out'>
            <PuzzleIcon className='w-7 h-7 text-gray-500 mx-auto my-auto' />
          </div>
        </div>

        {/* right */}
        <div className="flex flex-1 flex-row-reverse content-end mr-3">
          <div className='inline-flex items-center justify-center bg-gray-200 w-10 h-10 rounded-full my-auto'>
            <ChevronDownIcon className='w-5 h-5' />
          </div>

          <div className='inline-flex items-center justify-center bg-gray-200 w-10 h-10 rounded-full my-auto mr-2'>
            <BellIcon className='w-5 h-5' />
          </div>

          <div className='inline-flex items-center justify-center bg-gray-200 w-10 h-10 rounded-full my-auto mr-2'>
            <ChatIcon className='w-5 h-5' />
          </div>

          <div className='inline-flex items-center justify-center bg-gray-200 w-10 h-10 rounded-full my-auto mr-2'>
            <MenuIcon className='w-5 h-5' />
          </div>

          <div className='inline-flex items-center justify-center my-auto mr-4'>
            <img
                className="inline-block h-7 w-7 rounded-full mr-2"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            <span className='tracking-tight text-gray-900 text-md'>Edward</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-full 3xl:max-w-fb 3xl:mx-auto">
        <div className="flex">
          <div className="flex-1">left</div>
          <div>middle</div>
          <div className="flex-1 text-right">
            right
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="absolute inset-x-0 bottom-0">
        <a target="_blank" href="https://icons8.com/icon/uLWV5A9vXIPu/facebook">Facebook</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
    </div>
  )
}