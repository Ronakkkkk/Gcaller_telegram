"use client";
import React, { useEffect, useState, useMemo } from "react";
import { ScrollArea } from "@/components/contacts/ui/scroll-area";
import ContactsCard from "@/components/contacts/ContactsCard";
import Search from "@/components/contacts/Search";
import Header from "@/components/contacts/Header";
import axios from "@/lib/axios";
import TextCard from "@/components/contacts/TextCard";

interface ContactsResponse {
  status: number;
  data: Contact[];
  page: number;
  perPage: number;
}

interface Contact {
  _id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  spamCount: number;
  verifiedCount: number;
  contactId: string;
  isVerified: boolean;
  createdDate: string;
  isFirst: boolean;
}

const Contacts: React.FC = () => {
  const [isVerified, setIsVerified] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  const alphabetList = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

  const fetchContactsData = async () => {
    try {
      const { data } = await axios.get<ContactsResponse>("contacts/list");
      // TODO: handle 404,400 cases
      setContacts(data.data);
    } catch (err) {
      setError("Failed to load contacts");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContactsData();
  }, []);

  const sortedContacts = useMemo(
    () => contacts.sort((a, b) => a.firstName.localeCompare(b.firstName)),
    [contacts]
  );

  const filteredContacts = useMemo(() => {
    const filteredByVerified = sortedContacts.filter((contact) =>
      isVerified ? contact.isVerified : !contact.isVerified
    );
    return filteredByVerified.filter((contact) =>
      contact.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [sortedContacts, isVerified, searchQuery]);

  const handleLetterClick = (letter: string) => {
    const element = document.querySelector(`[data-letter-group="${letter}"]`);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  const groupedContacts = filteredContacts.reduce((acc, contact) => {
    const firstLetter = contact.fullName[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(contact);
    return acc;
  }, {} as Record<string, Contact[]>);

  return (
    <div className="bg-gradient-to-b from-[#0F0015] to-[#1A0123] overflow-hidden min-h-screen w-full flex flex-col text-white  items-center p-0 m-0">

      <div className=" mt-[75px] w-full px-4 flex flex-col text-white  items-center">
        <Header />
        <Search onSearch={setSearchQuery} />

        <div className="flex mt-[25px] justify-start w-full sm:w-[24.375rem] ">
          {/* Text Cards */}
          <div className="flex flex-wrap font-medium">
            <div onClick={() => setIsVerified(true)} className="mr-4 mb-2">
              <TextCard
                text="Verified"
                style={isVerified ? {} : { backgroundColor: "rgba(151, 71, 255, 0.3)" }}
              />
            </div>
            <div onClick={() => setIsVerified(false)}>
              <TextCard
                text="Not Verified"
                style={!isVerified ? {} : { backgroundColor: "rgba(151, 71, 255, 0.3)" }}
              />
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[390px] h-[68vh] flex ">
          {/* Contacts Scroll */}
          <ScrollArea className="w-[90%] h-[68vh] pr-2 pt-4 overflow-y-auto">
            {alphabetList.map((letter) => (
              <div key={letter} data-letter-group={letter}>
                {groupedContacts[letter]?.map((contact) => (
                  <ContactsCard
                    key={contact._id}
                    profilePictureUrl={''}
                    phNo={contact.contactNumber}
                    name={contact.fullName}
                  />
                ))}
              </div>
            ))}
          </ScrollArea>

          {/* Alphabet Scroller */}
          <div className="absolute right-0 top-0 bottom-1 w-8 flex flex-col bg-black">
            {alphabetList.map((letter) => (
              <div
                key={letter}
                onClick={() => handleLetterClick(letter)}
                className="text-[8px] font-bold cursor-pointer hover:text-purple-700 text-center flex-1 flex items-center justify-center "
              >
                {letter}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
