let listaSorteio = [];
let botaoReiniciar = document.getElementById('btn-reiniciar');
let botaoSortear = document.getElementById('btn-sortear');

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    listaSorteio = [];

    if(botaoSortear.classList.contains("container__botao-desabilitado")){
        return;
    }

    if(document.getElementById('quantidade').value == '' || document.getElementById('de').value == '' || document.getElementById('ate').value == ''){
        alert("Impossível calcular, reveja os dados e tente novamente.");
        return;
    }
  
    if (ate <= de){
        alert("O valor inserido no campo “Do número” é maior que o valor informado no campo “Até o número”. Impossível calcular, reveja os dados e tente novamente.");
        return;
    }  

    if ( (ate-de) < quantidade){
        alert("O valor inserido na quantidade de números para sortear é superior aos números do intervalo criado. Impossível calcular, reveja os dados e tente novamente.");
        return;
    }

    for (let i = 0; i < quantidade; i++ ){
        let numMaximo = numeroAleatorio(de,ate);
         console.log(i + ' gerado '+ numMaximo);     
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = (`<label class="texto__paragrafo">Esses são os números sorteados: ${listaSorteio}</label>`);

    alterarBotao();       
}

function numeroAleatorio (min, max){

    let numVerificar = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
    
    if(listaSorteio.includes (numVerificar)){
        //console.log('deu ruim '+numVerificar);
        return numeroAleatorio(min, max);
    }

    listaSorteio.push(numVerificar);
    return numVerificar;

}

function alterarBotao(){

    if(botaoReiniciar.classList.contains("container__botao-desabilitado")){
        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");
        
    }else{
        botaoReiniciar.classList.remove("container__botao");
        botaoReiniciar.classList.add("container__botao-desabilitado");
    }

    if(botaoSortear.classList.contains("container__botao-desabilitado")){
        botaoSortear.classList.remove("container__botao-desabilitado");
        botaoSortear.classList.add("container__botao");
        
    }else{
        botaoSortear.classList.remove("container__botao");
        botaoSortear.classList.add("container__botao-desabilitado");
    }

}

function reiniciar(){
    
    if(botaoReiniciar.classList.contains("container__botao-desabilitado")){
        return;
    }

    alterarBotao();
    listaSorteio = [];

    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
}

// function alura (min, max){
//     let quantidade = parseInt(document.getElementById('quantidade').value);
//     let de = parseInt(document.getElementById('de').value);
//     let ate = parseInt(document.getElementById('ate').value);
//     let sorteados = [];
//     let numero;

//     for (let i = 0; i < quantidade; i++) {

//         numero = obterNumeroAleatorio(de, ate);

//         while (sorteados.includes(numero)) {
//             numero = obterNumeroAleatorio(de, ate);
//         }
//         sorteados.push(numero);
//     }

//     let resultado = document.getElementById('resultado')
//     resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`

// }


// function obterNumeroAleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }