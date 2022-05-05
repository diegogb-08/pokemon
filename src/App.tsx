import { useEffect } from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"

// Hooks
import useFetchPokemonList from './hooks/useFetchPokemonList'

// Custome hooks
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import NavBar from './components/NavBar'
import PokemonGrid from './components/PokemonGrid'
import PokemonList from './components/PokemonList'

function App() {

  const navigate = useNavigate()
  const { data: pokemonList, isLoading } = useFetchPokemonList()
  const location = useLocation()

  useEffect(() => {
    navigate('/grid')
  }, [])

  return (

    <div className="min-h-screen w-screen bg-blue-100">
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home totalItems={pokemonList?.count} />} >
          <Route path="grid" element={<PokemonGrid pokemonList={pokemonList?.results} isLoading={isLoading} />} />
          <Route path="list" element={<PokemonList pokemonList={pokemonList?.results} />} />
        </Route>
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  )
}

export default App
