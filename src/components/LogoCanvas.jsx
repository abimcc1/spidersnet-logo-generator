import { useState, useEffect, useRef } from 'react'
import { colorOptions } from '../colorOptions.jsx';

function LogoCanvas({ companyName, slogan, icon, fontFamily, fontColour, accentColour, logoFontSize, logoFontSpacing, divRef }) {

  function WordWrapper({ text }) {
    // Split the text into words and wrap each word in a span
    const wrappedWords = text.split(' ').map((word, index) => (
      <span key={index}>{word} </span>
    ));
    return <div>{wrappedWords}</div>;
  }


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



  const [base64Icon, setBase64Icon] = useState(null);  // State to store the base64 string of the icon

  // Convert the image URL to base64
  const convertToBase64 = (url) => {
    const img = new Image();
    img.src = url;
    img.crossOrigin = 'Anonymous'; // Make sure the image is accessible (CORS issue)
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      setBase64Icon(canvas.toDataURL());  // Set the base64 string to state
    };
  };

  useEffect(() => {
    if (icon.url) {
      convertToBase64(icon.url);  // Convert image URL to base64 on load
    }
  }, [icon.url]);

    const dynamicIconStyle = {
      ...(
        accentColour !== "default" && {
          backgroundColor: accentStyle === "solid" ? accentColour : "transparent", 
          backgroundImage: accentStyle === "solid" ? "none" : accentColour, 
        }
      ),
      maskImage: base64Icon ? `url(${base64Icon})` : 'none',  // Apply the base64 image as maskImage
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

              {/* <svg width="400" height="300" className={icon.class} id={icon.class} xmlns="http://www.w3.org/2000/svg" style={{border: '1px solid black'}}>

                 <image 
                  href={icon.url}
                  x="20" 
                  y={(300 - icon.iconHeight) / 2}
                  width={icon.iconWidth} 
                  height={icon.iconHeight} 
                /> 


                <svg 
                  x="0" 
                  y="0" 
                  width="100%"      
                  height="100%"     
                  viewBox="0 0 400 300" 
                  dominant-baseline="middle" 
                  text-anchor="middle"
                  // dangerouslySetInnerHTML={{ __html: icon.svg }}
                  href={icon.url}
                />


                <text 
                  x="70" 
                  y="150" 
                  fontSize="24" 
                  fill="black"
                  className="company-name"
                  // textAnchor="middle" 
                  dominantBaseline="middle" 
                >
               {companyName}
                </text>
              </svg> */}


                
                 <div className={icon.class} ref={divRef}>
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