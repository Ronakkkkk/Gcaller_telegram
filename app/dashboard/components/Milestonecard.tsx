import React from 'react';
import Image from 'next/image';
import { Progress } from './progressBar';

interface MilestoneProps {
  userCallPoints:number
}

const MilestoneCard: React.FC<MilestoneProps> = ({ 
  userCallPoints
}) => {


  return (
    <div className="w-full h-36 bg-[#9747FF] bg-opacity-30 flex flex-col justify-start items-center px-8 py-5 gap-4 border-2 border-white border-opacity-30 rounded-[12px] ">
                    <div className="w-full flex items-center justify-start gap-5">

                        <Image
                            src="/icons/dashboard/coin.png"
                            alt="Edit Profile"
                            width={65}
                            height={65}
                            className="object-cover"
                            priority
                        />

                        <h1 className="font-semibold text-2xl leading-[27px] letter-spacing: -0.01em  "> {userCallPoints !== null ? `${userCallPoints}/2000` : "Loading..."}</h1>
                        
                    </div>

                    <Progress value={userCallPoints} />
                        



                  
                </div>
  );
};

export default MilestoneCard;


