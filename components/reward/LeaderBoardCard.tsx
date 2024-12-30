import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../contacts/ui/avatar'
interface LeaderBoard {
    imageUrl: string;
    username : string;
    reward : number;
  }

const LeaderBoardCard: React.FC<LeaderBoard> = ({imageUrl, username, reward}) => {
  return (
    <div className="w-full mb-4 max-w-[400px] h-auto bg-[#9747FF1A] rounded-[12px] border border-gray-500 p-2 flex items-center space-x-5">
    {/* Avatar Section */}

    
    <Avatar className="w-10 h-10">
        <AvatarImage
            src={imageUrl}
            alt="@shadcn"
        />
        <AvatarFallback>JP</AvatarFallback>
    </Avatar>

    {/* User Info Section */}
    <div className="flex flex-1 justify-between items-center">
        <p className="text-white text-[16px] ">{username}</p>
        <p className="text-white text-[16px] ">{reward}</p>
    </div>
</div>
  )
}

export default LeaderBoardCard