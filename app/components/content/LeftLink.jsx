export default function LeftLink({ link }) {
    return (
        <li key={link.id} className="cursor-pointer hover:bg-gray-200 rounded-lg py-2 pl-1 transition ease-in duration-100">
            <div className="flex items-center space-x-3">
                {link.icon 
                ? <link.src className="inline-block h-9 w-9 text-fb-blue" />
                : <img
                        className="inline-block h-9 w-9 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                }

                <span className="text-sm font-medium">{link.display}</span>
            </div>
        </li>
    )
}