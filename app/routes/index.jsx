import LeftNav from '../components/nav/LeftNav'
import MiddleNav from '../components/nav/MiddleNav'
import RightNav from '../components/nav/RightNav'
import Left from '../components/content/Left'
import Middle from '../components/content/Middle'
import Right from '../components/content/Right'

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow flex h-nav">
        {/* left */}
        <LeftNav />

        {/* middle */}
        <MiddleNav />

        {/* right */}
        <RightNav />
      </nav>

      {/* Main Content */}
      <div className="max-w-full 3xl:max-w-fb 3xl:mx-auto mt-6">
        <div className="flex">
          <div className="flex-1 hidden pl-4 xl:block">
            <Left />
          </div>
          <div className='mx:auto px-24 lg:px-8 xl:px-0 lg:w-2/4'>
            <Middle />
          </div>
          <div className="hidden flex-1 lg:block">
            <Right />
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