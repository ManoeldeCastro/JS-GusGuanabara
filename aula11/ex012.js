var agora = new Date()
var hora = agora.getHours()
if (hora < 6) {
  console.log(`São ${hora} horas da madrugada, Boa Madrugada!`)
} else if (hora < 12) {
  console.log(`São ${hora} horas da manhã, Bom dia!`)
} else if (hora < 18) {
  console.log(`São ${hora} horas da tarde, Boa tarde!`)
} else {
  console.log(`São ${hora} horas da noite, Boa noite!`)
}
