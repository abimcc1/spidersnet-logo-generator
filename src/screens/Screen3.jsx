import { useState, useEffect } from 'react'
import Header from "../components/Header.jsx";
import StepIndicator from "../components/StepIndicator.jsx";
import LogoBlock from "../components/LogoBlock.jsx";
import { iconOptions } from '../iconOptions.jsx';


function Screen3({ navigateTo, currentScreen, completedSteps, companyName, updateCompanyName, slogan, updateSlogan, setSelectedLogo }) {

  // Use useEffect to update companyName only once
  useEffect(() => {
    if (companyName === "") {
      updateCompanyName("Spidersnet Motors");
    }
  }, [companyName, updateCompanyName]); // Only run if companyName is empty

    // Use useEffect to update companyName only once
    useEffect(() => {
      if (slogan === "") {
        updateSlogan("Quality Used Cars");
      }
    }, [slogan, updateSlogan]); // Only run if companyName is empty

    // State to store selected category (default to "automotive")
    const [selectedCategory, setSelectedCategory] = useState("automotive");
    // Function to handle tab change
    const handleTabClick = (category) => {
      setSelectedCategory(category);
    };
    // Filter icons by selected category
    const filteredIcons = iconOptions.filter(icon => icon.category === selectedCategory);
    // Get unique categories from iconOptions for tabs
    const categories = [...new Set(iconOptions.map(icon => icon.category))];


    return (
      <> 
        <Header />
        <div className="l-screen screen3">
            <div className="l-wrap">
            <a className="back-button" onClick={() => navigateTo('screen2')}><img src="arrow-left.svg" /></a>
              <div className="l-title-area">

                  <StepIndicator 
                    navigateTo={navigateTo}
                    currentScreen={currentScreen}
                    completedSteps={completedSteps} 
                  />

                  <h2>Pick the logo you like</h2>
                  <p>You can further customize the logo you like and change the colour and font</p>
              </div>

              <div className="category-tabs">
                {categories.map((category) => (
                  <a
                    key={category}
                    className={`tab ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleTabClick(category)}
                  >
                    {category}
                  </a>
                ))}
              </div>

              <div className="logo-grid">

              {filteredIcons.map((icon) => (
                <LogoBlock 
                  key={icon.id}
                  companyName={companyName} 
                  slogan={slogan} 
                  icon={icon}
                  setSelectedLogo={setSelectedLogo}
                  navigateTo={navigateTo}
                />
              ))}
              </div>

                
            </div>
        </div>
      </>
    )
  }
  export default Screen3