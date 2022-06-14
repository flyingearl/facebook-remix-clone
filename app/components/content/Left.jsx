import { ChevronDownIcon, PlayIcon, ShoppingBagIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/solid"
import { ClockIcon } from "@heroicons/react/outline"
import LeftLink from "./LeftLink"

const links = [
    { id: 1, display: 'Edward Burton', icon: false, src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
    { id: 2, display: 'Friends', icon: true, src: UsersIcon },
    { id: 3, display: 'Marketplace', icon: true, src: ShoppingBagIcon },
    { id: 4, display: 'Groups', icon: true, src: UserGroupIcon },
    { id: 5, display: 'Watch', icon: true, src: PlayIcon },
    { id: 6, display: 'Memories', icon: true, src: ClockIcon },
]

const shortcuts = [
    { id:1, display: 'Shortcut 1', src: "https://picsum.photos/200/300" },
    { id:2, display: 'Shortcut 2', src: "https://picsum.photos/200/300" },
    { id:3, display: 'Shortcut 3', src: "https://picsum.photos/200/300" },
    { id:4, display: 'Shortcut 4', src: "https://picsum.photos/200/300" },
    { id:5, display: 'Shortcut 5', src: "https://picsum.photos/200/300" },
]

export default function Left() {
    return (
        <div className="mr-8">
            <div className="mb-3 pb-3 border-b border-b-gray-300">
                <ul className="space-y-4">
                    {links.map((link) => (
                        <LeftLink link={link} />
                    ))}
                    <li className="cursor-pointer">
                        <div className="flex items-center space-x-3">
                            <div className="flex bg-gray-200 rounded-full w-9 h-9 items-center justify-center">
                                <ChevronDownIcon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">See more</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-gray-500 font-medium text-md mb-3">Your Shortcuts</h3>
                <ul className="space-y-4">
                    {shortcuts.map((shortcut) => (
                        <li key={shortcut.id} className="cursor-pointer">
                            <div className="flex items-center space-x-3">
                                <img
                                    className="inline-block h-9 w-9 rounded-md"
                                    src={shortcut.src}
                                    alt=""
                                />

                                <span className="text-sm font-medium">{shortcut.display}</span>
                            </div>
                        </li>
                    ))}
                    <li className="cursor-pointer">
                        <div className="flex items-center space-x-3">
                            <div className="flex bg-gray-200 rounded-full w-9 h-9 items-center justify-center">
                                <ChevronDownIcon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">See more</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}