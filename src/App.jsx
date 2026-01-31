import React from 'react'
import Pokedex from './components/Pokedex/Pokedex'
import { Route, Routes } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'

const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
      <Route path="*" element={<div className='flex h-[90vh] justify-center items-center'><h1 className='text-6xl font-extrabold'>Page Not Found</h1></div>} />
     </Routes>
    </>
  )
}

export default App