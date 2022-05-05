import { FC } from "react"
import { Pokemon } from "../types"
import { motion } from "framer-motion"
import CustomGrid from './CustomGrid'
import SkeletonGrid from './SkeletonGrid'

interface Props {
  pokemonList: Pokemon[] | undefined
  isLoading: boolean
}

const PokemonGrid: FC<Props> = ({ pokemonList, isLoading }) => {
  console.log(isLoading)
  return (
    <>
      {
        isLoading
          ? <SkeletonGrid />
          : <CustomGrid>
            {
              pokemonList?.map(pokemon => {
                return (
                  <motion.div
                    key={pokemon.id}
                    className="flex justify-center items-center flex-col p-2 bg-slate-300 rounded-md hover:bg-slate-400 hover:cursor-pointer"
                    whileHover={{
                      scale: 1.02,
                      textShadow: "0px 0px 4px gray"
                    }}
                  >
                    <img src={pokemon?.sprites.front_default} />
                    <p className="font-bold">{pokemon?.name.toUpperCase()}</p>
                  </motion.div>)
              })
            }
          </CustomGrid>
      }
    </>
  )
}

export default PokemonGrid