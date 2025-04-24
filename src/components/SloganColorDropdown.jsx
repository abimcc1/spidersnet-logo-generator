import { useState } from 'react';
import { colorOptions } from '../colorOptions.jsx';

function SloganColorDropdown({ sloganColour, updateSloganColour }) {

  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility
  // const [selectedColor, setSelectedColor] = useState('#ff0000'); // Default color

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    updateSloganColour(e.target.dataset.code);
    setIsOpen(false);
  };
  
  const solidOptions = colorOptions.filter(item => item.style === 'solid');
  const gradientOptions = colorOptions.filter(item => item.style === 'gradient');
  
    return (
      <> 

            <div className="color-dropdown">
              <div onClick={toggleDropdown} className={`dropdown-toggle ${isOpen ? 'open' : ''}`}>
                  <div className="selected-color" style={{ background: sloganColour === "default" ? "transparent" : sloganColour }}></div>
              </div>

              {isOpen && (
                  <div className="dropdown-color-menu">

                    <div className="dropdown-color-options"> 
                      <h3>Solid</h3>
                      {solidOptions.map((item) => (
                          <div  className={`color-block ${item.code === sloganColour ? 'active' : ''}`} key={item.id} data-code={item.code} onClick={handleChange}  style={{ background: item.code }}>
                          </div>
                      ))}
                    </div>
                    <div className="dropdown-color-options"> 
                      <h3>Gradient</h3>
                      {gradientOptions.map((item) => (
                          <div  className={`color-block ${item.code === sloganColour ? 'active' : ''}`} key={item.code} data-code={item.code} onClick={handleChange}  style={{ background: item.code }}>
                          </div>
                      ))}
                    </div>

                  </div>
              )}

            </div>

      </>
    )
  
  }

  export default SloganColorDropdown