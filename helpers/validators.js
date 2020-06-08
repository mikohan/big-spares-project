export function validChk(msg, value) {
  let valid = 1
  if (value) {
    if (value.length < 3) {
      valid = 1
    } else {
      valid = 3
    }
    if (msg === '') {
      valid = 2
    } else {
      valid = 3
    }
  } else {
    valid = 1
  }
  return valid
}

