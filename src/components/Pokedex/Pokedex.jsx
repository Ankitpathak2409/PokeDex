import React from 'react'
import Search from '../Search/Search'
import PokemonList from '../PokemonList/PokemonList'

const Pokedex = () => {
  return (
    <div className=''>
     <div className='flex flex-col justify-center items-center gap-6 mt-4'>
        <h1 className='text-6xl font-bold tracking-[1rem] text-yellow-500'>Pokedex</h1>
        <Search />
     </div>
     <div>
      <PokemonList />
     </div>
    </div>
  )
}

export default Pokedex