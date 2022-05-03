import { useQuery } from "react-query"
import { client } from '../services/api'
import { Pokemon, PokemonList, PokemonListResult } from '../types'


const useFetchPokemonList = () => {
  return useQuery(['PokemonList'], () => client<PokemonList>(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`).then(async res => {
    try {
      if (res?.results) {
        return {
          ...res,
          results: await Promise.all(res?.results.map(async (pokemon) => {
            return await client<Pokemon>(pokemon?.url)
          }))
        } as PokemonListResult
      }
    } catch (error) {
      console.error(error)
    }
  }))
}

export default useFetchPokemonList