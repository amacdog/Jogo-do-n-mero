let listaDeNumeroSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumero();
let tentativas=1;
exibirMensagemInicial()

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag)
campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

function exibirMensagemInicial() {
exibirTexto('h1', 'jogasso');
exibirTexto('p', 'Escolha um número entre 1 e 10');}

function verificarChute() {
    let chute = document.querySelector('input').value
    console.log (chute==numeroSecreto)
    console.log (numeroSecreto)

    if(chute==numeroSecreto) {
        exibirTexto('h1','Acertou!')
        let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativa}`
        exibirTexto('p',`${mensagemTentativas}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
} else {
            tentativas++
            if (chute>numeroSecreto) {exibirTexto('p',`É menor que ${chute}`)}
            else {exibirTexto('p',`É maior que ${chute}`)}
            limparCampo()

}}
function limparCampo() {
    chute=document.querySelector('input');
    chute.value='';
}

function gerarNumero() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
let quandidadeDeElementosNaLista = listaDeNumeroSorteados.length

if(quandidadeDeElementosNaLista== numeroLimite){
    listaDeNumeroSorteados=[]
}
  if (listaDeNumeroSorteados.includes(numeroEscolhido)) 
  {return gerarNumero()}
  else { listaDeNumeroSorteados.push(numeroEscolhido)
    console.log(listaDeNumeroSorteados) 
    return numeroEscolhido}
}

let palavraTentativa=tentativas>1?'tentativa': 'tentativas'

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas=1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}