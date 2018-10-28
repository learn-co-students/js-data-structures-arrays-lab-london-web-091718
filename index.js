// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift()
}

function appendDriver(name) {
  const new_array = [...drivers, name]
  return new_array
}

function prependDriver(name) {
  const new_array = [name, ...drivers];
  return new_array;
}

function removeLastDriver() {
  const new_array = drivers.slice(0, drivers.length - 1);
  return new_array;
}

function removeFirstDriver() {
  return drivers.slice(1);
}
