import React from 'react';

interface UserDataProps {
  userCallPoints: number
  userTotalContacts:number
  userTotalSpam:number

}

const UserData: React.FC<UserDataProps> = ({ userCallPoints,userTotalContacts,userTotalSpam}) => {
  
  return (

    <div className="w-full  gap-2 flex flex-col">
                    <div className="w-full flex items-center justify-between">
                            
                        <h1 className="font-normal text-sm leading-5  ">Call Points:</h1>
                        <h1 className="font-normal text-xl leading-7  ">  {userCallPoints !== null ? userCallPoints : "Loading..."}</h1>
                    </div>

                    <div className="w-full flex items-center justify-between">
                            
                        <h1 className="font-normal text-sm leading-5  ">Total Contacts:</h1>
                        <h1 className="font-normal text-xl leading-7  ">  {userTotalContacts !== null ? userTotalContacts : "Loading..."}</h1>
                    </div>

                    <div className="w-full flex items-center justify-between">
                            
                        <h1 className="font-normal text-sm leading-5  ">Spam Detected:</h1>
                        <h1 className="font-normal text-xl leading-7  ">  {userTotalSpam !== null ? userTotalSpam : "Loading..."}</h1>
                    </div>
                </div>

   
  );
};

export default UserData;