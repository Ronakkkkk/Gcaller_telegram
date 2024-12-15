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
}

const ContactsCard: React.FC<ContactsCardProps> = ({ profilePictureUrl, phNo, name }) => {
    const backGroundColor: object = {
        backgroundColor: "rgba(151, 71, 255, 0.1)",
    };

    return (
        <div
            className="bg-[#9747FF] h-[67px] sm:h-[80px] w-full sm:w-[21.375rem] flex justify-between items-center rounded-lg mb-5 px-4 sm:px-6 py-2"
            style={backGroundColor}
        >
            <div className="flex items-center space-x-4 sm:space-x-6">
                {/* Avatar Section */}
                <Avatar>
                    <AvatarImage src={profilePictureUrl} alt="@shadcn" />
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
