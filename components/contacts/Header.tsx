import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between w-full sm:w-[22.4375rem]">
      <h1 className="tracking-wider text-[17px] sm:text-2xl font-medium">Contacts</h1>
      <h1 className="text-[#9747FF] flex items-center tracking-wider text-[13px] font-medium sm:text-base cursor-pointer">
        + Import Contacts
      </h1>
    </div>
  )
}

export default Header
