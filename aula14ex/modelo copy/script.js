const gerar = document.querySelector("input#gerar")
const select = document.querySelector("select#seltab")
gerar.addEventListener("click", () => {
  let numero = Number(document.querySelector("input#numero").value)
  alert(numero)
})
