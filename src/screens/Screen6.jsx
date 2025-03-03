import { useState, useEffect } from 'react'
import Header from "../components/Header.jsx";
import StepIndicator from "../components/StepIndicator.jsx";
import LogoCanvas from "../components/LogoCanvas.jsx";
import { iconOptions } from '../iconOptions.jsx';
import CompanyNameInput from "../components/CompanyNameInput.jsx";
import FontDropdown from "../components/FontDropdown.jsx";
import { fontOptions } from '../fontOptions.jsx';
import FontColorDropdown from "../components/FontColorDropdown.jsx";
import AccentColorDropdown from "../components/AccentColorDropdown.jsx";
import FontSizeDropdown from "../components/FontSizeDropdown.jsx";
import FontSpacingDropdown from "../components/FontSpacingDropdown.jsx";


function Screen4({ navigateTo, currentScreen, completedSteps, companyName }) {


    return (
      <> 
      <Header />
        <div className="l-screen screen6">
            <div className="l-wrap">

              <div className="l-title-area">

                  <h2>Thank you {companyName}</h2>
                  <p>Your logo has been submitted</p>
                  <a className="button" href="https://spidersnet.co.uk/" target="_blank">Visit Our Website</a>
              </div>

        </div>
        </div>
      </>
    )
  }
  export default Screen4