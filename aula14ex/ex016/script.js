let contar = document.querySelector("input#contar")
var fim1 = Number(document.querySelector("input#fim"))
//linha 1 peguei o elemento dom de tag button
contar.addEventListener("click", () => {
  // da linha 5 a 9 peguei os elementos dom
  var inicio = Number(document.querySelector("input#inicio").value)
  var fim = Number(document.querySelector("input#fim").value)
  var passos = Number(document.querySelector("input#passos").value)
  var contando = document.querySelector("p#contando")
  var conta = document.querySelector("p#totalp")

  //linha 11 - adicionei o texto no paragrafo
  var resto = (fim - inicio) % passos

  console.log(resto)
  var contando = () => {
    for (inicio; inicio <= fim; inicio += passos) {
      conta.innerHTML += ` ${inicio} \u{1f449} `
    }
    conta.innerHTML += `${fim} \u{1f3c1}`
    conta.innerHTML += `Restam: ${Math.abs(fim - inicio)} Passos`
  }
  //linhas 13 a 17 - Criei uma função onde vai ser executado o Laço
  //o for esta contendo a variável inicio como inicialização, as variáveis inicio e fim como condição, e a variável passos como incremento para inicio
  const test = () => {
    if (inicio == new Number()) {
      throw alert("Erro - Preencha o campo Inicio")
    } else if (fim == new Number()) {
      throw alert("Erro - Preencha o campo Fim")
    } else if (passos == new Number()) {
      throw alert("Erro - Preencha o campo Passos")
    } else if (inicio > fim || fim < passos || passos < 1) {
      throw alert("Erro - Verifique os dados e tente novamente")
    } else {
      try {
        contando()
        contando.innerHTML = "<strong>Contando: <strong>"
      } catch (e) {
        console.log(e)
      }
    }
  }
  //linhas 20 a 32 - criei uma função com condição para eventuais erros, utilizando o throw, try e catch. e condicionando no if else
  //na linha 27 no try, está executando a função do laço (callback).
  //na linha 28 e 29 - foi passado o catch, caso a execução seja errada ela retorna um dos erros como mensagem para cliente
  test()
  // na linha 36 - estou rodando a função test() que é exetamente, o que vai fazer tudo funcionar e retorna o resultado, verificado de erros para o cliente
})
