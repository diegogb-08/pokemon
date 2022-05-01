import { useQuery } from "react-query"
import { client } from '../services/api'
import { Pokemon, PokemonList } from '../types'


const useFetchPokemonList = () => {
  return useQuery(['PokemonList'], () => client<PokemonList>(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`).then(async res => {
    try {
      if (res?.results) {
        return await Promise.all(res?.results.map(async (pokemon) => {
          return await client<Pokemon>(pokemon?.url)
        }))
      }
    } catch (error) {
      console.error(error)
    }
  }))
}

export default useFetchPokemonList