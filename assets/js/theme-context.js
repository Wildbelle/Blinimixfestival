import React from 'react'

export const themes = {
  white: {
    color: "#FFFFFF"
  },
  pink: {
    name: "pink",
    color: "#FFBCD7",
    typoColor: "#FFF",
    title: "str'eat food",
    url: "/food"
  },
  blue : {
    name: "blue",
    color: "#CEF2FF",
    typoColor: "#FFF",
    title: "blini game",
    url: "/game"
  },
  red: {
    name: "red",
    color: "#FF8080",
    typoColor: "#FFF",
    title: "remix room",
    url: "/scene/1",
    videoName: "video_2.mov"
  },
  yellow: {
    name: "yellow",
    color: "#FFF3B1",
    typoColor: "#FFF",
    title: "urban room",
    url: "/scene/2",
    videoName: "video_1.mp4"
  },
  green: {
    name: "green",
    color: "#D8FACC",
    typoColor: "#FFF",
    title: "beach room",
    url: "/scene/3",
    videoName: "video_3.mp4"
  }
}


export const ThemeContext = React.createContext({
  theme: {},
  changeTheme: () => {}
})