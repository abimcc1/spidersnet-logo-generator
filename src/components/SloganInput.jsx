import { useState } from 'react'

function SloganInput({ slogan, updateSlogan }) {
  
    const handleChange = (e) => {
        updateSlogan(e.target.value);
      };
  
    return (
      <> 
          <input
            onChange={handleChange}
            value={slogan}
            placeholder="Slogan (Optional)"
          />
      </>
    )
  
  }

  export default SloganInput