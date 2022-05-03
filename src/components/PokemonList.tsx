import { FC } from "react"
import { Pokemon } from "../types"


interface Props {
  pokemonList: Pokemon[] | undefined
}

const PokemonList: FC<Props> = ({ pokemonList }) => {
  return (
    <div>PokemonList</div>
  )
}

export default PokemonList