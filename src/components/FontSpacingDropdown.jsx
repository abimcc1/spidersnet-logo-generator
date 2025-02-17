import { useState } from 'react'

function FontSpacingDropdown({ logoFontSpacing, updateLogoFontSpacing, defaultFontSpacing }) {

  const handleChange = (e) => {
    updateLogoFontSpacing(e.target.value);
  };

    return (
      <> 
      <input
        type="number"
        id="fontSpacing"
        name="fontSpacing"
        value={logoFontSpacing || defaultFontSpacing}
        onChange={handleChange}
        min="0"
        max="20"
        step="0.5"
         />
      </>
    )
  
  }

  export default FontSpacingDropdown