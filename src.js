/*
Requisitos

a) Quando o usuário clicar no botão "Get a new quote":
   1. O programa deverá selecionar de maneira aleatória uma nova frase contida em quotes.json
   2. O programa deverá trocar a frase atual que esta sendo exibida no front-end pela nova frase selecionada no passo anterior. 

   Exceções:
     Caso a frase atual seja igual a nova frase selecionada aleatoriamente, o programa deve escolher uma nova frase até que seja diferente.

b) Quando o usuário clicar no botão 'share it':
   1. O programa deverá selecionar a frase que esta sendo exibida;
   2. Redirecionar o usuário para o "x", enviando a frase para ser postada no perfil do usuário.
   3. A frase deve aparecer na caixa de tweet para ser postada e deverá ser a adicionada a frase a hashtag #quotes

*/


// 1. O programa deverá selecionar de maneira aleatória uma nova frase contida em quotes.json
// importar o arquivo json - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with
import data from './quotes.json' with {type: 'json'}
console.log(data)

// selecionar frase aleatoriamente com o método Math.floor((Math.random() * <tamanho do array>))
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
let i = Math.floor (Math.random() * data.length) // sorteia um número aleatório
console.log (data[i]) 

var number;
// selecionar nó do html relacionado a mensagem  
// https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector

const x = document.querySelector("#shareTwitter") // pega o botão que adiciona a mensagem no twitter/x, mas com uma conta logada

// selecionar nó do html relacionado ao botão de novas frases
// https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById
// selecionar nó do html relacionado ao botão de compartilhar twitter
const button = document.querySelector("#newQuote") // pega o botão que faz a requisição para uma nova quote 
const mensagem = document.querySelector(".message") // pega onde será impresso a frase/quote
button.addEventListener('click', () =>{
   let i = Math.floor (Math.random() * data.length) 
     while(mensagem == data[i].quote){
      i = Math.floor (Math.random() * data.length) 
     }
     mensagem.innerHTML = data[i].quote
      console.log(i)

   }
)

/* adicionar evento de click para quando usuário clicar no botão newQuote
   passos: 
   1. adicionar evento click; 
   2. adicionar funcionalidade de alterar frase
   
   https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener
   https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
*/

x.addEventListener('click', function (){
   window.location.href=`https://twitter.com/intent/tweet?text=${mensagem.value}`
})

/* adicionar evento de click para quando usuário clicar no botão shareIt
   https://developer.x.com/en/docs/x-for-websites/tweet-button/overview
*/