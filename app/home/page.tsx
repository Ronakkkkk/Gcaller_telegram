'use client';
import Image from "next/image";
import DashedBorder from "./components/border";
import Card from "./components/card";
import CallBalance from "./components/callBalance";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className="bg-black font-poppins w-full">
      {/* Full-width Profile Picture */}
      <Image
        src={"/home/pfp.png"}
        alt="Profile Picture"
        height={1000}
        width={1000}
        className="w-full"
        style={{ objectFit: "cover" }} // Use 'cover' for full-width background fit
        priority
      />

     
        <div className={styles.container}>
          {/* Header */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mt-5">Welcome Kash</h1>

          {/* Pubkey Display */}
          <div className="flex justify-center mt-3 w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
            <p className="truncate w-[50%] text-gray-500 text-sm sm:text-base">
              {`BmQuXK4wJdLEULMvzwyiNE9p7Rj3Pg4pgFfoB1SY53pj`}
            </p>
            {/* Clipboard Component Placeholder */}
            {/* <ClipboardComponent value="BmQuXK4wJdLEULMvzwyiNE9p7Rj3Pg4pgFfoB1SY53pj" /> */}
          </div>

          {/* Dashed Border */}
          <DashedBorder />

          {/* Call Balance and Cards */}
          <div>
            <CallBalance amount={20} />

            <div className="flex justify-between mt-3">
              <Card
                imageurl="/icons/home/contacts.png"
                smallText="Total"
                biggerText="Contacts"
                numberOfSpamOrContacts={100}
              />
              <div className="ml-1"></div>
              <Card
                imageurl="/icons/home/spam.png"
                smallText="Spam"
                biggerText="Detected"
                numberOfSpamOrContacts={30}
              />
            </div>
          </div>

          {/* Another Dashed Border */}
          <DashedBorder />
        </div>
      
    </div>
  );
}
