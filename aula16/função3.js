var g = (n) => {
  var h = n
  for (j = n; j <= 0; j--) {
    h += j * n
  }
  return h
}
console.log(g(6))
