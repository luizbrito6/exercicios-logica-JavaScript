function calcular() {
    
    var salario = parseFloat(document.querySelector('#salario').value);
    
    if (isNaN(salario)) {
        salario = 0
    }

    else if (salario < 1000) {
        salario = salario * 1.25;
    } 

    else if (salario >= 1000 && salario < 2000) {
        salario = salario * 1.15;

    }

    else if (salario >= 2000) {
        salario = salario * 1.10;

    }

    else {
        alert('Digite um valor válido.')
    }
    
    var calcular = document.querySelector('#mostrar').textContent = salario.toFixed(2);
}



