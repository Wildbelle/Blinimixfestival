import React, { useState } from 'react';
import Theme from './components/Theme';
import { ThemeContext, themes } from './theme-context';
import { adform } from 'react-vue-adform';

const params = {
  pm: 2377172,
  divider: encodeURIComponent('|'),
  pagename: encodeURIComponent('LP Blinimix Festival')
};

adform.initialize(params);

function App() {

  const [currentTheme, setCurrentTheme] = useState(themes['white'])

  const changeTheme = (colorName) => {
    setCurrentTheme(themes[colorName])
  }

  const contextValue = {
    theme: currentTheme,
    changeTheme
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <Theme />
    </ThemeContext.Provider>
  )
}

export default App;