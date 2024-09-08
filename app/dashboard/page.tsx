'use client'
import React, { useState } from 'react'
import Search from './_components/Search'
import TemplateList from './_components/TemplateList'

function Dashboard() {
  const [userSearchInput,setUserSearchInput]=useState<string>()
  return (
    <div>
        <Search onSearchInput={(value:string)=>setUserSearchInput(value)}/>
        <TemplateList userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard