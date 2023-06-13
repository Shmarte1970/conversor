document.getElementById('converter-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    var valor = document.getElementById('valor').value;
    var unit = document.getElementById('unit').value;
    var convert = document.getElementById('convert').value;

    var result = document.getElementById('result');

    result.innerHTML = '';


    if (unit === 'px' && convert === 'em') {
        result.innerHTML += '<p>' + valor + ' px equivale a ' + (valor / 16) + ' em.</p>';
    } else if (unit === 'px' && convert === 'ex') {
        result.innerHTML += '<p>' + valor + ' px equivale a ' + (valor / 16 * 0.5) + ' ex.</p>';
    } else if (unit === 'em' && convert === 'px') {
        result.innerHTML += '<p>' + valor + ' em equivale a ' + (valor * 16) + ' px.</p>';
    } else if (unit === 'ex' && convert === 'px') {
        result.innerHTML += '<p>' + valor + ' ex equivale a ' + (valor * 8) + ' px.</p>';
    } else if (unit === '%' && convert === 'px') {
        result.innerHTML += '<p>' + valor + '% equivale a ' + (valor / 100) + ' veces el tamaño del contenedor.</p>';
    } else if (unit === 'rem' && convert === 'px') {
        result.innerHTML += '<p>' + valor + ' rem equivale a ' + valor + ' veces el tamaño de la raíz.</p>';
    } else {
        result.innerHTML += '<p>' + ' Operacion no disponible ' + '<p/>';
    }
});