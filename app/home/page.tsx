"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CallBalance from "./components/callBalance";
import DashedBorder from "./components/border";
import RewardBar from "./components/rewardbar";
import FAQSection from "./components/faq";
// import ClipboardComponent from './components/ClipboardComponent'; // Import the ClipboardComponent
import axios from "@/lib/axios";

interface IUserData {
  _id: string;
  points: number;
  firstName: string;
  lastName: string;
  contactNumber: string;
  countryCode: string;
  spamCount: number;
  verifiedCount: number;
  contactsCount: number;
  accountType: string;
  activity: {
    spamReportCount: number;
    addContactCount: number;
    verifyContactCount: number;
  };
}

const Home = () => {
  const [user, setUser] = useState<IUserData | null>(null);
  const [error, setError] = useState<null | string>(null);

  // Fetch contacts data
  const fetchUserProfileData = async () => {
    try {
      const { data } = await axios.get<IUserData>("user/profile");
      setUser(data);
    } catch (err) {
      setError("Failed to load user data");
      console.error(err);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchUserProfileData();
  }, []);

  if (user == null) {
    return <div>Loading</div>;
  }

  if (error !== null) {
    <p className="text-red-500 text-center">{error}</p>;
  }

  const address = "4Uj3En..........m1toot"; // Store the address as a constant

  return (
    <div className="bg-black w-96 min-h-screen text-white overflow-hidden mx-auto">
      <Image
        src="/home/pfp.png"
        alt="Profile Picture"
        height={306}
        width={390}
        className="w-full object-cover"
        priority
      />

      <div className="-mt-10 relative z-10">
        <div className="bg-[#21172C] rounded-t-3xl border-2 border-[#9747FF99] px-5 py-4 space-y-5">
          <div className="flex flex-col items-center justify-center w-full gap-1">
            <h1 className="text-2xl font-normal leading-9">Welcome {user.firstName}</h1>
            <div className="w-full flex items-center justify-center gap-3">
              <p className="text-sm font-normal leading-4 text-white/60">{address}</p>
              {/* <ClipboardComponent value={address} message="Address copied to clipboard!" /> */}
            </div>
          </div>

          <DashedBorder />

          <CallBalance
            amount={user.points}
            totalContactsCount={user.contactsCount}
            spamDetectedCount={user.activity.spamReportCount}
          />

          <RewardBar amount={user.points} />

          <FAQSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
