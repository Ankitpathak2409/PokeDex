import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PokemonDetails = () => {

    const { id } = useParams();
    const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState(null)

    const downloadPokemon = async() => {
        const response = await axios.get(POKEMON_DETAIL_URL + id);
        const data = response.data;

        setPokemon({
            name: data.name,
            height: data.height,
            weight: data.weight,
            types: data.types.map((t) => t.type.name),
            image: data.sprites.other.dream_world.front_default
        })
    }

    useEffect(() => {
        downloadPokemon();
    }, [id]);
  return (
    <>
      {pokemon && <div className='flex flex-col gap-10 items-center justify-center mt-10'>
        <div className='text-5xl tracking-[0.8rem] font-bold capitalize' >
            {pokemon.name}
        </div>
        <div>
            <img src={pokemon.image} alt={pokemon.name}/>
        </div>
        <div className='flex gap-16'>
            <div className='font-semibold text-2xl'>
            <span className='text-2xl font-bold'>Height:</span> {pokemon.height}
        </div>
         <div className='font-semibold text-2xl'>
            <span className='text-2xl font-bold'>Weight:</span> {pokemon.weight}
        </div>
        </div>
        <div className='font-semibold text-2xl capitalize'>
            <span className='text-2xl font-bold mr-4'>Type:</span> {pokemon.types}
        </div>
        <h1 className='bg-yellow-400 px-3 py-1 rounded text-sm font-semibold cursor-pointer active:scale-95 hover:bg-amber-500'>
        <Link to='/'>
        Home
      </Link>
      </h1>
    </div>
}

    </>
   
  )
}

export default PokemonDetails;