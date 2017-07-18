const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  let newArray = kittens.slice()
  newArray.push(name)
  return newArray
}

function prependKitten(name) {
  let newArray = kittens.slice()
  newArray.unshift(name)
  return newArray
}

function removeLastKitten() {
  let newArray = kittens.slice()
  newArray.pop()
  return newArray
}

function removeFirstKitten() {
  let newArray = kittens.slice()
  newArray.shift()
  return newArray
}
