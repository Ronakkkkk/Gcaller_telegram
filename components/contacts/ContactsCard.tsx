import Image from 'next/image';
import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/contacts/ui/avatar";

interface ContactsCardProps {
    profilePictureUrl: string;
    phNo: string;
    name: string;
    isLoading: boolean;
}

const ContactsCard: React.FC<ContactsCardProps> = ({ profilePictureUrl, phNo, name, isLoading }) => {
    const backGroundColor: object = {
        backgroundColor: "rgba(151, 71, 255, 0.1)",
    };

    if (isLoading) {
        return (
            <div
                className="bg-[#9747FF] h-[67px] sm:h-[80px] w-full sm:w-[21.375rem] flex justify-between items-center rounded-lg mb-5 px-4 sm:px-6 py-2"
                style={backGroundColor}
            >
                <div className="flex items-center space-x-4 sm:space-x-6">
                    {/* Skeleton for Avatar */}
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-300 animate-pulse"></div>
                    <div className="flex flex-col space-y-2">
                        {/* Skeleton for Name */}
                        <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
                        {/* Skeleton for Phone Number */}
                        <div className="h-3 w-16 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                </div>

                <div className="flex items-center space-x-4 sm:space-x-6">
                    {/* Skeleton for Icons */}
                    <div className="h-5 w-5 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-5 w-5 bg-gray-300 rounded animate-pulse"></div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="bg-[#9747FF] h-[67px] sm:h-[80px] w-full sm:w-[21.375rem] flex justify-between items-center rounded-lg mb-5 px-4 sm:px-6 py-2"
            style={backGroundColor}
        >
            <div className="flex items-center space-x-4 sm:space-x-6">
                {/* Avatar Section */}
                <Avatar>
                    <AvatarImage src={profilePictureUrl} alt={name} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                    <p className="text-[0.9rem] sm:text-[1rem] font-medium">{name}</p>
                    <p className="text-[0.6rem] sm:text-[0.8rem] font-light text-gray-300">
                        (+91) {phNo}
                    </p>
                </div>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6">
                {/* Verified Icon */}
                <Image
                    src="/icons/contacts/verified.png"
                    alt="verified"
                    width={20}
                    height={20}
                    style={{ objectFit: 'contain' }}
                />

                {/* Phone Icon */}
                <Image
                    src="/icons/contacts/phone.png"
                    alt="call"
                    width={23}
                    height={23}
                    style={{ objectFit: 'contain' }}
                    className="cursor-pointer"
                />
            </div>
        </div>
    );
};

export default ContactsCard;
