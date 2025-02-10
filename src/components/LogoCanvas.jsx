import { useState, useEffect, useRef } from 'react'
import { colorOptions } from '../colorOptions.jsx';

function LogoCanvas({ companyName, slogan, icon, fontFamily, fontColour, accentColour, logoFontSize, logoFontSpacing }) {

  function WordWrapper({ text }) {
    // Split the text into words and wrap each word in a span
    const wrappedWords = text.split(' ').map((word, index) => (
      <span key={index}>{word} </span>
    ));
    return <div>{wrappedWords}</div>;
  }

  // useEffect(() => {
  //   const convertImageToBase64 = (imageUrl) => {
  //     const img = new Image();
  //     img.crossOrigin = 'Anonymous'; // To avoid CORS issues with external images
  //     img.onload = () => {
  //       // Create a canvas element to draw the image
  //       const canvas = document.createElement('canvas');
  //       const ctx = canvas.getContext('2d');
  //       canvas.width = img.width;
  //       canvas.height = img.height;
  //       ctx.drawImage(img, 0, 0);
        
  //       // Get Base64 string
  //       const base64String = canvas.toDataURL('image/png'); // You can change the format to 'image/jpeg' if needed
  //       setBase64Image(base64String); // Set the Base64 string to state
  //     };
  //     img.src = imageUrl;
  //   };

  //   // Automatically convert an image URL to Base64 when the component mounts
  //   convertImageToBase64('https://via.placeholder.com/300');
  // }, []);

  const [accentStyle, setAccentStyle] = useState('solid');
  const [fontStyle, setFontStyle] = useState('solid');

  const getAccentColourStyle = (color) => {
    const colorMatch = colorOptions.find(item => item.code === color);
    return colorMatch ? colorMatch.style : 'solid';
  };
  useEffect(() => {
    const style = getAccentColourStyle(accentColour); 
    setAccentStyle(style); 
  }, [accentColour]);

  const getFontColourStyle = (color) => {
    const colorMatch = colorOptions.find(item => item.code === color);
    return colorMatch ? colorMatch.style : 'solid';
  };
  useEffect(() => {
    const style = getFontColourStyle(fontColour); 
    setFontStyle(style); 
  }, [fontColour]);


    const dynamicIconStyle = {
      ...(
        accentColour !== "default" && {
          backgroundColor: accentStyle === "solid" ? accentColour : "transparent", 
          backgroundImage: accentStyle === "solid" ? "none" : accentColour, 
        }
      ),
      maskImage: `url(${icon.url})`,
      maskRepeat: "no-repeat",
    }

    const dynamicSloganStyle  = {
      ...(
        accentColour !== "default" && {
          backgroundColor: accentStyle === "solid" ? accentColour : "transparent", 
          backgroundImage: accentStyle === "solid" ? "none" : accentColour, 
        }
      ),
      backgroundSize: '100%', 
      backgroundClip: 'text',
    }


    const dynamicFontStyle = {
      ...(
        fontColour !== "default" && {
          backgroundColor: fontStyle === "solid" ? fontColour : "transparent", 
          backgroundImage: fontStyle === "solid" ? "none" : fontColour, 
        }
      ),
      fontFamily: fontFamily,
      backgroundSize: '100%', 
      backgroundClip: 'text',
      fontSize: `${logoFontSize}px`,
      letterSpacing: `${logoFontSpacing}px`,
    }


    return (
      <> 

            <div className="logo-block" key={icon.id}>
              <div className="logo-block-inner">
                
                <div className={icon.class}>
                    {icon.url && <div id="iconWrapper" className="icon-wrapper" style={dynamicIconStyle}><img id="maskImage" src={icon.url} /></div>}
                    <div className="company-name" style={dynamicFontStyle}><WordWrapper text={companyName} /></div>
                    {icon.slogan && <div className="slogan" style={dynamicSloganStyle}>{slogan}</div>}
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