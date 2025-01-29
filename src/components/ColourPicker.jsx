import { useState } from 'react'

function ColourPicker({ fontColour, updateFontColour }) {

  const handleChange = (e) => {
    updateFontColour(e.target.value);
  };
  
    return (
      <> 
          <input
            onChange={handleChange}
            value={fontColour}
            placeholder="Text Colour"
          />
      </>
    )
  
  }

  export default ColourPicker