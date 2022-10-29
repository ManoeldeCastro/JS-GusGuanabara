const gerar = document.querySelector("input#gerar")
const select = document.querySelector("select#sellis")
const reset = document.querySelector("input#reset")
const numero = document.querySelector("input#numero")
const fim = document.querySelector("input#finalizar")
const div = document.createElement("div")

let valores = []
gerar.addEventListener("click", () => {
  div.style.display = "hidden"
  if (Number(numero.value) > 0 && Number(numero.value) <= 100) {
    if (valores.indexOf(Number(numero.value)) === -1) {
      valores.push(Number(numero.value))
      let option = document.createElement("option")
      option.text = `Valor ${numero.value} adicionado`
      select.appendChild(option)
      if (select.size <= 10) {
        select.size += 1
      }
    } else {
      alert("Número já está na lista")
    }
  } else {
    alert("Numero não está dentro dos parâmetros")
  }

  numero.value = " "
  numero.focus()
})
fim.addEventListener("click", () => {
  div.style.display = "inline"

  if (valores.length == 0) {
    alert("Número não adicionado")
  } else {
    valores.sort()
    var p1 = document.querySelector("p#p1")
    p1.innerHTML = `Ao, todo temos ${valores.length} Números cadastrados.`
    var p2 = document.querySelector("p#p2")
    p2.innerHTML = `O maior numero registrado foi ${
      valores[valores.length - 1]
    }.`
    var p3 = document.querySelector("p#p3")
    p3.innerHTML = `O menor numero registrado foi ${valores[0]}.`
    var p4 = document.querySelector("p#p4")
    var soma = 0
    for (var valor of valores) {
      soma += valor
    }
    p4.innerHTML = `a soma dos elementos é: ${soma}`
    var p5 = document.querySelector("p#p5")
    p5.innerHTML = `a media dos elementos é: ${soma / valores.length}`
  }
})
function resetar() {
  window.location.reload()
}
