

// var input = ; 

document.querySelector('#pe').addEventListener('input', converter);




function converter() {
    var pe = parseFloat(document.querySelector('#pe').value);

    if (isNaN(pe)) {
        pe = 0
    } 
    
    var polegada = document.querySelector('#polegada').textContent = (pe * 12).toFixed(0);
    var jarda = document.querySelector('#jarda').textContent = (pe / 3).toFixed(3);
    var milha = document.querySelector('#milha').textContent = ((pe / 3) / 1760).toFixed(3);

}



