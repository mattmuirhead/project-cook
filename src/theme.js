const colors = {
  offWhite: '#f1f3f6',
  grey: 'grey',
  black: '#444444',
  white: 'white',
  red: '#ff0844',
  gradient: 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
}

const fontSizes = {
  label: '13px',
  body: '15px',
  heading1: '20px'
}

const radii = {
  card: '20px',
  input: '10px',
}

const shadows = {
  emboss: 'inset 0 0 15px rgba(55, 84, 170,0), inset 0 0 20px rgba(255, 255, 255,0), 7px 7px 15px rgba(55, 84, 170,.15), -7px -7px 20px rgba(255, 255, 255,1), inset 0px 0px 4px rgba(255, 255, 255,.2)',
  deboss: 'inset 7px 7px 15px rgba(55, 84, 170,.15), inset -7px -7px 20px rgba(255, 255, 255,1), 0px 0px 4px rgba(255, 255, 255,.2)',
}

const buttons = {
  primary: {
    size: fontSizes.heading1,
    color: colors.red,
    gradient: colors.gradient,
  },
  plain: {
    size: fontSizes.label,
    color: colors.black,
  }
}

const theme = {
  background: colors.offWhite,
  text: {
    label: colors.grey,
    body: colors.black,
  },
  card: {
    background: colors.offWhite,
  },
  input: {
    background: colors.offWhite,
  },
  buttons,
  fontSizes,
  radii,
  shadows,
}


export default theme