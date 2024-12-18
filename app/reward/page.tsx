"use client"
import React, {  } from 'react'
import BottomNavBar from '@/components/reward/BottomNavBar'
import EarlyRules from '@/components/reward/EarlyRules'
import History from '@/components/reward/History'
import Header from '@/components/reward/Header'
import Leaderboard from '@/components/reward/Leaderboard'

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Contact {
    id: number;
    profilePictureUrl: string;
    phNo: string;
    name: string;
    verified: boolean;
}


const page = () => {

    return (
        <div className="bg-gradient-to-b from-[#0F0015] to-[#1A0123] min-h-screen w-full flex flex-col p-0 m-0 text-white items-center" >
            {/* Header Section */}
            <Header />
            {/* History Section */}
            <History />
            {/* Earn Rules Section */}
            <EarlyRules />
            {/* Leaderboard Section */}
            <Leaderboard />
            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 w-full">
                <BottomNavBar />
            </div>
        </div>
    );
};

export default page;

