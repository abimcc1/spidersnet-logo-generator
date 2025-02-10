function Screen1({ navigateTo, currentScreen, completedSteps }) {
    return (
      <> 
        <div className="l-screen screen1">
            <div className="l-wrap">
                <img src="sn-icon.svg"></img>
                <div className="welcome">Welcome to</div>
                <div className="logo-wrap">
                    <img src="sn-logo.svg"></img>
                    <h1>Logo Generator</h1>
                </div>
                <a className="start-button" onClick={() => navigateTo('screen2')}>Let's Start</a>
            </div>
        </div>
      </>
    )
  }
  export default Screen1