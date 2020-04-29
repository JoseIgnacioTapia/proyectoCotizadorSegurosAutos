// Cotizador Constructor

function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

// Todo lo que se muestra
function Interfaz(){}

// Mensaje que se imprime en el HTML
Interfaz.prototype.mostrarError = function(mensaje, tipo) {
    const div = document.createElement('div');

    if(tipo === 'error') {
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add('mensaje', 'correcto');
    }
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(function() {
        document.querySelector('.mensaje').remove();
    }, 3000);
}


// EventListener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(e);

    // Leer la marca seleccionada del select
    const marca = document.getElementById('marca');
    const marcaSelecionada = marca.options[marca.selectedIndex].value;

    // Leer el año seleccionado del <select>
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    // Lee el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    // Crear Instancia de Interfaz
    const interfaz = new Interfaz();

    // Revisamos que los campos no esten vacíos
    if(marcaSelecionada === '' || anioSeleccionado === '' || tipo === '') {
        // Interfaz imprimiendo un error
        interfaz.mostrarError('Faltan datos, revisar el formulario y prueba de nuevo', 'error');
    } else {
        // Instanciar seguro y mostrar interfaz
        console.log('Todo Correcto');
    }

});


const max = new Date().getFullYear(),
      min = max - 20;

const selectAnios = document.getElementById('anio');
for(let i = max; i >= min; i-=1) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}
