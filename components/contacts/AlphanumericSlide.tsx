import React, { useRef, useEffect } from 'react'

interface AlphaNumericSliderProps{
    list : [],
    onClick : () => void
}



const AlphaNumericSlider: React.FC<AlphaNumericSliderProps>  = ({ list, onClick }) => {
  const letterList = useRef(null)

  const handleScroll = (e : Event) => {
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
      {list.map((letter) => (
        <div key={letter} onClick={() => onClick()}>
          {letter}
        </div>
      ))}
    </div>
  )
}

export default AlphaNumericSlider
