import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
        <div className='flex gap-5 justify-between items-center'>
            <h2 className='bg-primary p-1 rounded-full text-md text-white px-2'>Join Memership $2.99/Month only</h2>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header