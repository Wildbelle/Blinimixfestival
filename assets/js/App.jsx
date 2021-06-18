import React, { useEffect, useState } from 'react';
import Theme from './components/Theme';
import { ThemeContext, themes } from './theme-context';
import ReactCookieFirst from "react-cookiefirst";
import { adform } from 'react-vue-adform';
import Cookies from 'js-cookie';


function App() {
  const params = {
    pm: 2377172,
    divider: encodeURIComponent('|'),
    pagename: encodeURIComponent('LP Blinimix Festival')
  };

  const [currentTheme, setCurrentTheme] = useState(themes['white'])

  const changeTheme = (colorName) => {
    setCurrentTheme(themes[colorName])
  }

  const contextValue = {
    theme: currentTheme,
    changeTheme
  }

  useEffect(() => {
    const consent = Cookies.get('cookiefirst-consent')
    if(consent && JSON.parse(consent).advertising) {
      adform.initialize(params);
    }
  }, [])

  return (
    <ThemeContext.Provider value={contextValue}>
      <Theme />
      <ReactCookieFirst apiKey="401bb93e-5265-46d5-8650-477f878d1211" />
    </ThemeContext.Provider>
  )
}

export default App;