"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LeaderBoardCard from "./LeaderBoardCard";

interface Contact {
  id: number;
  profilePictureUrl: string;
  phNo: string;
  name: string;
  verified: boolean;
  rewardPoints: number;
}

const Leaderboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch contacts data
  const fetchContactsData = async () => {
    try {
      const response  = await axios.get<Contact[]>("contacts.json");
      const data = response.data;
      const sortedContacts = data.sort((a, b) => b.rewardPoints - a.rewardPoints);
      setContacts(sortedContacts);
    } catch (err) {
      if (axios.isAxiosError(err)){
        setError(err.message);
        console.error(err);
      }else if(err instanceof Error){
        setError(err.message);
        console.error(err.message);
      }else{
        setError("An unexpected Error Occured");
      }
      
    }
  };

 
  useEffect(() => {
    fetchContactsData();
  }, []);

  return (
    <div className="w-full max-w-[400px] px-4 mt-11 mb-16">
      <h1 className="text-[16px] text-gray-400 text-center mb-6 opacity-[16%]">Leaderboard</h1>
    

      {/* Render contacts */}
      
      {!error ? contacts.length > 0 ? (
        contacts.map((contact) => (
          <LeaderBoardCard
            key={contact.id}
            imageUrl={contact.profilePictureUrl}
            username={contact.name}
            reward={contact.rewardPoints}
          />
        ))
      ) : (
        !error && <p className="text-gray-500 text-center">Loading...</p>
      ) : <p className="text-gray-500 text-center">{error}</p>}
    </div>
  );
};

export default Leaderboard;
