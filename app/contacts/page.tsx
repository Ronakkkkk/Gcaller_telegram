"use client";
import React, { useEffect, useState, useMemo } from "react";
import { ScrollArea } from "@/components/contacts/ui/scroll-area";
import ContactsCard from "@/components/contacts/ContactsCard";
import TextCard from "@/components/contacts/TextCard";
import Search from "@/components/contacts/Search";
import Header from "@/components/contacts/Header";
import axios from "axios";
import BottomNavBar from "@/components/BottomNavBar";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  const alphabetList = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

  const fetchContactsData = async () => {
    try {
      // const { data, status } = await axios.get<ContactsResponse>("contacts/list");
      // setContacts(data.data);
      const { data } = await axios.get<Contact[]>("contacts.json");
      
      setContacts(data);
    } catch (err) {
      if(axios.isAxiosError(err)){
        setError(err.message);
      }else if(err instanceof Error){
        setError(err.message);
      }else{
        setError("An unexpected error occured");
      }
    }
  };

  useEffect(() => {
    fetchContactsData();
  }, []);

  const sortedContacts = useMemo(
    () => contacts.sort((a, b) => a.name.localeCompare(b.name)),
    [contacts]
  );

  const filteredContacts = useMemo(() => {
    const filteredByVerified = sortedContacts.filter((contact) =>
      isVerified ? contact.verified : !contact.verified
    );
    return filteredByVerified.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [sortedContacts, isVerified, searchQuery]);

  const handleLetterClick = (letter: string) => {
    const element = document.querySelector(`[data-letter-group="${letter}"]`);
    element?.scrollIntoView({ behavior: "smooth" });
  };

 

  const groupedContacts = filteredContacts.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(contact);
    return acc;
  }, {} as Record<string, Contact[]>);

  return (
    <div className="bg-gradient-to-b from-[#0F0015] to-[#1A0123] min-h-screen w-full flex flex-col text-white  items-center">

      <div className=" mt-[75px] w-full px-4 flex flex-col text-white  items-center">
      <Header />
      <Search onSearch={setSearchQuery} />

      <div className="flex mt-[25px] justify-start w-full sm:w-[24.375rem] ">

        {/* Text Cards */}
        <div className="flex flex-wrap font-medium">
    <div onClick={() => setIsVerified(true)} className="mr-4 mb-2">
      <TextCard
        text="Verified"
        style={
          isVerified
            ? {}
            : {backgroundColor: "rgba(151, 71, 255, 0.3)" }
        }
      />
    </div>
    <div onClick={() => setIsVerified(false)}>
      <TextCard
        text="Not Verified"
        style={
          !isVerified
            ? {}
            : {backgroundColor: "rgba(151, 71, 255, 0.3)"}
        }
      />
    </div>
  </div>
      </div>

      <div className="relative w-full max-w-[390px] h-[62vh] flex ">
        {/* Contacts Scroll */}
        <ScrollArea className="w-[90%] h-[62vh] pr-2 pt-4 overflow-y-auto">

          {!error ? alphabetList.map((letter) => (
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
          )) : <div>{error}</div>}
        </ScrollArea>


        {/* Alphabet Scroller */}
        <div className="absolute right-0 top-0 bottom-0 w-8 flex flex-col bg-black">
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
          {/* Bottom Navbar */}
<div className="fixed bottom-0 left-0 w-full h-[50px] bg-black">
  <BottomNavBar />
</div>
      </div>
      
      </div>
    
    </div>
  );
};

export default Contacts;
