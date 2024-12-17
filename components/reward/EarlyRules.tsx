import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/reward/ui/accordion"
import Image from 'next/image'

const EarlyRules = () => {

    

    return (
        <div className='relative top-6 flex items-center justify-center px-4'>
            <div className="text-center w-[328px]">
                <h1 className="text-[16px] md:text-[18px] opacity-30 mb-4">
                    Earn Rules
                </h1>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-2"
                >
                    {/* First Accordion Item */}
                    <AccordionItem
                        value="item-1"
                        className="border px-4 py-2 bg-[#3f2dde1a] rounded-lg"
                    >
                        <AccordionTrigger className="flex items-center font-normal text-[12px] md:text-[14px] text-left space-x-2">
                            <Image
                                src={'/icons/reward/star.png'}
                                height={16}
                                width={16}
                                alt="star"
                            />
                            <p className="leading-tight">
                                2,000+ points (to $1000+ value) for <br /> becoming active
                            </p>
                        </AccordionTrigger>
                        <AccordionContent className="mt-2 w-[250px] md:w-[300px] text-[12px] md:text-[13px] text-gray-400">
                            2,000+ points (to $1000+ value) for becoming active
                        </AccordionContent>
                    </AccordionItem>

                    {/* Second Accordion Item */}
                    <AccordionItem
                        value="item-2"
                        className="border px-4 py-2 bg-[#3f2dde1a] rounded-lg"
                    >
                        <AccordionTrigger className="flex items-center font-normal text-[12px] md:text-[14px] text-left space-x-2">
                            <Image
                                src={'/icons/reward/card.png'}
                                height={16}
                                width={16}
                                alt="card"
                            />
                            <p className="leading-tight">
                                Superboost your Solana staking <br /> rewards 
                                (up to 3X!)
                            </p>
                        </AccordionTrigger>
                        <AccordionContent className="mt-2 w-[200px] md:w-[350px] text-[12px] md:text-[13px] text-gray-400">
                            Superboost your rewards and get up to 3X benefits on staking.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Third Accordion Item */}
                    <AccordionItem
                        value="item-3"
                        className="border px-4 py-2 bg-[#3f2dde1a] rounded-lg"
                    >
                        <AccordionTrigger className="flex items-center font-normal text-[12px] md:text-[14px] text-left space-x-2">
                            <Image
                                src={'/icons/reward/sollogo.png'}
                                height={16}
                                width={16}
                                alt="sollogo"
                            />
                            <p className="leading-tight">
                            6-18% in reward points per card <br /> spend
                            </p>
                        </AccordionTrigger>
                        <AccordionContent className="mt-2 w-full md:max-w-[400px] text-[12px] md:text-[13px] text-gray-400">
                        6-18% in reward points per card <br /> spend
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default EarlyRules
