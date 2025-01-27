import { useState } from 'react'

function CompanyNameInput({ companyName, updateCompanyName }) {
  
    const handleChange = (e) => {
        updateCompanyName(e.target.value);
      };
  
    return (
      <> 
   
          <label>Enter company name: </label>
          <input
            onChange={handleChange}
            value={companyName}
            placeholder="Company Name"
          />

      </>
    )
  
  }

  export default CompanyNameInput