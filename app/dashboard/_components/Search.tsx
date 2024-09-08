import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; 

function Search({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-red-600 flex flex-col justify-center items-center'>
      <h2 className='text-3xl font-bold text-white'>ROT HACKERS CONTENT CREATION AI</h2>
      <p className='text-white'>What would you like to create today?</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[30%]'>
          <AiOutlineSearch className='text-primary'/>
          <input 
            type='text' 
            placeholder='Search' 
            onChange={(event)=>onSearchInput(event.target.value)}
            className='bg-transparent w-full outline-none text-black'
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
