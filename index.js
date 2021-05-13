function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return  function myfunction(){
    console.log('hola')
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('hola')
  }
}