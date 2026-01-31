import React from 'react'
import { Link } from 'react-router-dom';

const Pokemon = ({name, image, id}) => {
  return (
    <Link to={`/pokemon/${id}`} className=' basis-1/5 block'>
      <div className='border-2 rounded-2xl flex flex-col justify-center items-center  cursor-pointer active:scale-95 hover:bg-orange-200'>
        <div>
            <h2 className='text-2xl font-bold uppercase my-5 tracking-[0.2rem]'>{name}</h2>
        </div>
        <div className='w-[200px] h-[200px]'>
            {<img src={image} alt={name} className='max-w-full max-h-full object-contain' />}
        </div>
      </div>
 </Link>
  )
}

export default Pokemon;