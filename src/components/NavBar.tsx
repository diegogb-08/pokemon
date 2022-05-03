
import { IoGridOutline, IoListOutline } from "react-icons/io5"
import CustomLink from './CustomLink'

const NavBar = () => {
  return (
    <div className='container bg-red-500 max-w-full h-20 p-2 flex justify-around'>
      <div className="w-full flex justify-end mb-2 pr-2">
        <CustomLink to='/grid' >
          <IoGridOutline className="h-10 w-10" />
        </CustomLink>
        <CustomLink to='/list' >
          <IoListOutline className="h-10 w-10" />
        </CustomLink>
      </div>
    </div>
  )
}

export default NavBar