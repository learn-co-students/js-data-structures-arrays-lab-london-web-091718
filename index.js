// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push('Ralph');
}

function destructivelyPrependDriver(name) {
  drivers.unshift(`Bob`);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop();
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift();
}

function appendDriver(name) {
  const copyOfDrivers = drivers.slice();
  copyOfDrivers.push("Broom");
  return copyOfDrivers
}

function prependDriver(name) {
  const copyOfDrivers2 = drivers.slice();
  copyOfDrivers2.unshift("Arnold");
  return copyOfDrivers2;
}

function removeLastDriver(name) {
  const removeDriverLast = drivers.slice();
  removeDriverLast.splice(-1);
  return removeDriverLast;
}

function removeFirstDriver() {
    const myVar = drivers.slice();
    myVar.splice(0, 1);
    return myVar;
}
