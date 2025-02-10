import { useState } from 'react'

function StepIndicator({ navigateTo, currentScreen, completedSteps }) {

    const isStepCompleted = (step) => completedSteps.includes(step);

    return (
      <> 
        <div className="step-indicator">
            <div className={`step-item ${currentScreen === 'screen2' ? "active" : ""} ${isStepCompleted('screen2') ? "completed" : ""}`} onClick={() => navigateTo('screen2')}>
                <div className="step">
                    <img src="step-icons/1.svg" />
                </div>
            </div>
            <div className={`step-item ${currentScreen === 'screen3' ? "active" : ""} ${isStepCompleted('screen3') ? "completed" : ""}`} onClick={() => navigateTo('screen3')}>
                <div className="step">
                    <img src="step-icons/2.svg" />
                </div>
            </div>
            <div className={`step-item ${currentScreen === 'screen4' ? "active" : ""} ${isStepCompleted('screen4') ? "completed" : ""}`} onClick={() => navigateTo('screen4')}>
                <div className="step">
                    <img src="step-icons/3.svg" />
                </div>
            </div>
            <div className={`step-item ${currentScreen === 'screen5' ? "active" : ""} ${isStepCompleted('screen5') ? "completed" : ""}`} onClick={() => navigateTo('screen5')}>
                <div className="step">
                    <img src="step-icons/4.svg" />
                </div>
            </div>
        </div>
      </>
    )
  
  }

  export default StepIndicator