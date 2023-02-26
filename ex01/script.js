
function calcularMedia() {
   
    var nota1 =  parseInt(document.querySelector('#nota-1').value);
    var nota2 = parseInt(document.querySelector('#nota-2').value);
    var nota3 = parseInt(document.querySelector('#nota-3').value);
    var nota4 = parseInt(document.querySelector('#nota-4').value);
    var nota5 = parseInt(document.querySelector('#nota-5').value);

    var media = ((nota1 + nota2 + nota3 + nota4 + nota5) / 5).toFixed(2); 
    

    // Se a média não for um número realiza o alert 
    if (isNaN(media)) {

        alert('Informe todas as notas corretamente.');

    } else {

        var elementoResultado = document.querySelector('#elementoResultado').textContent = media;
        
    }




    /*
    
        = Para atribuição de valor 
        == Comparação de equivalencia entre dois valores
        === Compara se o valor e o tipo da variável são iguais
        isNaN () - Função para descobrir se um variável é um número. (Not a number)
    */ 

}