import React from 'react'

export const themes = {
  blue : {
    color: "#CEF2FF"
  },
  pink: {
    color: "#FFBCD7"
  },
  red: {
    color: "#FF8080"
  },
  yellow: {
    color: "#FFF3B1"
  },
  green: {
    color: "#D8FACC"
  },
  aqua: {
    color: "#96F2DC"
  }
}

export const ThemeContext = React.createContext({
  theme: {},
  changeTheme: () => {}
})