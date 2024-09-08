'use client'
import { CreditCard, FolderClock, Home, Settings2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'

function SideNavbar() {
    const MenuList =[
        {
            name:'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name:'History',
            icon: FolderClock,
            path: '/dashboard/history'
        },
        {
            name:'Billing',
            icon:  CreditCard,
            path: '/dashboard/billing'
        },
        {
            name:'Settings',
            icon: Settings2,
            path: '/dashboard/settings'
        },
    ]
  const path =usePathname();
  useEffect(()=>{
    console.log(path)
  })
    return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
        <Image src={'/logo.jpg'} alt='logo' width={100} height={50}/>
        </div>
        <hr className='my-6 border'/>
        <div className='mt-3'>
            {MenuList.map((menu,index)=>(
                <Link href={menu.path}>                <div className={`flex gap-2 m-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path==menu.path&&'bg-primary text-white'}`}>
                    <menu.icon className='h-6 w-6'/>
                    <h2 className='text-lg'>{menu.name}</h2>
                </div>
                </Link>
            ))}
        </div>
        <div className='absolute bottom-10 left-0 w-full'>
            <UsageTrack/>
        </div>
    </div>
  )
}

export default SideNavbar