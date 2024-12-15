"use client"
import React from 'react'
import TextCard from './TextCard'
import { useState } from 'react'
const VerifiedNotVerifiedCards = () => {
    const [isVerified, setIsVerified] = useState(true);
  return (
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
            ? {  }
            : {backgroundColor: "rgba(151, 71, 255, 0.3)"}
        }
      />
    </div>
  </div>
  )
}

export default VerifiedNotVerifiedCards