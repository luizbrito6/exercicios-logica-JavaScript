
function convertaDolar() {

    var real =  parseFloat(document.querySelector('#real').value); 
    var inputDolar = document.querySelector('#dolar').value = (real * 0.19).toFixed(2);     

}

function convertaReal() {
    var dolar =  parseFloat(document.querySelector('#dolar').value); 
    var inputReal = document.querySelector('#real').value = (dolar * 5.21).toFixed(2); 
}


























/*
    Passo 0 - Pegar o click 
    Passo 1 - Pegar o valor do real 
    Passo 2 - Realizar o cálculo do real para o dolar
    Passo 3 - Mostrar o resultado no input do dolar

    Passo 4 - Pegar o valor do dolar 
    Passo 5 - Ralizar o cálculo do dolar para o real 
    Passo 6 - Mostrar o resultado no input do real 


    Como conectar o lado REAL com o lado DOLAR

*/