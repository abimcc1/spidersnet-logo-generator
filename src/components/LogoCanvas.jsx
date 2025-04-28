import { useState, useEffect, useRef } from 'react'
import { colorOptions } from '../colorOptions.jsx';

function LogoCanvas({ companyName, slogan, icon, fontFamily, fontColour, sloganColour, accentColour, logoFontSize, logoFontSpacing, divRef }) {

  const [scale, setScale] = useState(1); // State to control the scaling
  const logoBlockRef = useRef(null); // Ref for the logo-block element
  const logoInnerRef = useRef(null); // Ref for the logo-block element

  // Function to calculate the scaling factor based on available width
  const calculateScale = () => {
    const logoBlockWidth = logoBlockRef.current ? logoBlockRef.current.offsetWidth - 40 : 0;
    const logoInnerWidth = logoInnerRef.current ? logoInnerRef.current.offsetWidth : 0;

    // If the inner logo content exceeds the outer container width, scale it down
    const newScale = logoBlockWidth < logoInnerWidth ? logoBlockWidth / logoInnerWidth : 1;
    setScale(newScale);
  };

  // Recalculate scale when the component mounts or the window resizes
  useEffect(() => {
    calculateScale();
    window.addEventListener('resize', calculateScale);

    return () => {
      window.removeEventListener('resize', calculateScale);
    };
  }, []);


  function WordWrapper({ text }) {
    // Split the text into words and wrap each word in a span
    const wrappedWords = text.split(' ').map((word, index) => (
      <span key={index}>{word} </span>
    ));
    return <div>{wrappedWords}</div>;
  }


  const [accentStyle, setAccentStyle] = useState('solid');
  const [sloganStyle, setSloganStyle] = useState('solid');
  const [fontStyle, setFontStyle] = useState('solid');

  const getAccentColourStyle = (color) => {
    const colorMatch = colorOptions.find(item => item.code === color);
    return colorMatch ? colorMatch.style : 'solid';
  };
  useEffect(() => {
    const style = getAccentColourStyle(accentColour); 
    setAccentStyle(style); 
  }, [accentColour]);

  const getSloganColourStyle = (color) => {
    const colorMatch = colorOptions.find(item => item.code === color);
    return colorMatch ? colorMatch.style : 'solid';
  };
  useEffect(() => {
    const style = getSloganColourStyle(sloganColour); 
    setSloganStyle(style); 
  }, [sloganColour]);

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
      maskImage: icon.url ? `url(${icon.url})` : 'none',  // Apply the base64 image as maskImage
      maskRepeat: "no-repeat",
    }

    const dynamicAccentStyle = {
      ...(accentColour !== 'default' && accentStyle === 'solid' && { '--accent-color': accentColour }),
      ...(accentColour !== 'default' && accentStyle !== 'solid' && { '--accent-bg': accentColour }),
    }


    const dynamicSloganStyle  = {
      ...(
        sloganColour !== "default" && {
          backgroundColor: sloganStyle === "solid" ? sloganColour : "transparent", 
          backgroundImage: sloganStyle === "solid" ? "none" : sloganColour, 
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

    const combinedStyle = {
    ...dynamicAccentStyle,
    transform: `scale(${scale})`,
  };


    return (
      <> 

            <div className="logo-block" key={icon.id} ref={logoBlockRef}>
              <div className="logo-block-inner">
                 <div 
                 className={`style-${icon.id}`} 
                 ref={logoInnerRef} 
                 style={ combinedStyle }
                 >
                    {icon.url && <div id="iconWrapper" className="icon-wrapper" style={dynamicIconStyle}><img id="maskImage" src={icon.url} /></div>}
                    <div className="title-wrap">
                    <div className="company-name-border" >
                    <div className="company-name-wrapper" >
                      <div className="company-name" style={dynamicFontStyle}>
                        <WordWrapper text={companyName} />
                        </div></div></div>
                      {icon.slogan && <div className="slogan" style={dynamicSloganStyle}>{slogan}</div>}
                    </div>
              </div> 
              {icon.note && <div className="logo-block-note"><img src="/tip.svg" />{icon.note}</div>}
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