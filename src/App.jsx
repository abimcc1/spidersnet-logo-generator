import { useState, useEffect } from 'react'
import './App.css'
import CompanyNameInput from "./components/CompanyNameInput.jsx";
import LogoBlock from "./components/LogoBlock.jsx";
import FontDropdown from "./components/FontDropdown.jsx";
import ColourPicker from "./components/ColourPicker.jsx";
import { fontOptions } from './fontOptions.jsx';

function App() {

  const [companyName, setCompanyName] = useState('Spidersnet Car Sales');
  const updateCompanyName = (newName) => {
    setCompanyName(newName);
  };

  const [logoFont, setLogoFont] = useState(1); 
  const [selectedFont, setSelectedFont] = useState(1); 
  const updateLogoFont = (newFont) => {
    setLogoFont(newFont);
  };
  const styleTag = document.createElement('style');
  styleTag.innerHTML = selectedFont.import;
  document.head.appendChild(styleTag);

  useEffect(() => {
    // Find the selected font object based on logoFont ID
    setSelectedFont(fontOptions.find(font => font.id === (parseInt(logoFont, 10))));
  
    const styleTag = document.createElement('style');
    styleTag.innerHTML = selectedFont.import;
    document.head.appendChild(styleTag);
      // Cleanup: Remove the style tag when the font changes or component unmounts
      return () => {
        document.head.removeChild(styleTag);
      };
  
  }, [logoFont]);  // Dependency array ensures this runs whenever logoFont changes


  const [fontColour, setFontColour] = useState("#000000"); 
  const updateFontColour = (newColour) => {
    setFontColour(newColour);
  };


  return (
    <>
      <div>

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


        <LogoBlock 
          companyName={companyName} 
          fontFamily={selectedFont?.fontfamily}
          fontColour={fontColour}
        />


      </div>
    </>
  )
}

export default App
