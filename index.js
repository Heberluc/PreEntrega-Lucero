//Algoritmo con un ciclo
// Utilizo funciones

function indicarDias() {
    console.log( 'Todos los dias disponibles para realizarte tu servicio preferido son:')
    for (let i=1 ; i <= 6 ; i++){
        console.log(i + ' Dia de la semana')
    }
}

//Algoritmo con un condicional
// Utilizo funciones

function indicarPrecio(codigo){
    switch (codigo) {
        case '1':
            console.log('El precio del Corte de Pelo es: $ 1000')
            break;
        case '2':
            console.log('El precio del Corte de Niño es: $ 1500')
            break;
        case '3':
            console.log('El precio del Corte con Barba es: $ 1200')
            break;
        case '4':
            console.log('El precio de Tintura Completa es: $ 5000')
            break;   
        case '5':
            console.log('El precio de Mechas/Reflejos es: $ 4500')
            break;     
        default:
            console.warn('No entendimos que servicio deseas real.')
            break;
    }
    }

//Simulador Interactivo

function consultarServicios() {
    let respuesta = confirm('¿Quieres saber el precio de algun servicio?')
    if(respuesta === true){
        let codigo = prompt('Ingresa el codigo numerico del sevicio a consultar')
            indicarPrecio(codigo)
            indicarDias()
    } else{
        console.error('La proxima te esperamos 🪒💈')

    }
}

