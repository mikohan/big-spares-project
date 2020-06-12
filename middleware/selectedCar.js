export default function(context) {
  console.log('Check middleware')
  context.store.dispatch('getCarInit', context.req)
}

