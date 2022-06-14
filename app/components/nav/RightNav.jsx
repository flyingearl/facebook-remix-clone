import { ChevronDownIcon, BellIcon, ChatIcon, MenuIcon } from '@heroicons/react/solid'

export default function RightNav() {
    return (
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

          <div className='inline-flex items-center justify-center my-auto mr-4 hidden xl:block'>
            <img
                className="inline-block h-7 w-7 rounded-full mr-2"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            <span className='tracking-tight text-gray-900 text-md'>Edward</span>
          </div>
        </div>
    )
}