
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.includes('personaje.html')) {
        const personaje = JSON.parse(localStorage.getItem('personajeGuardado'));
        if (personaje) {
            const divPersonaje = document.getElementById('infoPersonaje');
            if (divPersonaje) {
                divPersonaje.innerHTML = `
                Raza: ${personaje.raza}<br>
                Clase: ${personaje.claseJuego}<br>
                Fuerza: ${personaje.fuerza}<br>
                Destreza: ${personaje.destreza}<br>
                Constitución: ${personaje.constitucion}<br>
                Inteligencia: ${personaje.inteligencia}<br>
                Sabiduría: ${personaje.sabiduria}<br>
                Carisma: ${personaje.carisma}<br>
                Velocidad: ${personaje.velocidad}<br>
                Visión: ${personaje.vision}<br>
                Aptitudes Raciales: ${personaje.aptitudes}<br>
                HP: ${personaje.hp}<br>
                Bonificador de Competencia: ${personaje.bonificadorCompetencia}<br>
                Equipamiento: ${personaje.equipamiento.join(", ")}<br>
                Habilidades: ${personaje.habilidades.join(", ")}<br>
                `;
                establecerImagenRaza(personaje.raza);
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se encontró un personaje guardado.'
            });
        }
    }
});