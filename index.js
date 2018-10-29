// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.splice(-1);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.splice(0, 1);
}

function appendDriver(name) {
  drivers_new = [...drivers, name];
  return drivers_new;
}

function prependDriver(name) {
  drivers_new = [name, ...drivers]
  return drivers_new;
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
