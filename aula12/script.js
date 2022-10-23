let agora = new Date()
let hora = agora.getHours()
let p = document.getElementById("agorasao")
let img = document.getElementById("img")
let body = document.querySelector("body")
if (hora < 12) {
  p.innerHTML += ` ${hora} Horas da manhã.</br> Bom Dia!`
  body.style.background = "rgb(228, 177, 132)"
  img.src = "manha.jpg"
} else if (hora < 18) {
  body.style.background = "rgb(242, 136, 110"
  p.innerHTML += ` ${hora} Horas da Tarde.</br> Boa Tarde!`
  img.src = "tarde.jpg"
} else {
  p.innerHTML += ` ${hora} Horas da Noite.</br> Boa Noite`
  body.style.background = "rgb(96, 117, 234)"
  img.src = "noite2.png"
}
