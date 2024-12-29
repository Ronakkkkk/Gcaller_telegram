import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./faqlines"


function FAQSection() {
    return (
        <div className="w-full flex flex-col gap-3 mb-20">
            <div className=' bg-[#9747FF1A] h-9 w-full rounded-[10px] items-center justify-center flex mt-3'>
                <h1 className='font-medium text-xs leading-4 '>FAQ’s</h1>
            </div>

    <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>What is ZK Verification?</AccordionTrigger>
            <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger>What is CallNetwork?</AccordionTrigger>
            <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger>What is Network State?</AccordionTrigger>
            <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>

        
    </Accordion>
    
  
        
      </div>
    )
  }
  
  export default FAQSection

