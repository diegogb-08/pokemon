import { AnimatePresence } from 'framer-motion'
import { ChangeEvent, FC, useEffect, useMemo, useState } from 'react'
import { Outlet, useParams, useNavigate, useLocation } from 'react-router'
import { Pagination } from '@mui/material'
import { useSearchParams } from 'react-router-dom'

interface Props {
  totalItems: number | undefined
}

const Home: FC<Props> = ({ totalItems }) => {

  const [params, setParams] = useSearchParams()
  const pageParam = params.get('page')

  const pageNumber: number = useMemo(() => {
    return pageParam ? parseInt(pageParam) : 1
  }, [pageParam])

  const handleChangePage = (ev: ChangeEvent<unknown>, page: number) => {
    setParams({
      page: page.toString()
    })
  }


  useEffect(() => {
  }, [])

  useEffect(() => {
    if (!pageParam) {
      setParams({ page: '1' })
    }

  }, [pageParam])


  return (
    <div className='h-full w-full p-2'>
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
      {
        totalItems &&
        <div className='w-full flex justify-center mt-4'>
          <Pagination onChange={handleChangePage} page={pageNumber} count={Math.ceil(totalItems / 20)} variant="outlined" color="primary" />
        </div>
      }
    </div>
  )
}

export default Home