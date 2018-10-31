const drivers = ["Milo", "Otis", "Garfield"]

destructivelyAppendDriver = (name) => drivers.push(name)
destructivelyPrependDriver = (name) => drivers.unshift(name)
destructivelyRemoveLastDriver = () => drivers.pop()
destructivelyRemoveFirstDriver = () => drivers.shift()

function appendDriver(name){
  new_drivers = drivers.slice();
  new_drivers.push(name);
  return new_drivers
}

function prependDriver(name){
  new_drivers = drivers.slice();
  new_drivers.unshift(name);
  return new_drivers
}

function removeLastDriver(){
  new_drivers = drivers.slice();
  new_drivers.pop();
  return new_drivers
}

function removeFirstDriver(){
  new_drivers = drivers.slice();
  new_drivers.shift();
  return new_drivers
}
