import React from 'react'

export const themes = {
  white: {
    color: "#FFFFFF"
  },
  yellow: {
    name: "yellow",
    color: "#FFF3B1",
    title: "urban room",
    subtitle: false,
    url: "/scene/2",
    videoName: "video_1.mp4",
    illusName: "IllusUrbanRoom.svg",
    illusNameDesktop: "IllusMapUrban.svg",
    styleDesktop: {
      top: 0,
      left: 0
    }
  },
  green: {
    name: "green",
    color: "#D8FACC",
    title: "beach room",
    subtitle: false,
    url: "/scene/3",
    videoName: "video_3.mp4",
    illusName: "IllusBeachRoom.svg",
    illusNameDesktop: "IllusMapBeach.svg",
    styleDesktop: {
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 0
    }
  },
  red: {
    name: "red",
    color: "#FF8080",
    title: "remix room",
    subtitle: false,
    url: "/scene/1",
    videoName: "video_2.mp4",
    illusName: "IllusRemixRoom.svg",
    illusNameDesktop: "IllusMapRemix.svg",
    styleDesktop: {
      top: 0,
      right: 0
    }
  },
  pink: {
    name: "pink",
    color: "#FFBCD7",
    title: "str'eat food",
    subtitle: "by Blini",
    url: "/food",
    illusName: "IllusFoodRoom.svg",
    illusNameDesktop: "IllusMapFood.svg",
    styleDesktop: {
      bottom: 0,
      left: 0
    }
  },
  blue : {
    name: "blue",
    color: "#CEF2FF",
    title: "jeu concours",
    subtitle: false,
    url: "/game",
    illusName: "IllusGameRoom.svg",
    illusNameDesktop: "IllusMapGame.svg",
    styleDesktop: {
      bottom: 0,
      right: 0
    }
  }
}


export const ThemeContext = React.createContext({
  theme: {},
  changeTheme: () => {}
})