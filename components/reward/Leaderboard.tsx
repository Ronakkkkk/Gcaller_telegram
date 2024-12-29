"use client";
import React, { useEffect, useState } from "react";
import axios from "@/lib/axios";
import LeaderBoardCard from "./LeaderBoardCard";

export interface ILeaderboardContact {
  _id: string;
  points: number;
  firstName: string;
  lastName: string;
}

const Leaderboard = () => {
  const [contacts, setContacts] = useState<ILeaderboardContact[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch contacts data
  const fetchContactsData = async () => {
    try {
      const { data } = await axios.get<ILeaderboardContact[]>("user/leaderboard");
      setContacts(data);
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
      {contacts.length > 0
        ? contacts.map((contact) => (
            <LeaderBoardCard
              key={contact._id} // Add unique key
              imageUrl={""}
              username={`${contact.firstName} ${contact.lastName}`}
              reward={contact.points}
            />
          ))
        : !error && <p className="text-gray-500 text-center">Loading...</p>}
    </div>
  );
};

export default Leaderboard;
