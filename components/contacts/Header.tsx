import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between w-full sm:w-[22.4375rem] px-4">
      <h1 className="tracking-wider font-bold text-xl sm:text-2xl">Contacts</h1>
      <h1 className="text-[#9747FF] tracking-wider text-sm sm:text-base cursor-pointer">
        + Import Contacts
      </h1>
    </div>
  )
}

export default Header
