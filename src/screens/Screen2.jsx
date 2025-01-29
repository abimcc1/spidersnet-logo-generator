import { useState } from 'react'
import Header from "../components/Header.jsx";
import CompanyNameInput from "../components/CompanyNameInput.jsx";
import SloganInput from "../components/SloganInput.jsx";
import StepIndicator from "../components/StepIndicator.jsx";

function Screen2({ navigateTo, currentScreen, companyName, updateCompanyName, slogan, updateSlogan }) {


    return (
      <> 
        <Header />
        <div className="l-screen screen2">
          <div className="l-wrap">
            <div className="l-title-area">

                <StepIndicator 
                  navigateTo={navigateTo}
                  currentScreen={currentScreen}
                />

                <h2>Enter your business name</h2>
                <p>The business name will show on the logo. You can add a slogan to further <br />explain your business.</p>
            </div>

            <div className="business-name-form-wrap">
              <div className="business-name-form">
                <CompanyNameInput 
                  companyName={companyName} 
                  updateCompanyName={updateCompanyName} 
                />

                <SloganInput 
                  slogan={slogan} 
                  updateSlogan={updateSlogan} 
                />

                <a className="button" onClick={() => navigateTo('screen3')}>Show Logos</a>

              </div>

              <div className="tip"><img src="tip.svg" /><strong>Tip:</strong> Logos look better with shorter company names. </div>
            </div>


          </div>
      </div>
      </>
    )
  
  }

  export default Screen2