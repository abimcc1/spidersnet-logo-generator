import { useState } from 'react'

function LogoBlock({ companyName, fontFamily, fontColour, iconOptions }) {


    const dynamicStyle = {
        fontFamily: fontFamily,
        color: fontColour,
    }



    return (
      <> 
     
     {iconOptions.map((item) => (

            <div className="logo-block" key={item.id} style={dynamicStyle}>
              <div className={item.style}>
             <img src={item.url} />
            {companyName}
            </div>
            </div>
          
    ))}


      </>
    )
  
  }

  export default LogoBlock