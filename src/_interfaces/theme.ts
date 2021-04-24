interface Colors {
  green: string,
  green_dark: string,
  green_light: string,

  heading: string,
  body_dark: string,
  body_light: string,

  background: string,
  shape: string,
  white: string,
  gray: string,

  blue: string,
  blue_light: string,

  red: string,
}

interface Fonts {
  heading: string,
  text: string,
  complement: string
}

export interface Theme {
  mode: string
  colors: Colors,
  fonts: Fonts
}