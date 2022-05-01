import { IoGridOutline, IoListOutline } from "react-icons/io5"
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div className='container bg-blue-500 max-w-full h-20 p-2 flex justify-around'>
      <div className="inline-flex">
        <Link to='/grid' className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-3 rounded-l flex justify-center items-center">
          <IoGridOutline className="h-10 w-10" />
        </Link>
        <Link to='/list' className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-3 rounded-r flex justify-center items-center">
          <IoListOutline className="h-10 w-10" />
        </Link>
      </div>
    </div>
  )
}

export default NavBar