import { FC } from "react"
import { Pokemon } from "../types"
import { motion } from "framer-motion"

interface Props {
  pokemonList: Pokemon[] | undefined
}

const PokemonList: FC<Props> = ({ pokemonList }) => {
  return (
    <motion.div
      className="h-full w-full flex flex-col"
      initial={{ width: 0 }}
      animate={{ width: '100%', transition: { duration: 0.2 } }}
      exit={{ x: window.innerWidth }}
    >
      {
        pokemonList?.map(pokemon => {
          return (
            <motion.div
              key={pokemon?.id}
              className="flex items-center flex-row p-2 mb-2 bg-slate-300 rounded-md hover:bg-slate-400 hover:cursor-pointer"
              whileHover={{
                scale: 1.01,
                textShadow: "0px 0px 4px gray"
              }}
            >
              <img src={pokemon?.sprites.front_default} className="mx-8" />
              <p className="font-bold">{pokemon?.name.toUpperCase()}</p>
            </motion.div>)
        })
      }
    </motion.div>
  )
}

export default PokemonList