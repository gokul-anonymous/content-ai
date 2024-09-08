"use client"
import { useState, useEffect } from 'react';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';


export interface HISTORY {
    id: number;
    formData: string;
    aiResponse: string | null;
    templateSlug: string;
    createdBy: string;
    createdAt: string | null; 
}

const History = () => {
    const [history, setHistory] = useState<HISTORY[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchHistory = async () => {
        try {
            setLoading(true);
            // Fetch data from the database
            const data = await db
                .select()
                .from(AIOutput)
                .orderBy(AIOutput.createdAt); 
            setHistory(data);
        } catch (error) {
            console.error("Error fetching history:", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchHistory();
    }, []);

   
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert("Copied to clipboard!"); 
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    };

    return (
        <div className="p-4 md:p-6 lg:p-8 bg-slate-100">
            {loading ? (
                <p className="text-center text-gray-600">Loading...</p>
            ) : (
                <div className="space-y-4">
                    {history.map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                        >
                            <div className="col-span-1">
                                <p className="font-semibold">Template:</p>
                                <p className="text-gray-700">{item.templateSlug}</p>
                            </div>
                            <div className="col-span-1">
                                <p className="font-semibold">AI Response:</p>
                                <p className="text-gray-700">{item.aiResponse || 'No response'}</p>
                            </div>
                            <div className="col-span-1">
                                <p className="font-semibold">Date:</p>
                                <p className="text-gray-700">{item.createdAt || 'No date'}</p>
                            </div>
                            <div className="col-span-1 flex items-center space-x-2">
                                <p className="font-semibold">Words:</p>
                                <p className="text-gray-700">{item.aiResponse ? item.aiResponse.split(' ').length : 0}</p>
                            </div>
                            <div className="col-span-1 flex items-center">
                                <button
                                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                    onClick={() => handleCopy(item.aiResponse || '')}
                                >
                                    Copy
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default History;
