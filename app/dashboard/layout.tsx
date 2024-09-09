"use client";
import React, { useState } from 'react';
import SideNavbar from './_components/SideNavbar';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

function Layout({ children }: { children: React.ReactNode }) {
  const [totalWords, setTotalWords] = useState<number>(0);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>(null);

  return (
    <TotalUsageContext.Provider value={{ totalWords, setTotalWords }}>
      <UpdateCreditUsageContext.Provider value={{ updateCreditUsage, setUpdateCreditUsage }}>
        <div className='bg-slate-100 h-screen text-black'>
          <div className='md:w-64 hidden md:block fixed'><SideNavbar /></div>
          <div className='md:ml-64'>
            <Header />
            {children}
          </div>
        </div>
      </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default Layout;
