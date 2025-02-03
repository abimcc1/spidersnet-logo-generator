import { useState, useEffect, useRef } from 'react';
import { colorOptions } from '../colorOptions.jsx';

function AccentColorDropdown({ accentColour, updateAccentColour }) {

  const [isOpen, setIsOpen] = useState(false); 
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    // Close the dropdown if user clicks outside
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      };
      // Add event listener for clicks outside the dropdown
      document.addEventListener('click', handleClickOutside);
      // Cleanup the event listener when the component is unmounted
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

  const handleChange = (e) => {
    updateAccentColour(e.target.dataset.code);
    setIsOpen(false);
  };


  const solidOptions = colorOptions.filter(item => item.style === 'solid');
  const gradientOptions = colorOptions.filter(item => item.style === 'gradient');
  
    return (
      <> 

            <div className="color-dropdown">
              <div onClick={toggleDropdown} className={`dropdown-toggle ${isOpen ? 'open' : ''}`}>
                  <div className="selected-color" style={{ background: accentColour === "default" ? "transparent" : accentColour }}></div>
              </div>

              {isOpen && (
                  <div className="dropdown-color-menu">

                    <div className="dropdown-color-options"> 
                      <h3>Solid</h3>
                      {solidOptions.map((item) => (
                          <div  className={`color-block ${item.code === accentColour ? 'active' : ''}`} key={item.id} data-code={item.code} onClick={handleChange}  style={{ background: item.code }}>
                          </div>
                      ))}
                    </div>
                    <div className="dropdown-color-options"> 
                      <h3>Gradient</h3>
                      {gradientOptions.map((item) => (
                          <div  className={`color-block ${item.code === accentColour ? 'active' : ''}`} key={item.code} data-code={item.code} onClick={handleChange}  style={{ background: item.code }}>
                          </div>
                      ))}
                    </div>

                  </div>
              )}

            </div>

      </>
    )
  
  }

  export default AccentColorDropdown