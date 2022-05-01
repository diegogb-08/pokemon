import { Routes, Route, Link } from "react-router-dom"

// Hooks
import useFetchPokemonList from './hooks/useFetchPokemonList'

// Custome hooks
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'

function App() {

  const { data } = useFetchPokemonList()

  console.log(data)

  return (

    <div className="bg-blue h-full w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  )
}

export default App
