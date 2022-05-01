import { Routes, Route, Link } from "react-router-dom"

// Hooks
import useFetchPokemonList from './hooks/useFetchPokemonList'

// Custome hooks
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import NavBar from './components/NavBar'

function App() {

  const { data } = useFetchPokemonList()

  console.log(data)

  return (

    <div className="h-screen w-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  )
}

export default App
