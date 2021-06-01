import React from 'react'

export const themes = {

  aqua: {
    color: "#96F2DC"
  },
  pink: {
    name: "pink",
    color: "#FFBCD7",
    title: "La {'\n'} str'eat {'\n'} food",
    url: "/food"
  },
  blue : {
    name: "blue",
    color: "#CEF2FF",
    title: "Le blini game",
    url: "/game"
  },
  red: {
    name: "red",
    color: "#FF8080",
    title: "La remix room",
    url: "/scene/1"
  },
  yellow: {
    name: "yellow",
    color: "#FFF3B1",
    title: "La urban room",
    url: "/scene/2"
  },
  green: {
    name: "green",
    color: "#D8FACC",
    title: "La chill room",
    url: "/scene/3"
  }
}

export const ThemeContext = React.createContext({
  theme: {},
  changeTheme: () => {}
})