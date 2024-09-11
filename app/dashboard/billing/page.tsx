"use client";
import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";

function Billing() {
  const { totalWords } = useContext(TotalUsageContext); 
  const MAX_WORDS = 10000; 


  const percentageUsed = Math.min((totalWords / MAX_WORDS) * 100, 100);

  return (
    <div className="min-h-screen p-5 bg-slate-100">
      <h1 className="text-2xl font-semibold text-center mb-8">Billing</h1>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Billing Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Current Plan</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Credits Used</span>
              <span className="font-medium">
                {totalWords} / {MAX_WORDS} words
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Usage</span>
              <span className="font-medium">{percentageUsed}%</span>
            </div>
          </div>
        </div>

     
        <div className="bg-gradient-to-br from-purple-500 via-purple-700 to-red-600 p-6 rounded-lg shadow-lg text-white">
          <h2 className="text-xl font-semibold mb-4">Upgrade to Premium</h2>
          <div className="space-y-4">
            <p className="text-md">
              Enjoy unlimited words, priority access to new features, and dedicated support.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" /> Unlimited words
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" /> Priority support
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" /> Access to exclusive AI models
              </li>
            </ul>
            <Button className="mt-6 w-full bg-white text-purple-700 hover:bg-gray-200 flex items-center justify-center">
              Upgrade Now <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>


      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Payment History</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Date</span>
            <span className="text-gray-600">Amount</span>
            <span className="text-gray-600">Status</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Aug 5, 2024</span>
            <span className="font-medium">$0.00</span>
            <span className="font-medium text-green-500">Free Plan</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
