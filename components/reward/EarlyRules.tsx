import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/reward/ui/accordion"
import Image from 'next/image'

const accordionData = [
    {
        id: "item-1",
        icon: "/icons/reward/star.png",
        triggerText: (
            <>
                2,000+ points (to $1000+ value) for <br /> becoming active
            </>
        ),
        content: "2,000+ points",
    },
    {
        id: "item-2",
        icon: "/icons/reward/card.png",
        triggerText: (
                <>
                Superboost your Solana staking <br/> rewards (up to 3X!)
                </>
            ),
        content:
            "This is a really long text that is designed to test the wrapping and the maximum width of the content area. Ensure it does not overflow or break out.",
    },
    {
        id: "item-3",
        icon: "/icons/reward/sollogo.png",
        triggerText: (
                <>
                    6-18% in reward points per card <br /> spend
                </>
            ),
        content:
            "Earn 6-18% in reward points per card spend. These rewards will boost your earning potential significantly.",
    },
];

const AccordionContentStyle= "mt-2 w-full max-w-[350px] text-[12px] text-gray-400 break-words text-left";
const AccordionTriggerStyle = "flex items-center font-normal text-[12px] md:text-[14px] text-left w-full break-words";
const AccordionItemStyle= "border-[1px] border-[rgba(255, 255, 255, 0.3)] border-opacity-30  px-4 py-1  bg-[#9747FF] bg-opacity-[10%] rounded-lg";

const EarlyRules = () => {
    return (
        <div className="relative top-6 flex items-center justify-center">
            <div className="text-center w-full max-w-[359px]">
                <h1 className="text-[16px] md:text-[18px] opacity-30 mb-6">
                    Earn Rules
                </h1>
                <Accordion
                    type="single"
                    collapsible
                    className="w-[359px] space-y-4"
                >
                    {accordionData.map(({ id, icon, triggerText, content }) => (
                        <AccordionItem
                            key={id}
                            value={id}
                            className={AccordionItemStyle}
                        >
                            <div className="w-full">
                                <AccordionTrigger className={AccordionTriggerStyle}>
                                    <Image
                                        src={icon}
                                        height={16}
                                        width={16}
                                        alt={id}
                                        className="flex-shrink-0"
                                    />
                                    <p className="leading-tight ml-4 flex-grow truncate">
                                        {triggerText}
                                    </p>
                                </AccordionTrigger>
                                <AccordionContent className={AccordionContentStyle}>
                                    {content}
                                </AccordionContent>
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default EarlyRules
