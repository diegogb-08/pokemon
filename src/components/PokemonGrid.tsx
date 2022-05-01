import { FC } from "react"
import { Pokemon } from "../types"


interface Props {
  pokemonList: (Pokemon | undefined)[] | undefined
}

const PokemonGrid: FC<Props> = ({ pokemonList }) => {
  return (
    <div className="h-full w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
      {
        pokemonList?.map(pokemon => {
          return <div key={pokemon?.id} className="flex justify-center items-center flex-col p-2 bg-slate-300 rounded-md">
            <img src={pokemon?.sprites.front_default} loading="lazy" />
            <p className="font-bold">{pokemon?.name.toUpperCase()}</p>
          </div>
        })
      }
    </div>
  )
}

export default PokemonGrid