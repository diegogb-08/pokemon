import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const CustomGrid: FC<Props> = ({ children }) => {
  return (
    <motion.div
      className="h-full w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2"
      initial={{ width: 0 }}
      animate={{ width: '100%', transition: { duration: 0.2 } }}
      exit={{ x: window.innerWidth }}
    >
      {children}
    </motion.div>
  )
}

export default CustomGrid