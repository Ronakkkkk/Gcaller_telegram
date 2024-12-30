import React from 'react';
import Image from 'next/image';

interface ReferProps {
  src: string;
  reflink: string
}

const ReferCard: React.FC<ReferProps> = ({ 
  src, 
 reflink
}) => {


  return (
    <div className="flex flex-col w-full gap-4 py-1 ">
        <h1 className="font-medium text-[16px] leading-5 justify-start">Refer your friends and earn <br/> 100 points (beta)</h1>

        <div className="w-full h-36 bg-[#9747FF] bg-opacity-20 flex flex-col  items-center px-3 py-5 gap-5 border border-white border-opacity-30 rounded-[12px] ">

            <div className='w-full h-10 rounded-[8px] bg-[#9747FF] bg-opacity-30 border flex px-4 py-2 border-white border-opacity-30 items-center justify-between '>

                    <p className='font-normal text-sm leading-6 text-[#ac9cbe]'>{reflink}</p>
                    <Image
                                                src={src}
                                                alt="copy to clipboard"
                                                width={14}
                                                height={14}
                                                
                                                priority
                    />
            </div>     

            <div  className='w-full h-10 rounded-[8px] bg-[#9747FF] flex border border-white border-opacity-30 justify-center items-center'>
                <h1 className='font-medium text-lg leading-6 '>Share</h1>
            </div>                       
        </div>

    </div>
  );
};

export default ReferCard;


