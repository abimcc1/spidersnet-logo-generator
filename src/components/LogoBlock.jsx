import { useState } from 'react'

function LogoBlock({ companyName, fontFamily, fontColour }) {


    const dynamicStyle = {
        fontFamily: fontFamily,
        color: fontColour,
    }


    console.log(fontColour);
    return (
      <> 
     
        <div className="logo-block" style={dynamicStyle}>

                {companyName}
        </div>
      </>
    )
  
  }

  export default LogoBlock