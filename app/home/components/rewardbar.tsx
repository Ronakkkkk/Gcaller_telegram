import React from 'react'
import RewardsProgress from './circularprogresBar'


interface RewardBarProps {
    amount : number
}
const RewardBar : React.FC <RewardBarProps> = ({amount}) => {

  const percentage = amount;
  return (

    <div className="w-full flex flex-col gap-9">
      <div className=' bg-[#9747FF1A] h-9 w-full rounded-[10px] items-center justify-center flex '>
          <h1 className='font-medium text-xs leading-4 '>Reward Progress</h1>
      </div>

      <div className='w-full flex justify-center'>
      <RewardsProgress value={percentage} />
      </div>
    </div>


  )
}

export default RewardBar

