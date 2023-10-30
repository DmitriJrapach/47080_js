
//  Solicita al usuario ingresar su raza y clase de personaje y devuelve estos valores en un array.

function obtenerRazaClase() {
    const raza = limpiarYNormalizar(document.getElementById('raza').value).toLowerCase();
    const claseJuego = limpiarYNormalizar(document.getElementById('claseJuego').value).toLowerCase();

    return [raza, claseJuego];
}
// Obtenemos las tiradas de caracteristicas
function obtenerCaracteristicas() {
    const fuerza = Number(document.getElementById('fuerza').value);
    const destreza = Number(document.getElementById('destreza').value);
    const constitucion = Number(document.getElementById('constitucion').value);
    const inteligencia = Number(document.getElementById('inteligencia').value);
    const sabiduria = Number(document.getElementById('sabiduria').value);
    const carisma = Number(document.getElementById('carisma').value);

    const caracteristicas = [fuerza, destreza, constitucion, inteligencia, sabiduria, carisma];

    let suma_caracteristicas = caracteristicas.reduce((total, stat) => total + stat, 0);


    if (suma_caracteristicas > 78) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La suma de los puntos no debe exceder 78!',
        });
        return false;
    }


    for (let i = 0; i < caracteristicas.length; i++) {
        if (caracteristicas[i] < 8 || caracteristicas[i] > 18) {
            Swal.fire({
                icon: 'error',
                title: 'Error en Característica',
                text: `La característica #${i + 1} está fuera de rango. Debe estar entre 8 y 18.`,
            });
            return false;
        }
    }

    return caracteristicas;
}

function crearNuevoPersonaje() {
    const razaClaseArray = obtenerRazaClase();
    const raza = limpiarYNormalizar(razaClaseArray[0]);
    const claseJuego = limpiarYNormalizar(razaClaseArray[1]);

    if (!RAZAS_VALIDAS.includes(raza) || !CLASES_VALIDAS.includes(claseJuego)) {
        return null;
    }

    const caracteristicas = obtenerCaracteristicas();
    if (!caracteristicas) {

        return null;
    }
    const resultado = aplicarModificadoresRaza(caracteristicas, raza);
    const personaje = new Personaje(raza, claseJuego, ...resultado.caracteristicas, resultado.velocidad, resultado.vision, resultado.aptitudes);
    personaje.establecerHPInicial();
    personaje.establecerEquipamientoInicial();
    personaje.establecerHabilidadesIniciales();

    return personaje;
}

// FUNCION Q ARROJA ERRORES EN EL FORMULARIO CUANDO CREAMOS A NUEVO PERSONAJE
function crearPersonaje() {
    const personaje = crearNuevoPersonaje();
    if (!personaje) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al crear el personaje. Por favor, revisa tus entradas.'
        });
        return;
    }

    Swal.fire({
        icon: 'info',
        title: 'Información del Personaje',
        html: personaje.obtenerCaracteristicas(),
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Borrar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem('personajeGuardado', JSON.stringify(personaje));
            window.location.href = './pages/personaje.html';
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Borrado!', 'Tu personaje ha sido borrado.', 'error');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const camposCaracteristicas = [
        document.getElementById('fuerza'),
        document.getElementById('destreza'),
        document.getElementById('constitucion'),
        document.getElementById('inteligencia'),
        document.getElementById('sabiduria'),
        document.getElementById('carisma')
    ];

    camposCaracteristicas.forEach(campo => {
        campo.addEventListener('input', actualizarContador);
    });

    function actualizarContador() {
        const totalUsado = camposCaracteristicas.reduce((suma, campo) => suma + (Number(campo.value) || 0), 0);
        const puntosDisponibles = 78 - totalUsado;
        document.getElementById('puntosDisponibles').innerText = puntosDisponibles;
    }

    const botonCrear = document.getElementById('crearPersonajeBtn');
    if (botonCrear) {
        botonCrear.addEventListener('click', crearPersonaje);
    }
});