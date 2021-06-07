import React from 'react'

export const themes = {

  white: {
    color: "#FFFFFF"
  },
  pink: {
    name: "pink",
    color: "#FFBCD7",
    title: "str'eat food",
    url: "/food"
  },
  blue : {
    name: "blue",
    color: "#CEF2FF",
    title: "blini game",
    url: "/game"
  },
  red: {
    name: "red",
    color: "#FF8080",
    title: "remix room",
    url: "/scene/1"
  },
  yellow: {
    name: "yellow",
    color: "#FFF3B1",
    title: "urban room",
    url: "/scene/2"
  },
  green: {
    name: "green",
    color: "#D8FACC",
    title: "chill room",
    url: "/scene/3"
  }
}

export const ThemeContext = React.createContext({
  theme: {},
  changeTheme: () => {}
})