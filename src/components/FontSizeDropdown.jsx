import { useState } from 'react'

function FontSizeDropdown({ logoFontSize, updateLogoFontSize }) {


  const handleChange = (e) => {
    updateLogoFontSize(e.target.value);
  };

    return (
      <> 
      <input
        type="number"
        id="fontSize"
        name="fontSize"
        value={logoFontSize || ''}
        onChange={handleChange}
        min="1"
        max="100"
        step="1"
        placeholder="Default"
         />
      </>
    )
  
  }

  export default FontSizeDropdown