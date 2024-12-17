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
      const { data } = await axios.get<Contact[]>("contacts.json");

      const sortedContacts = data.sort((a, b) => b.rewardPoints - a.rewardPoints);
      setContacts(sortedContacts);
    } catch (err) {
      setError("Failed to load contacts");
      console.error(err);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchContactsData();
  }, []);

  return (
    <div className="w-full max-w-[400px] px-4 mt-10 mb-16">
      <h1 className="text-[16px] text-gray-400 text-center mb-4 opacity-[16%]">Leaderboard</h1>

      {/* Display error if it occurs */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Render contacts */}
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <LeaderBoardCard
            key={contact.id} // Add unique key
            imageUrl={contact.profilePictureUrl}
            username={contact.name}
            reward={contact.rewardPoints}
          />
        ))
      ) : (
        !error && <p className="text-gray-500 text-center">Loading...</p>
      )}
    </div>
  );
};

export default Leaderboard;
