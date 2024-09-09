"use client";
import { useState, useEffect } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";

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
  const { user } = useUser(); 

  const fetchHistory = async () => {
    try {
      setLoading(true);

      if (user) {
        const userEmail = user.primaryEmailAddress?.emailAddress;

        const data = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, userEmail!))
          .orderBy(AIOutput.createdAt);

        setHistory(data);
      }
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [user]);

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-slate-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Your AI History
      </h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="space-y-4">
          {history.map((item) => {
            let questionData = { title: "", description: "", content: "" };
            try {
              questionData = JSON.parse(item.formData);
            } catch (e) {
              console.error("Error parsing formData:", e);
            }

            return (
              <div
                key={item.id}
                className="border rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white"
              >
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Title:</p>
                  <p className="text-gray-700">{questionData.title || "No title"}</p>
                  
                  <p className="font-semibold mt-2">Description:</p>
                  <p className="text-gray-700">{questionData.description || "No description"}</p>
                </div>

                <div className="flex justify-center items-center text-center">
                  <div>
                    <p className="font-semibold text-lg">AI Response:</p>
                    <p className="text-gray-700">{item.aiResponse || "No response"}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <div>
                    <p className="font-semibold">Date:</p>
                    <p className="text-gray-700">{item.createdAt || "No date"}</p>
                  </div>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
                    onClick={() => handleCopy(item.aiResponse || "")}
                  >
                    Copy
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default History;
