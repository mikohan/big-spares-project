import { header, color } from '../config'


const typeSwitch = (type, color) => {
  const ret = {}
  switch (type) {
    case 'spaceship':
      ret.component = type
      ret.css = type
      break;
    case 'classic':
      ret.component = type
      ret.css = type
      break
  }

  ret.color = color


  return ret
}

export const headerType = typeSwitch(header, color)