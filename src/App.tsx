import { Routes, Route, useNavigate } from "react-router-dom"

// Hooks
import useFetchPokemonList from './hooks/useFetchPokemonList'

import { useEffect } from "react"

// Custome hooks
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import NavBar from './components/NavBar'
import PokemonGrid from './components/PokemonGrid'
import PokemonList from './components/PokemonList'

function App() {

  const navigate = useNavigate()
  const { data: pokemonList, } = useFetchPokemonList()

  console.log(pokemonList)



  useEffect(() => {
    navigate('/grid')
  }, [])

  return (

    <div className="min-h-screen w-screen bg-blue-100">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="grid" element={<PokemonGrid pokemonList={pokemonList?.results} />} />
          <Route path="list" element={<PokemonList pokemonList={pokemonList?.results} />} />
        </Route>
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  )
}

export default App
