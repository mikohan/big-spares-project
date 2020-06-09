export function getFromStorage() {}


export function getFromCookie(req) {

}

export function setStorage(data) {

}

export function setCookie(isServer, res, data) {
  if (isServer) {
    req.setHeader('Set-Cookie', [`selectedCar=${data.car}`])
  }
}