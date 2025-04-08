import { useState } from 'react'

function FontDropdown({ logoFont, updateLogoFont, fontOptions, defaultFont }) {

  const handleChange = (e) => {
    updateLogoFont(e.target.value);
  };
    return (
      <> 
        <select id="font" value={logoFont || defaultFont} onChange={handleChange}>
        {fontOptions.map((item) => (
          <option key={item.id} value={item.id} >
            {item.id} {item.id === defaultFont ? "(Default)" : ""}
          </option>
        ))}
      </select>
      </>
    )
  
  }

  export default FontDropdown