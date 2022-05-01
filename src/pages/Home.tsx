import { FC } from 'react'
import { Outlet } from 'react-router'

const Home: FC = () => {
  return (
    <div className='h-full w-full p-2'>
      <Outlet />
    </div>
  )
}

export default Home