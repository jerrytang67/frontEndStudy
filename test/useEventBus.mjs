import { useEventBus } from '@vueuse/core'

const bus = useEventBus('news')

function listener(event) {
  console.log(`news: ${event}`)
}
function listener2(event) {
  console.log(`news2: ${event}`)
}

// listen to an event
 bus.on(listener)
 bus.on(listener2)

// fire an event
bus.emit('The Tokyo Olympics has begun')

// unregister the listener
// unsubscribe()
// or
bus.off(listener)
bus.off(listener2)

// clearing all listeners
bus.reset()