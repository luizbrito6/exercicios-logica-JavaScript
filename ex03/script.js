function calculoSalario() {

    var sifrao = 'R$ '

    var salario = parseFloat(document.getElementById('salario').value);
    
    if (isNaN(salario)) {
        
        alert('Informe o sálario.');
        
    } else {

        var resultado = document.getElementById('resultado').textContent = sifrao + (salario + (salario * 25/100)).toFixed(2);
        
    }



}