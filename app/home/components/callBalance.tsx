import React from 'react'
import Card from './card'
import DashedBorder from './border'

interface CallBalanceProps {
    amount : number
}
const CallBalance : React.FC <CallBalanceProps> = ({amount}) => {
  return (

    <div className="w-full flex flex-col gap-2">
      <div className=" bg-[#9747FF1A] h-[106px] w-[100%] rounded-[16px] border border-white/30 flex justify-center items-center font-extrabold text-2xl text-white leading-8">

        $CALL BALANCE : {amount}
      </div>

      <div className='w-full flex gap-3'>

        <Card
        imageurl='/icons/home/contacts.png'
        smallText='Total'
        biggerText='Contacts'
        numberOfSpamOrContacts={100}
        />
        <Card
        imageurl='/icons/home/spam.png'
        smallText='Spam'
        biggerText='Detected'
        numberOfSpamOrContacts={300}
        />
      </div>

      <DashedBorder/>

    

    </div>


  
  )
}

export default CallBalance

