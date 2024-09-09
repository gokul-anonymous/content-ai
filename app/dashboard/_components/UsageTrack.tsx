"use client";
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react';
import { HISTORY } from '../history/page'; 
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

function UsageTrack() {
  const { user } = useUser();
  const { totalWords, setTotalWords } = useContext(TotalUsageContext); 
  const { updateCreditUsage } = useContext(UpdateCreditUsageContext);
  const MAX_WORDS = 10000;

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      getData(user.primaryEmailAddress.emailAddress);
    }
  }, [user, updateCreditUsage]); 
  const getData = async (email: string) => {
    try {
      console.log('Fetching data...');
      const result: HISTORY[] = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, email));

      console.log('Data retrieved:', result);
      GetTotalWords(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const GetTotalWords = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((element) => {
      if (element.aiResponse) {
        total += element.aiResponse.split(' ').length; 
      }
    });
    console.log('Calculated total words:', total);
    setTotalWords(total);
  };


  const percentageUsed = Math.min((totalWords / MAX_WORDS) * 100, 100);

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="text-md">Credits</h2>
        <div className="h-2 bg-gradient-to-br from-purple-500 via-purple-700 to-red-600 w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: `${percentageUsed}%`,
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">
          {totalWords}/{MAX_WORDS} words used
        </h2>
      </div>
    </div>
  );
}

export default UsageTrack;
