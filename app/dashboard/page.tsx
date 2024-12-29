"use client";

import styles from "./dashboard.module.css";
import Image from "next/image";
import CircularAvatar from "./components/CircularAvatar";
import UserData from "./components/UserData";
import ReferCard from "./components/refer";
import { useEffect, useState } from "react";
import MilestoneCard from "./components/Milestonecard";
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

export default function Dashboard() {
  const [user, setUser] = useState<IUserData | null>(null);
  const [error, setError] = useState<null | string>(null);

  // Fetch contacts data
  const fetchUserDashboardData = async () => {
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
    fetchUserDashboardData();
  }, []);

  if (user == null) {
    return <div>Loading</div>;
  }

  if (error !== null) {
    <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="bg-black w-full h-full text-white px-5">
      {/* Settings Icon */}
      <div className="w-full py-11 flex justify-end">
        <div className={styles.settings}>
          <Image
            src="/icons/dashboard/settings.png"
            alt="Settings"
            height={17}
            width={17}
            priority
          />
        </div>
      </div>

      {/* Profile Section */}
      <div className="w-full flex flex-col items-center space-y-5">
        <CircularAvatar
          src="/images/pfp.png"
          alt="profile image"
          size="xl"
          className="border-2 border-[#B983FF]"
        />

        {/* Name and Title */}
        <div className="text-center text-2xl font-light leading-[33px] space-y-1  ">
          <h1>Welcome {user.firstName}!</h1>
          <p className="text-center text-sm font-normal opacity-40">
            ({user.countryCode || "+977"}) {user.contactNumber}
          </p>
        </div>

        <div className="flex px-8 justify-center gap-3">
          <div className="bg-[#9747FF] bg-opacity-30 w-24 h-6 rounded-sm flex items-center justify-center">
            <p className="text-xs opacity-100 font-normal text-white leading-[14.61px] tracking-[0.04em]">
              {user.accountType || "Personal"}
            </p>
          </div>

          <div className="bg-[#1c1525] w-6 h-6 rounded-[8px] flex items-center justify-center border border-[#390083] ">
            <Image
              src="/icons/dashboard/edit.png"
              alt="Edit Profile"
              width={10}
              height={10}
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full h-0  border-2 border-white/35 border-dotted"></div>

        <div className="w-full h-11 bg-[#9747FF] rounded-[12px] mx-5 items-center justify-center flex flex-row gap-3 ">
          <Image
            src="/icons/dashboard/wallet.png"
            alt="Edit Profile"
            width={18}
            height={18}
            className="object-cover"
            priority
          />

          <p className="text-xs font-normal">Connect Wallet</p>
        </div>
      </div>

      <div className="w-full flex flex-col space-y-6">
        <div className="w-full h-0  mt-6 border-2 border-white/35 border-dotted"></div>

        <div className="w-full justify-center flex">
          <h1 className="text-[16px] text-[#595262] leading-6 font-normal ">Contact Points</h1>
        </div>

        <MilestoneCard userCallPoints={user.points} />

        <div className="w-full h-0  border-2 border-white/35  border-dotted"></div>

        <UserData
          userCallPoints={user.points}
          userTotalContacts={user.contactsCount}
          userTotalSpam={user.spamCount}
        />

        <div className="w-full h-0  border-2 border-white/35 border-dotted"></div>

        <ReferCard src="/icons/dashboard/copy.png" reflink="callntwk/referafriend-xyz" />
      </div>
    </div>
  );
}
