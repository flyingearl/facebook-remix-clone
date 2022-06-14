import { SearchIcon } from '@heroicons/react/solid'
import FacebookIcon from "./FacebookIcon";

export default function LeftNav() {
  return (
    <div className="my-auto flex-1">
      <div className="flex align-middle">
        <div className="ml-3">
          <FacebookIcon className="h-10 w-10" />
        </div>
        <div className="my-auto ml-1 w-60">
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon
                className="h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="block h-10 w-full rounded-full bg-gray-100 pl-10 text-gray-500 placeholder:text-gray-500 sm:text-sm"
              placeholder="Search Facebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
