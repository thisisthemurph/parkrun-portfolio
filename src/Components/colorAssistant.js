const Color = require('color')

const colorNames = {
  'navy':     Color('rgb(0, 31, 63)'),
  'blue':     Color('rgb(0, 116, 217)'),
  'aqua':     Color('rgb(127, 219, 255)'),
  'teal':     Color('rgb(57, 204, 204)'),
  'olive':    Color('rgb(61, 153, 112)'),
  'green':    Color('rgb(46, 204, 64)'),
  'lime':     Color('rgb(1, 255, 112)'),
  'yellow':   Color('rgb(255, 220, 0)'),
  'orange':   Color('rgb(255, 133, 27)'),
  'red':      Color('rgb(255, 65, 54)'),
  'maroon':   Color('rgb(133, 20, 75)'),
  'fuchsia':  Color('rgb(240, 18, 190)'),
  'purple':   Color('rgb(177, 13, 201)'),
  // 'black':    Color('rgb(17, 17, 17)'),
  'gray':     Color('rgb(170, 170, 170)'),
  'silver':   Color('rgb(221, 221, 221)')
}

const niceHexColors = () => {
  return Object.values(colorNames).map(color => color.hex())
}

export default niceHexColors