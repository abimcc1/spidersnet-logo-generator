import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import './App.css'
import Screen1 from "./screens/Screen1.jsx";
import Screen2 from "./screens/Screen2.jsx";
import Screen3 from "./screens/Screen3.jsx";
import Screen4 from "./screens/Screen4.jsx";
import Screen5 from "./screens/Screen5.jsx";
import Screen6 from "./screens/Screen6.jsx";

import FontInjector from "./components/FontInjector.jsx";

import { fontOptions } from './fontOptions.jsx';


function App() {


  const initialScreen = localStorage.getItem('currentScreen') || 'screen1';
  const [currentScreen, setCurrentScreen] = useState('screen1');
  const [completedSteps, setCompletedSteps] = useState([]);
  // Update localStorage whenever currentScreen changes
  useEffect(() => {
    localStorage.setItem('currentScreen', currentScreen);
  }, [currentScreen]);

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
    // When the user navigates to a step, mark it as completed
    if (!completedSteps.includes(screen)) {
      setCompletedSteps(prevSteps => [...prevSteps, screen]);
    }
  };

  // // Helper function to update the query string in the URL
  // const updateQueryString = (key, value) => {
  //   const queryString = new URLSearchParams(location.search);

  //   if (value) {
  //     queryString.set(key, value);
  //   } else {
  //     queryString.delete(key);  // Remove key if value is empty
  //   }

  //   navigate({
  //     pathname: location.pathname,
  //     search: queryString.toString(),
  //   });
  // };


  const [companyName, setCompanyName] = useState('');
  const updateCompanyName = (newName) => {
    setCompanyName(newName);
    // updateQueryString('companyName', newName);
  };


  const [slogan, setSlogan] = useState('');
  const updateSlogan = (newSlogan) => {
    setSlogan(newSlogan);
  };

  const [logoFont, setLogoFont] = useState(); 
  const [selectedFont, setSelectedFont] = useState(); 
  const updateLogoFont = (newFont) => {
    setLogoFont(newFont);
  };
  useEffect(() => {
    // Find the selected font object based on logoFont ID
    setSelectedFont(fontOptions.find(font => font.id === logoFont));
  }, [logoFont]);  // Dependency array ensures this runs whenever logoFont changes

  // const [logoIcon, setLogoIcon] = useState(1);
  // const updateLogoIcon = (newIcon) => {
  //   setLogoIcon(newIcon);
  // };

  const [fontColour, setFontColour] = useState("default"); 
  const updateFontColour = (newColour) => {
    setFontColour(newColour);
  };

  const [sloganColour, setSloganColour] = useState("default"); 
  const updateSloganColour = (newColour) => {
    setSloganColour(newColour);
  };

  const [accentColour, setAccentColour] = useState("default"); 
  const updateAccentColour = (newColour) => {
    setAccentColour(newColour);
  };

  const [logoFontSize, setLogoFontSize] = useState();
  const updateLogoFontSize = (newSize) => {
    setLogoFontSize(newSize);
  };

  const [logoFontSpacing, setLogoFontSpacing] = useState();
  const updateLogoFontSpacing = (newSpacing) => {
    setLogoFontSpacing(newSpacing);
  };


  const [selectedLogo, setSelectedLogo] = useState(1);



  
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if(params.get('selectedLogo')){
      setCurrentScreen('screen5');
      setSelectedLogo(params.get('selectedLogo'));
    }
    if(params.get('companyName')){
      setCompanyName(params.get('companyName'));
    }
    if(params.get('slogan')){
      setSlogan(params.get('slogan'));
    }
    if(params.get('selectedFont')){
      setSelectedFont({
        ...selectedFont,  // Preserve the existing properties in selectedFont (if any)
        fontfamily: params.get('selectedFont')  // Set the fontFamily property
      });
    }
    if(params.get('fontColour')){
      setFontColour(params.get('fontColour'));
    }
    if(params.get('accentColour')){
      setAccentColour(params.get('accentColour'));
    }
    if(params.get('logoFontSize')){
      setLogoFontSize(params.get('logoFontSize'));
    }
    if(params.get('logoFontSpacing')){
      setLogoFontSpacing(params.get('logoFontSpacing'));
    }

   
  }, [location.search]); // Runs whenever the location changes

  return (
    <>

      <FontInjector />

      {currentScreen === 'screen1' && <Screen1 
                                        navigateTo={navigateTo} 
                                        currentScreen={currentScreen}
                                        completedSteps={completedSteps}
                                      />}
      {currentScreen === 'screen2' && <Screen2 
                                      navigateTo={navigateTo} 
                                      currentScreen={currentScreen}
                                      completedSteps={completedSteps}
                                      companyName={companyName} 
                                      updateCompanyName={updateCompanyName} 
                                      slogan={slogan} 
                                      updateSlogan={updateSlogan} 
                                      />}
      {currentScreen === 'screen3' && <Screen3 
                                        navigateTo={navigateTo} 
                                        currentScreen={currentScreen}
                                        completedSteps={completedSteps}
                                        companyName={companyName} 
                                        updateCompanyName={updateCompanyName}
                                        slogan={slogan} 
                                        updateSlogan={updateSlogan} 
                                        setSelectedLogo={setSelectedLogo}
                                      />}

      {currentScreen === 'screen4' && <Screen4 
                                        navigateTo={navigateTo} 
                                        currentScreen={currentScreen}
                                        completedSteps={completedSteps}
                                        companyName={companyName} 
                                        updateCompanyName={updateCompanyName}
                                        slogan={slogan} 
                                        updateSlogan={updateSlogan} 
                                        selectedLogo={selectedLogo}
                                        logoFont={logoFont}
                                        updateLogoFont={updateLogoFont}
                                        selectedFont={selectedFont}
                                        fontColour={fontColour}
                                        updateFontColour={updateFontColour}
                                        sloganColour={sloganColour}
                                        updateSloganColour={updateSloganColour}
                                        accentColour={accentColour}
                                        updateAccentColour={updateAccentColour}
                                        logoFontSize={logoFontSize}
                                        updateLogoFontSize={updateLogoFontSize}
                                        logoFontSpacing={logoFontSpacing}
                                        updateLogoFontSpacing={updateLogoFontSpacing}
                                      />}

      {currentScreen === 'screen5' && <Screen5 
                                        navigateTo={navigateTo} 
                                        currentScreen={currentScreen}
                                        completedSteps={completedSteps}
                                        companyName={companyName} 
                                        slogan={slogan} 
                                        selectedLogo={selectedLogo}
                                        logoFont={logoFont}
                                        selectedFont={selectedFont}
                                        fontColour={fontColour}
                                        sloganColour={sloganColour}
                                        accentColour={accentColour}
                                        logoFontSize={logoFontSize}
                                        logoFontSpacing={logoFontSpacing}
                                      />}

      
      {currentScreen === 'screen6' && <Screen6 
                                        navigateTo={navigateTo} 
                                        currentScreen={currentScreen}
                                        completedSteps={completedSteps}
                                        companyName={companyName} 
                                      />}

      {/* <div>

      <div className="setup">
        <CompanyNameInput 
          companyName={companyName} 
          updateCompanyName={updateCompanyName} 
        />

    <br />

        <FontDropdown 
          logoFont={logoFont} 
          updateLogoFont={updateLogoFont} 
          fontOptions={fontOptions} 
        />

      <br />

        <ColourPicker 
          fontColour={fontColour} 
          updateFontColour={updateFontColour}
        />

    </div>

        <LogoBlock 
          companyName={companyName} 
          fontFamily={selectedFont?.fontfamily}
          fontColour={fontColour}
          iconOptions={iconOptions}
        />


      </div> */}
    </>
  )
}

export default App
