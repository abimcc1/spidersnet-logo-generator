import { useState } from 'react'

function FontDropdown({ logoFont, updateLogoFont, fontOptions }) {

  const handleChange = (e) => {
    updateLogoFont(e.target.value);
  };
  
    return (
      <> 
        <label>Choose font:</label>

        <select id="font" value={logoFont} onChange={handleChange}>
        {fontOptions.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      </>
    )
  
  }

  export default FontDropdown