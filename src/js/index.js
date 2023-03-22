/*
objetivo: quando clicar o botao mostrar a imagem correspondente. 

passo 1- dar um jeito de pegar os elementos html

passo 2- identificar o clique do usuario no botao

passo 3- demarcar o botao selecionado anterior

passo 4- maracar o botao clicado como se estivesse selecionado

passo 5- esconder imagen anterior

passo 6- aparecer imagem correspondente ao botao clicado
*/

//passo 1- dar um jeito de pegar os elementos html
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')
//passo 2- identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {

    desativarBotaoSelecionado();

    selecionarBotaoCarrossel(botao);

    esconderImagemDeFundoAtiva();

    mostrarNovaImagemDeFundo(indice);

  })
})

function mostrarNovaImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function esconderImagemDeFundoAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function selecionarBotaoCarrossel(botao) {
  botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}

