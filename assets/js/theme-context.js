import React from 'react'

export const themes = {

  aqua: {
    color: "#96F2DC"
  },
  pink: {
    color: "#FFBCD7"
  },
  blue : {
    color: "#CEF2FF"
  },
  red: {
    color: "#FF8080"
  },
  yellow: {
    color: "#FFF3B1"
  },
  green: {
    color: "#D8FACC"
  }
}

export const ThemeContext = React.createContext({
  theme: {},
  changeTheme: () => {}
})