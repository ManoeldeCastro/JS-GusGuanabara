const gerar = document.querySelector("input#gerar")
const select = document.querySelector("select#seltab")
const reset = document.querySelector("input#reset")
gerar.addEventListener("click", () => {
  select.innerHTML = ""
  let numero = Number(document.querySelector("input#numero").value)
  select.size = "10"

  if (numero == new Number()) {
    alert("Erro - Por Favor digite um numero")
  } else {
    for (i = 1; i <= 10; i++) {
      let option = document.createElement("option")
      option.innerHTML = `${numero} x ${i} = ${numero * i}`
      select.appendChild(option)
    }
  }
})
function resetar() {
  window.location.reload()
}
