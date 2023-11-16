
function obtenerModificador(caracteristica) {
    return Math.floor((caracteristica - 10) / 2);
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.includes('personaje.html')) {
        const personaje = JSON.parse(localStorage.getItem('personajeGuardado'));
        if (personaje) {
            const razaElement = document.getElementById('raza');
            const claseElement = document.getElementById('clase');
            const nivelElement = document.getElementById('nivel');
            const caracteristicasElement = document.getElementById('caracteristicas');
            const hpElement = document.getElementById('hp');
            const velocidadElement = document.getElementById('velocidad');
            const visionElement = document.getElementById('vision');
            const aptitudesElement = document.getElementById('aptitudes');
            const bonificadorCompetenciaElement = document.getElementById('bonificadorCompetencia');
            const equipamientoElement = document.getElementById('equipamiento');
            const habilidadesElement = document.getElementById('habilidades');

            razaElement.textContent = personaje.raza;
            claseElement.textContent = personaje.claseJuego;

            function formatCaracteristica(caracteristica, valor) {
                const modificador = obtenerModificador(valor);
                const signo = modificador >= 0 ? '+' : '';
                return `${caracteristica}: ${valor} (${signo}${modificador})`;
            }

            const caracteristicas = [
                formatCaracteristica('Fuerza', personaje.fuerza),
                formatCaracteristica('Destreza', personaje.destreza),
                formatCaracteristica('Constitución', personaje.constitucion),
                formatCaracteristica('Inteligencia', personaje.inteligencia),
                formatCaracteristica('Sabiduría', personaje.sabiduria),
                formatCaracteristica('Carisma', personaje.carisma),
            ];
            caracteristicasElement.innerHTML = caracteristicas.join("<br>");

            nivelElement.textContent = `Nivel: ${personaje.nivel}`;
            hpElement.textContent = personaje.hp;
            velocidadElement.textContent = personaje.velocidad;
            visionElement.textContent = personaje.vision;
            aptitudesElement.textContent = personaje.aptitudes;
            bonificadorCompetenciaElement.textContent = personaje.bonificadorCompetencia;
            equipamientoElement.textContent = personaje.equipamiento.join(", ");
            habilidadesElement.textContent = personaje.habilidades.join(", ");

            establecerImagenRaza(personaje.raza);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se encontró un personaje guardado.'
            });
        }
    }
});

