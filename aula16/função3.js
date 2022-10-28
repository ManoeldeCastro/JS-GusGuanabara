var g = (numero) => {
  if (numero == 1) {
    return 1
  } else {
    return numero * g(numero - 1)
  }
}
console.log(g(5))
