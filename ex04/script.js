function calcule() {

    var raio =  parseFloat(document.querySelector('#raio').value);
    
    
    if (isNaN(raio)) {
        
        alert('Informe o valor do raio.');
        
    } else {

        var mostrarResultado = document.querySelector('#resultado').textContent = (Math.PI * raio ** 2).toFixed(2);
        
    }

}