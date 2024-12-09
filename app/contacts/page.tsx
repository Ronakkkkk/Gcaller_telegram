"use client";
import React, { useEffect, useState, useMemo } from "react";
import { ScrollArea } from "@/components/contacts/ui/scroll-area";
import ContactsCard from "@/components/contacts/ContactsCard";
import TextCard from "@/components/contacts/TextCard";
import Search from "@/components/contacts/Search";
import Header from "@/components/contacts/Header";
import axios from "axios";

interface Contact {
  id: number;
  profilePictureUrl: string;
  phNo: string;
  name: string;
  verified: boolean;
}

const Contacts: React.FC = () => {
  const [isVerified, setIsVerified] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);

  const alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const fetchContactsData = async () => {
    try {
      const response = await axios.get<Contact[]>('/contacts.json');
      setContacts(response.data);
    } catch (err) {
      setError('Failed to load contacts');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContactsData();
  }, []);

  const sortedContacts = useMemo(
    () => contacts.sort((a, b) => a.name.localeCompare(b.name)),
    [contacts]
  );

  const filteredContacts = useMemo(
    () =>
      sortedContacts.filter((contact) =>
        isVerified ? contact.verified : !contact.verified
      ),
    [sortedContacts, isVerified]
  );

  const handleLetterClick = (letter: string) => {
    const element = document.querySelector(`[data-letter-group="${letter}"]`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  const groupedContacts = filteredContacts.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toLowerCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(contact);
    return acc;
  }, {} as Record<string, Contact[]>);

  return (
    <div className="bg-black min-h-screen w-full flex flex-col pt-12 px-4 text-white items-center">
    <Header />
    <Search />
  
    <div className="flex mt-4 justify-start w-full sm:w-[24.375rem]">
  {/* Text Cards aligned left */}
  <div className="flex flex-wrap">
    <div onClick={() => setIsVerified(true)} className="mr-4 mb-2">
      <TextCard
        text="Verified"
        style={isVerified ? { backgroundColor: "rgba(151, 71, 255, 0.3)" } : {}}
      />
    </div>
    <div onClick={() => setIsVerified(false)}>
      <TextCard
        text="Not Verified"
        style={!isVerified ? { backgroundColor: "rgba(151, 71, 255, 0.3)" } : {}}
      />
    </div>
  </div>
</div>

  
    <div className="relative w-full max-w-[390px] h-[67vh] mt-6 flex">
      {/* Contacts Scroll */}
      <ScrollArea className="h-full w-full pr-[3rem]">
        {alphabetList.map((letter) => (
          <div key={letter} data-letter-group={letter}>
            {groupedContacts[letter]?.map((contact) => (
              <ContactsCard
                key={contact.id}
                profilePictureUrl={contact.profilePictureUrl}
                phNo={contact.phNo}
                name={contact.name}
              />
            ))}
          </div>
        ))}
      </ScrollArea>
  
      {/* Alphabet Scroller */}
      <div className="absolute right-0 top-0 bottom-0 w-8 flex flex-col py-2 bg-black">
        {alphabetList.map((letter) => (
          <div
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className="text-xs cursor-pointer hover:text-purple-500 text-center flex-1 flex items-center justify-center"
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Contacts;
