"use client";
import React from "react";
import BottomNavBar from "@/components/BottomNavBar";
import EarlyRules from "@/components/reward/EarlyRules";
import History from "@/components/reward/History";
import Header from "@/components/reward/Header";
import Leaderboard from "@/components/reward/Leaderboard";
import TopBar from "@/components/reward/TopBar";


  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Contact {
    id: number;
    profilePictureUrl: string;
    phNo: string;
    name: string;
    verified: boolean;
}


const Page = () => {
    const pageStyle =
    "bg-gradient-to-b from-[#0F0015] to-[#1A0123] min-h-screen w-full flex flex-col items-center text-white";

    return (
        <div className={pageStyle}>
            <TopBar />
            {/* Header Section */}
            <div className="w-full px-4 mt-6 ">
                <Header />
            </div>
            {/* History Section */}
            <div className="w-full px-4 mt-6 max-w-[400px]">
                <History />
            </div>
            {/* Earn Rules Section */}
            <div className="w-full px-4 mt-6">
                <EarlyRules />
            </div>
            {/* Leaderboard Section */}
            <div className="w-full px-4 mt-6 max-w-[400px]">
                <Leaderboard />
            </div>
            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 w-full">
                <BottomNavBar />
            </div>
        </div>
    );
};

export default Page;
