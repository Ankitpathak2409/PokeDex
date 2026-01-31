import React from 'react'

const Search = () => {
  return (
    <div className='w-screen flex justify-center'>
        <input type="text" className='border-2 rounded-xl w-1/2 px-4 py-3 text-xl font-semibold' placeholder='Which pokemon you are looking for...' />
    </div>
  )
}

export default Search