import { useState, useEffect, useRef } from 'react';

function LogoBlock({ companyName, slogan, icon, setSelectedLogo, navigateTo }) {

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

  // Word wrapper component for company name
  function WordWrapper({ text }) {
    const wrappedWords = text.split(' ').map((word, index) => (
      <span key={index}>{word} </span>
    ));
    return <div>{wrappedWords}</div>;
  }

  // Function to handle logo click and navigate to the next screen
  const handleLogoClick = (id) => {
    setSelectedLogo(id);
    navigateTo('screen4');
  };

  const IconStyle = {
    maskImage: `url(${icon.url})`,
  };

  return (
    <>
      <div className="logo-block" ref={logoBlockRef} key={icon.id} onClick={() => handleLogoClick(icon.id)}>
        <div className="logo-block-inner-wrapper">
          <div className="logo-block-inner">
            <div className={`style-${icon.id}`} ref={logoInnerRef} style={{ transform: `scale(${scale})` }}>
              {icon.url && <div id="iconWrapper" className="icon-wrapper" style={IconStyle}><img id="maskImage" src={icon.url} /></div>}
              <div className="title-wrap">
                <div className="company-name-border">
                  <div className="company-name-wrapper">
                    <div className="company-name"><WordWrapper text={companyName} /></div>
                  </div>
                </div>
                {icon.slogan && <div className="slogan">{slogan}</div>}
              </div>
            </div>

            {icon.note && <div className="logo-block-note"><img src="/tip.svg" />{icon.note}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoBlock;
