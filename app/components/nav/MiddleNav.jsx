import { PlayIcon, ShoppingBagIcon, UserGroupIcon, PuzzleIcon, MenuIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

export default function MiddleNav() {
    return (
        <div className="flex space-x-2">
          <div className='lg:hidden flex'>
            <MenuIcon className='w-7 h-7 text-gray-500 mx-auto my-auto' />
          </div>
          <div className='hidden lg:flex w-navIcon border-b-3 border-fb-blue cursor-pointer'>
            <HomeIcon className='w-7 h-7 text-fb-blue mx-auto my-auto' />
          </div>

          <div className='my-navB hidden lg:flex w-navIcon rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-out'>
            <PlayIcon className='w-7 h-7 text-gray-500 mx-auto my-auto' />
          </div>

          <div className='my-navB hidden lg:flex w-navIcon rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-out'>
            <ShoppingBagIcon className='w-7 h-7 text-gray-500 mx-auto my-auto' />
          </div>

          <div className='my-navB hidden lg:flex w-navIcon rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-out'>
            <UserGroupIcon className='w-7 h-7 text-gray-500 mx-auto my-auto' />
          </div>

          <div className='my-navB hidden lg:flex w-navIcon rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-out'>
            <PuzzleIcon className='w-7 h-7 text-gray-500 mx-auto my-auto' />
          </div>
        </div>
    )
}