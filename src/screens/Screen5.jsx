import { useState, useEffect, useRef } from 'react'
import Header from "../components/Header.jsx";
import StepIndicator from "../components/StepIndicator.jsx";
import LogoCanvas from "../components/LogoCanvas.jsx";
import { iconOptions } from '../iconOptions.jsx';
import TestLogoCanvas from "../components/TestLogoCanvas.jsx";
// import html2canvas from "html2canvas";
// import domtoimage from 'dom-to-image';

import SubmitForm from "../components/SubmitForm.jsx";

function Screen5({ navigateTo, currentScreen, completedSteps, companyName, slogan, selectedLogo, logoFont, selectedFont, fontColour, accentColour, logoFontSize, logoFontSpacing }) {
  const icon = iconOptions.find(item => item.id === selectedLogo);

  // const captureRef = useRef(null);

  // const handleDownload = () => {
  //   if (captureRef.current) {
  //     // Capture the content inside the div using dom-to-image
  //     domtoimage.toPng(captureRef.current)
  //       .then((dataUrl) => {
  //         // Create a temporary link to download the image
  //         const link = document.createElement('a');
  //         link.href = dataUrl;
  //         link.download = 'logo.png'; // Set the name of the downloaded file
  //         link.click(); // Simulate a click to start the download
  //       })
  //       .catch((error) => {
  //         console.error('Error capturing the logo:', error);
  //       });
  //   }
  // };

    return (
      <> 
      <div className="l-flex">
        <Header />
        <div className="l-screen screen5">
            <div className="l-wrap">
            <a className="back-button" onClick={() => navigateTo('screen4')}><img src="arrow-left.svg" /></a>
            {/* <a className="next-button text" onClick={handleDownload} >Ready!</a> */}
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

            <SubmitForm />

                
            </div>
        </div>
        </div>
      </>
    )
  }
  export default Screen5