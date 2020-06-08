export default function (context) {
  console.log('Check middleware')
  const selectedCar = context.isServer ? getCarFromCookie(context.req) : getCarFromLocalStorage()
  if(selectedCar) {
    context.store.dispatch('fetchSelectedCar', selectedCar)
  }
}