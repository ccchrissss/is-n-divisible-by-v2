function isDivisible(n, ...numbers){

  let otherNs = [...arguments]
  otherNs.shift()

  // console.log(otherNs)

  return otherNs.every( e => n % e === 0)

}

console.log(isDivisible(100, 4, 5, 6))

console.log(isDivisible(1))

console.log(isDivisible(144, 12, 24))

// parameters: n, a, b, ...    // numbers
// return boolean
// e.g. isDivisible(100, 4, 5, 6)
// results in false

// declare a variable otherNs and assign it to [...arguments].shift()
// return the boolean result of using the .every() method on otherNs, checking if n % item === 0
