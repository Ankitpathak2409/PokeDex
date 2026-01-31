import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pokemon from '../Pokemon/Pokemon';

const PokemonList = () => {

  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

  const [pokemonList, setPokemonList] = useState([]);
  const [pokedexUrl, setPokedexUrl] = useState(DEFAULT_URL);
  const [prevUrl, setPrevUrl] = useState(DEFAULT_URL);
  const [nextUrl, setNextUrl] = useState(DEFAULT_URL);

    const downloadPokemons = async() =>{
        const response = await axios.get(pokedexUrl ? pokedexUrl : DEFAULT_URL);
        const pokemonResults = response.data.results;

        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);

        const pokemonPromises = pokemonResults.map((pokemon) => {
          return (
            axios.get(pokemon.url)
          )
        });

        const pokemonListData = await axios.all(pokemonPromises);

        const pokemonFinalList = pokemonListData.map((pokemonData) =>{
          const pokemon = pokemonData.data;
          return{
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
            height: pokemon.height,
            type: pokemon.types
          }
        });

        setPokemonList(pokemonFinalList);
        // console.log(pokemonFinalList);
    }

    useEffect(() => {
        downloadPokemons();
    },[pokedexUrl]);
  return (
    <div className=''>
      <div className='flex justify-center items-center my-10'>
        <h1 className='text-4xl font-semibold text-[#1c1c1c] tracking-[0.3rem]'>Pokemon List</h1>
      </div>
      <div className='flex flex-wrap gap-10 w-[98vw] justify-center'>
        {pokemonList.map((pokemon) => <Pokemon name={pokemon.name} key={pokemon.id} image={pokemon.image} id={pokemon.id}/>)}
      </div>

      <div className='flex justify-center my-14 gap-4'>
        <button onClick={() => {
          setPokedexUrl(prevUrl)
        }} className=' rounded px-8 py-2 text-sm font-semibold bg-yellow-600 cursor-pointer active:scale-95 hover:bg-yellow-700'>Prev</button>
        <button onClick={() => {
          setPokedexUrl(nextUrl)
        }} className=' rounded px-8 py-2 text-sm font-semibold bg-yellow-600 cursor-pointer active:scale-95 hover:bg-yellow-700'>Next</button>
        
      </div>
    </div>
  )
}

export default PokemonList;