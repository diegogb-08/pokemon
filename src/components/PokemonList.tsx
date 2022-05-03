import { FC } from "react"
import { Pokemon } from "../types"
import { motion } from "framer-motion"

interface Props {
  pokemonList: Pokemon[] | undefined
}

const PokemonList: FC<Props> = ({ pokemonList }) => {
  return (
    <div className="h-full w-full flex flex-col">
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
              <img src={pokemon?.sprites.front_default} loading="lazy" className="mx-8" />
              <p className="font-bold">{pokemon?.name.toUpperCase()}</p>
            </motion.div>)
        })
      }
    </div>
  )
}

export default PokemonList