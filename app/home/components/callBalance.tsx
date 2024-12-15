import React from 'react'

interface CallBalanceProps {
    amount : number
}
const CallBalance : React.FC <CallBalanceProps> = ({amount}) => {
  return (
    <div className=" bg-[#9747FF1A] h-[106px] w-[100%] rounded-2xl border border-gray-500 flex justify-center items-center font-bold text-2xl text-white">

    $CALL BALANCE : {amount}
  </div>
  )
}

export default CallBalance