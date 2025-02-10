import { useState, useEffect, useRef } from 'react'
import Header from "../components/Header.jsx";
import StepIndicator from "../components/StepIndicator.jsx";
import LogoCanvas from "../components/LogoCanvas.jsx";
import { iconOptions } from '../iconOptions.jsx';


function Screen5({ navigateTo, currentScreen, completedSteps, companyName, slogan, selectedLogo, logoFont, selectedFont, fontColour, accentColour, logoFontSize, logoFontSpacing }) {
  const icon = iconOptions.find(item => item.id === selectedLogo);


    return (
      <> 
        <Header />
        <div className="l-screen screen5">
            <div className="l-wrap">
            <a className="back-button" onClick={() => navigateTo('screen4')}><img src="arrow-left.svg" /></a>
            <a className="next-button text" >Ready!</a>
              <div className="l-title-area">

                  <StepIndicator 
                    navigateTo={navigateTo}
                    currentScreen={currentScreen}
                    completedSteps={completedSteps} 
                  />

                  <h2>Congratulations! You have a logo</h2>
                  <p>If you are happy with the result click on <strong>Ready!</strong> We will send you the logo so <br />that you can start using it</p>
              </div>

              <div className="l-canvas">
                <LogoCanvas 
                  companyName={companyName} 
                  slogan={slogan} 
                  icon={icon}
                  navigateTo={navigateTo}
                  fontFamily={selectedFont?.fontfamily}
                  fontColour={fontColour}
                  accentColour={accentColour}
                  logoFontSize={logoFontSize}
                  logoFontSpacing={logoFontSpacing}
                />
                
            </div>



                
            </div>
        </div>
      </>
    )
  }
  export default Screen5