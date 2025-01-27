import { useState } from 'react'

function ColourPicker({ fontColour, updateFontColour }) {

  const handleChange = (e) => {
    updateFontColour(e.target.value);
  };
  
    return (
      <> 
        <label>Choose text colour: </label>
          <input
            onChange={handleChange}
            value={fontColour}
            placeholder="Text Colour"
          />
      </>
    )
  
  }

  export default ColourPicker