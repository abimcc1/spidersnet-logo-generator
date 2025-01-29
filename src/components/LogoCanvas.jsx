import { useState } from 'react'

function LogoCanvas({ companyName, slogan, icon, setSelectedLogo, navigateTo, fontFamily, fontColour }) {

  function WordWrapper({ text }) {
    // Split the text into words and wrap each word in a span
    const wrappedWords = text.split(' ').map((word, index) => (
      <span key={index}>{word} </span>
    ));
    return <div>{wrappedWords}</div>;
  }


      const dynamicStyle = {
        fontFamily: fontFamily,
        color: fontColour,
    }


    return (
      <> 



            <div className="logo-block" key={icon.id}>
              <div className="logo-block-inner">
                <div className={icon.class}>
                    {icon.url && <img src={icon.url} />}
                    <div className="company-name" style={dynamicStyle}><WordWrapper text={companyName} /></div>
                    {icon.slogan && <div className="slogan">{slogan}</div>}
              </div>
              </div>
            </div>
          



      </>
    )
  
  }

  export default LogoCanvas

//   import { useState } from 'react'

// function LogoBlock({ companyName, fontFamily, fontColour, iconOptions }) {


//     const dynamicStyle = {
//         fontFamily: fontFamily,
//         color: fontColour,
//     }



//     return (
//       <> 
     
//      {iconOptions.map((item) => (

//             <div className="logo-block" key={item.id} style={dynamicStyle}>
//               <div className={item.style}>
//              <img src={item.url} />
//             {companyName}
//             </div>
//             </div>
          
//     ))}


//       </>
//     )
  
//   }

//   export default LogoBlock