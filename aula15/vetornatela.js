let valores = [8, 1, 7, 4, 2, 9]
var i = 0
while (i < valores.length) {
  console.log(valores[i])
  i++
}
for (g of valores) {
  console.log(g)
}
for (h in valores) {
  console.log(h)
}

function parimp(n) {
  if (n % 2 == 0) {
    console.log("seu numero é par")
  } else {
    console.log("seu numero é impar")
  }
}

parimp(5)
