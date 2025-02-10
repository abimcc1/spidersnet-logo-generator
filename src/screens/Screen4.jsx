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


function Screen4({ navigateTo, currentScreen, completedSteps, companyName, updateCompanyName, slogan, updateSlogan, selectedLogo, logoFont, updateLogoFont, selectedFont, fontColour, updateFontColour, accentColour, updateAccentColour, logoFontSize, updateLogoFontSize, logoFontSpacing, updateLogoFontSpacing }) {

    const icon = iconOptions.find(item => item.id === selectedLogo);

    return (
      <> 
      <Header />
        <div className="l-screen screen4">
            <div className="l-wrap">
              <a className="back-button" onClick={() => navigateTo('screen3')}><img src="arrow-left.svg" /></a>
              <a className="next-button" onClick={() => navigateTo('screen5')}><img src="arrow-right-white.svg" /></a>
              <div className="l-title-area">

                  <StepIndicator 
                    navigateTo={navigateTo}
                    currentScreen={currentScreen}
                    completedSteps={completedSteps} 
                  />

                  <h2>Customize your logo</h2>
                  <p>Choose the colours and font that better represent your brand</p>
              </div>

              <div className="l-settings__wrap">
                <div className="l-settings">
                    <div className="settings-field">
                        <label>Change Business Name</label>
                        <CompanyNameInput 
                        companyName={companyName} 
                        updateCompanyName={updateCompanyName} 
                        />
                    </div>

                    <div className="settings-field">
                        <label>Change Font</label>
                        <FontDropdown 
                        logoFont={logoFont} 
                        updateLogoFont={updateLogoFont} 
                        fontOptions={fontOptions} 
                        />
                    </div>

                    <div className="settings-field">
                        <label>Font Colour</label>
                        <FontColorDropdown
                            fontColour={fontColour} 
                            updateFontColour={updateFontColour}
                        />
                    </div>

                    <div className="settings-field">
                        <label>Accent Colour</label>
                        <AccentColorDropdown
                            accentColour={accentColour} 
                            updateAccentColour={updateAccentColour}
                        />
                    </div>

                    <div className="settings-field half left">
                        <label>Font Size (px)</label>
                        <FontSizeDropdown
                            logoFontSize={logoFontSize} 
                            updateLogoFontSize={updateLogoFontSize}
                        />
                    </div>

                    <div className="settings-field half right">
                        <label>Font Spacing (px)</label>
                        <FontSpacingDropdown
                            logoFontSpacing={logoFontSpacing} 
                            updateLogoFontSpacing={updateLogoFontSpacing}
                        />
                    </div>

                </div>

                <div className="l-canvas">
                    <LogoCanvas 
                    key={icon.id}
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
        </div>
      </>
    )
  }
  export default Screen4