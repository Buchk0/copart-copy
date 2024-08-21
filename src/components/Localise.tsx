import React, { useEffect, useRef, useState } from 'react'


const Localise: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(false)
  const [language, setLanguage] = useState('English')
  const popupRef = useRef<HTMLDivElement>(null)

  const handleChange = (value: string) => {
    setLanguage(value)
    setShowPopUp(!showPopUp)
  }

useEffect(() => {
  const handleClick = (event: MouseEvent) => {
    if (popupRef.current && !event.composedPath().includes(popupRef.current)) {
      setShowPopUp(false)
    }
  };

  document.body.addEventListener('click', handleClick);

  return () => document.body.removeEventListener('click', handleClick)
}, [])

  return (
    <div ref={popupRef} className='localise'>
      <div onClick={() => setShowPopUp(!showPopUp)}  className="localise__label">
        <span className='localise__text'>{language}</span>
      <svg className='localise__drop_icon'
      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"></path> </g> </g>
      </svg>
      </div>
      {showPopUp && (
        <div className='localise__popup'>
          <div className="popup__triangle" />
          <h1 className="popup__title">Website Language</h1>
          <p className="popup__text">Members all over the world come to Copart because of our extensive inventory with more than 125,000 vehicles available for bidding each day we have something for everyone.</p>
          <div className="popup__language_block">
            <select onChange={(event) => handleChange(event.target.value)} value={language} name="languages" id="popup__select">
              <option value="English">English</option>
              <option value="Czech">Czech</option>
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

export default Localise
