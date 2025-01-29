import { useState } from 'react'

function StepIndicator({ navigateTo, currentScreen }) {

    return (
      <> 
        <div className="step-indicator">
            <div className={currentScreen === 'screen2' ? "active" : ""} onClick={() => navigateTo('screen2')}>
                <div className="step">
                    <img src="step-icons/1.svg" />
                </div>
            </div>
            <div className={currentScreen === 'screen3' ? "active" : ""} onClick={() => navigateTo('screen3')}>
                <div className="step">
                    <img src="step-icons/2.svg" />
                </div>
            </div>
            <div className={currentScreen === 'screen4' ? "active" : ""} onClick={() => navigateTo('screen4')}>
                <div className="step">
                    <img src="step-icons/3.svg" />
                </div>
            </div>
            <div className={currentScreen === 'screen5' ? "active" : ""} onClick={() => navigateTo('screen5')}>
                <div className="step">
                    <img src="step-icons/4.svg" />
                </div>
            </div>
        </div>
      </>
    )
  
  }

  export default StepIndicator