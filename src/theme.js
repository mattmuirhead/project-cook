const colors = {
  offWhite: '#f1f3f6',
  grey: '#cccccc',
  black: '#444444',
  white: 'white',
  red: '#ff0844',
  green: '#41a941',
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
    disabled: colors.grey,
  },
  secondary: {
    size: fontSizes.heading1,
    color: colors.black,
    gradient: colors.gradient,
    disabled: colors.grey,
    active: colors.red,
  },
  plain: {
    size: fontSizes.label,
    color: colors.black,
  }
}

const notifications = {
  error: {
    background: colors.red,
    color: colors.offWhite,
  },
  success: {
    background: colors.green,
    color: colors.offWhite,
  },
}

const iconSizes = {
  small: '16px',
  medium: '20px',
  large: '24px',
  xxl: '40px',
}

const theme = {
  background: colors.offWhite,
  text: {
    label: colors.grey,
    body: colors.black,
    invertBody: colors.offWhite,
  },
  card: {
    background: colors.offWhite,
  },
  input: {
    background: colors.offWhite,
  },
  loader: {
    background: colors.offWhite,
    dot: colors.background,
    gradient: colors.gradient,
  },
  buttons,
  fontSizes,
  radii,
  shadows,
  notifications,
  iconSizes,
}


export default theme