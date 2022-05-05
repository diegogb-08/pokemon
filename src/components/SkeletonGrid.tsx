import { FC } from 'react'
import { Skeleton } from '@mui/material'
import CustomGrid from './CustomGrid'

const skeletonArray = Array.from({ length: 20 }, (v, i) => 1 + i)

const SkeletonGrid: FC = () => {

  console.log(skeletonArray)

  return (
    <CustomGrid>
      {
        skeletonArray.map((skeleton) => {
          return (<Skeleton key={skeleton} variant="rectangular" className='w-full' height={100} />)
        })
      }
    </CustomGrid>
  )
}

export default SkeletonGrid