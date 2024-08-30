import React from 'react'
const Registration: React.FC = () => {
  return (
    <div className="registration">
      <div className="registration__container">
        <h1 className="registration__title">Get Started</h1>
        <p className="registration__text"><b className='text--sign'>*</b>All are required</p>
        <b className="registration__section_title">Do you plan to bid as<b className='text--sign'>*</b>:</b>
        <div className="registration__inputs_section">
          <div className="registration__input_container business">
            <input type="checkbox" id='business__checkbox' />   
            <label htmlFor="business__checkbox" className='input__label'>
            <svg 
          className='business__svg'
          fill="#007bff"  
          version="1.1" 
          id="Layer_1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512" 
          stroke="#007bff">
            <g id="SVGRepo_bgCarrier" 
            stroke-width="0">
              </g>
              <g id="SVGRepo_tracerCarrier" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke="#CCCCCC" 
              stroke-width="7.168000000000001">
                </g>
                <g id="SVGRepo_iconCarrier"> 
                <g> 
                  <g> 
                    <path d="M476.294,126.453H348.813v-22.251c0-22.589-18.378-40.967-40.967-40.967H204.154c-22.589,0-40.967,18.378-40.967,40.967 v22.251H35.706C16.018,126.453,0,142.471,0,162.158v250.9c0,19.689,16.018,35.706,35.706,35.706h440.587 c19.689,0,35.706-16.018,35.706-35.706v-250.9C512,142.471,495.982,126.453,476.294,126.453z M183.586,104.202 c0-11.342,9.227-20.569,20.569-20.569h103.691c11.341,0,20.569,9.227,20.569,20.569v22.251H183.586V104.202z M491.602,413.059 c0,8.441-6.867,15.308-15.308,15.308H35.706c-8.441,0-15.308-6.866-15.308-15.308V216.248L176.992,292.2 c3.174,19.356,20.012,34.174,40.251,34.174h77.514c20.239,0,37.077-14.818,40.251-34.174l97.809-47.442 c5.068-2.458,7.183-8.559,4.725-13.627c-2.457-5.069-8.558-7.185-13.627-4.725l-91.205,44.238 c-5.974-15.128-20.729-25.863-37.953-25.863h-77.514c-17.224,0-31.98,10.736-37.953,25.863L20.398,193.577v-31.419 c0-8.44,6.867-15.307,15.308-15.307h440.587c8.44,0,15.308,6.866,15.308,15.307V413.059z M196.845,285.578 c0-11.248,9.151-20.398,20.398-20.398h77.514c11.248,0,20.398,9.151,20.398,20.398s-9.151,20.398-20.398,20.398h-77.514 C205.995,305.976,196.845,296.825,196.845,285.578z">
                      </path> 
                      </g> 
                      </g> 
                      <g>
                         <g>
                          <path d="M477.458,211.773c-2.457-5.07-8.559-7.183-13.627-4.727l-6.258,3.035c-5.069,2.458-7.184,8.56-4.727,13.627 c1.763,3.635,5.399,5.751,9.184,5.751c1.493,0,3.01-0.328,4.443-1.024l6.258-3.035C477.8,222.942,479.915,216.84,477.458,211.773z ">
                            </path> 
                            </g>
                             </g> 
                             </g>
                             </svg>
            <p className="input__text">Business</p>
            <p className="input__text_smaller">Holds business license(s)</p>
          
              </label>                                           
        </div>
          <div className="registration__input_container individual">
            <input type="checkbox" id='individual__checkbox' />
            <label htmlFor="individual__checkbox" className='input__label'><svg
          className='individual__svg'
           viewBox="0 0 24 24"
            fill="none"
             xmlns="http://www.w3.org/2000/svg"
              stroke="#007bff">
                <g id="SVGRepo_bgCarrier"
                 stroke-width="0"></g>
                 <g id="SVGRepo_tracerCarrier" 
                 stroke-linecap="round" 
                 stroke-linejoin="round"></g>
                 <g id="SVGRepo_iconCarrier"> 
                 <path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" 
                 stroke="#007bff" 
                 stroke-width="1.1" 
                 stroke-linecap="round" 
                 stroke-linejoin="round"></path> 
                 <path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" 
                 stroke="#007bff" 
                 stroke-width="1.1" 
                 stroke-linecap="round" 
                 stroke-linejoin="round"></path> </g>
                 </svg>
            <p className="input__text">Individual</p>
            <p className="input__text_smaller">No business license</p>
          </label>
          </div>
        </div>
        <b className="registration__section_title">Preferred Full Name<b className='text--sign'>*</b></b>
        <div className="registration__name">
        <input type="text" className="registration__name_area first" />
        <input type="text" className="registration__name_area last" />
        </div>
        <b className="registration__section_title">Email<b className='text--sign'>*</b></b>
        <div className="registration__email">
        <input type="text" className="registration__email_area" />
        </div>
        <div className="registration___checkbox">
          <input type="text" className="registration__checkbox_input" />
          <p className="registration__text">By clicking this box, I agree that I am at least 18 years of age and that I have read and agreed to the Copart Member Terms and Conditions, Website Terms of Service, and . *</p>
        </div>
        <div className="registration__finish">
          <button className="registration__finish_button">Create Copart Accoount</button>
        </div>
      </div>
    </div>
  )
}

export default Registration
