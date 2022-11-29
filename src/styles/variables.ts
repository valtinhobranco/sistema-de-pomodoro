type Colors = {
  textSizes: {
    title: string

    textXl: string
    textL: string
    textM: string
    textS: string
    textXs: string
  }
  fonts: {
    primaryFont: string
    secondaryFont: string
  }
  fontWeight: {
    regular: string
    bold: string
  }
  transitions: string
  borderRadios: string
}

export default <Colors>{
  textSizes: {
    title: '16rem',

    textXl: '2.4rem',
    textL: '1.8rem',
    textM: '1.6rem',
    textS: '1.4rem',
    textXs: '1.2rem',
  },

  fonts: {
    primaryFont: "'Roboto', sans-serif",
    secondaryFont: "'Roboto Mono', monospace",
  },

  fontWeight: {
    regular: '400',
    bold: '700',
  },

  transitions: '.2s',
  borderRadios: '8px',
}
