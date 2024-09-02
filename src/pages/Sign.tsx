import React from 'react'
import gif from '../assets/images/gif.gif'

const Sign: React.FC = () => {
  return (
    <div className="sign">
      <div className="sign__container">
        <div className="sign__block">
          <h1 className="sign__title">Account Sign In</h1>
          <div className="sign__inside">
            <div className="sign__field">
              <p className="sign__label">Email/User ID</p>
              <input type="text" className="sign__input sign__input--email" />
            </div>
            <div className="sign__field">
              <p className="sign__label">Password</p>
              <input type="password" className="sign__input sign__input--password" />
            </div>
            <div className="sign__options">
              <div className="sign__remember">
                <p className="sign__label sign__remember_label">Remember?</p>
                <input type="checkbox" className="sign__checkbox" />
              </div>
              <a href="/" className="sign__link sign__label">Forgot User ID/Password</a>
            </div>
          </div>
          <div className="sign__actions">
            <button className="sign__button">Sign Into Your Account</button>
          </div>
        </div>
        <div className="sign__gif_container">
          <img src={gif} alt="" className='sign__gif' />
        </div>
      </div>
    </div>
  )
}

export default Sign