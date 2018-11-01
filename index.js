  const drivers = ["Milo", "Otis", "Garfield"];

  function destructivelyAppendDriver(name){
    drivers.push(name)
  }

  function destructivelyPrependDriver(name){
    drivers.unshift(name)
  }

  function destructivelyRemoveLastDriver(){
    drivers.pop()
  }

  function destructivelyRemoveFirstDriver(){
    drivers.splice(0, 1)
  }

  function appendDriver(name){
    const allDrivers = [...drivers, name]
    return allDrivers
  }

  function prependDriver(name){
    const allDrivers = [name, ...drivers]
    return allDrivers
  }

  function removeLastDriver(){
    allDrivers = [...drivers]
    allDrivers.pop()
    return allDrivers
  }

  function removeFirstDriver(){
    allDrivers = [...drivers]
    allDrivers.shift()
    return allDrivers
  }
