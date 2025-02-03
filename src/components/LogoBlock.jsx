import { useState } from 'react'

function LogoBlock({ companyName, slogan, icon, setSelectedLogo, navigateTo }) {

  function WordWrapper({ text }) {
    // Split the text into words and wrap each word in a span
    const wrappedWords = text.split(' ').map((word, index) => (
      <span key={index}>{word} </span>
    ));
    return <div>{wrappedWords}</div>;
  }

  const handleLogoClick = (id) => {
    setSelectedLogo(id);
    navigateTo('screen4');
  };

  const IconStyle = {
    maskImage: `url(${icon.url})`,
  }

    return (
      <> 



            <div className="logo-block" key={icon.id} onClick={() => handleLogoClick(icon.id)}>
              <div className="logo-block-inner">
                <div className={icon.class}>
                    {icon.url && <div id="iconWrapper" className="icon-wrapper" style={IconStyle}><img id="maskImage" src={icon.url} /></div>}
                    <div className="company-name"><WordWrapper text={companyName} /></div>
                    {icon.slogan && <div className="slogan">{slogan}</div>}
              </div>
              </div>
            </div>
          



      </>
    )
  
  }

  export default LogoBlock

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