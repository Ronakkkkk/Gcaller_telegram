import React from 'react'

const History = () => {
    const historyStyle = "flex justify-between text-[14px] py-2  border-gray-700";
    const history = {
        'Contact Imported': 86,
        'Spam Detected': 20,
        'Contacts Verified': 14,
    };

    
  return (
    <div className="w-full max-w-[400px] px-4 mt-8">
    <h1 className="text-[16px] text-gray-400 text-center mb-4">History</h1>
    {Object.entries(history).map(([key, value], index) => (
        <div
            key={index}
            className={historyStyle}
        >
            <p>{key}:</p>
            <p>{value}</p>
        </div>
    ))}
</div>
  )
}

export default History