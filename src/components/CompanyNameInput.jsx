import { useState } from 'react'

function CompanyNameInput({ companyName, updateCompanyName }) {
  
    const handleChange = (e) => {
        updateCompanyName(e.target.value);
      };
  
    return (
      <> 
          <input
            onChange={handleChange}
            value={companyName}
            placeholder="Business Name"
          />
      </>
    )
  
  }

  export default CompanyNameInput