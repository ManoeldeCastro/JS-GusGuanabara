var enter = document.querySelector("input#verificar")
var img = document.querySelector("img#img")
img.style.display = "none"
enter.addEventListener("click", () => {
  var sexo = document.querySelector("input[name='sexo']:checked").value
  var nascimento = Number(document.querySelector("input#num1").value)
  var idade = 2022 - nascimento
  var img = document.querySelector("img#img")
  var p = document.querySelector("p#textimg")
  var body = document.querySelector("body")
  img.style.display = "inline"
  switch (sexo) {
    case "Masc":
      if (idade < 14) {
        p.innerHTML = `Você tem ${idade} de idade, Você ainda é uma criança!`
        img.src = "crianca_m.png"
      } else if (idade < 45) {
        p.innerHTML = `Você tem ${idade} de idade, Você é um jovem`

        img.src = "jovem_m.png"
      } else {
        p.innerHTML = `O senhor tem ${idade} de idade, O senhor já é um idoso!`
        img.src = "idoso_m.png"
      }
      break
    case "Femi":
      if (idade < 14) {
        p.innerHTML = `Você tem ${idade} de idade, Você ainda é uma criança!`
        img.src = "crianca_f.png"
        body.style.background = "rgb(205, 110, 242)"
      } else if (idade < 45) {
        p.innerHTML = `Você tem ${idade} de idade, Você é uma jovem`
        img.src = "jovem_f.png"
        body.style.background = "rgb(205, 110, 242)"
      } else {
        p.innerHTML = `A senhora tem ${idade} de idade, A senhora já uma idosa`
        img.src = "idosa_f.png"
        body.style.background = "rgb(205, 110, 242)"
      }
  }
})
