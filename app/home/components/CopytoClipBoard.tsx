"use client"
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Copy } from 'lucide-react';

import { useToast } from "@/hooks/use-toast"
interface ClipboardComponentProps {
    value: string;
  }

const ClipboardComponent: React.FC<ClipboardComponentProps> = ({value} ) => {
  
  const [copied, setCopied] = useState<boolean>(false); // state for copied status
  const { toast } = useToast()


  const handleCopy = () => {
    setCopied(true);
    toast({
      title: ` copied`,
      color : "black"
    });
  }
  return (
    <div>
      <CopyToClipboard
        text={value}
        onCopy={handleCopy} 
      >
        <span className=' text-white cursor-pointer'>
          <Copy size={20}/>
          </span>
      </CopyToClipboard>
      
    </div>
  );
};

export default ClipboardComponent;