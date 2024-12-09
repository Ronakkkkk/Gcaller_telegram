import React, { useRef, useEffect } from 'react'

interface AlphaNumericSliderProps{
    list : [],
    onClick : () => void
}



const AlphaNumericSlider = ({ list, onClick }) => {
  const letterList = useRef(null)

  const handleScroll = (e) => {
    console.log('scrolling', e)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="alphanum-list" ref={letterList}>
      {list.map(letter => (
        <div key={letter} onClick={() => onClick(letter)}>
          {letter}
        </div>
      ))}
    </div>
  )
}

export default AlphaNumericSlider
