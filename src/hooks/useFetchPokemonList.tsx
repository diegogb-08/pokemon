import { useMemo } from "react"
import { useQuery } from "react-query"
import { useSearchParams } from "react-router-dom"
import { client } from '../services/api'
import { Pokemon, PokemonList, PokemonListResult } from '../types'


const useFetchPokemonList = () => {
  const [params, setParams] = useSearchParams()
  const pageParam = params.get('page')
  const pageNumber: number = useMemo(() => {
    return pageParam ? parseInt(pageParam) : 1
  }, [pageParam])
  const offSet = (pageNumber * 20) - 20

  return useQuery(['PokemonList', { pageNumber, offSet }], () => client<PokemonList>(`https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=20`).then(async res => {
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