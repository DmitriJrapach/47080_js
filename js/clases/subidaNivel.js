
import { progresionBarbaro } from './barbaro.js';
import { progresionBardo } from './bardo.js';

document.addEventListener('DOMContentLoaded', async () => {
    const subirNivelBtn = document.getElementById('subirNivelBtn');
    const bajarNivelBtn = document.getElementById('bajarNivelBtn');
    const nivelElement = document.getElementById('nivel');
    const rasgosClaseElement = document.getElementById('rasgosClase');

    let personaje = {
        nivel: 1,
        rasgosPorNivel: [],
        rasgosClase: [],
        claseJuego: JSON.parse(localStorage.getItem('personajeGuardado')).claseJuego,
    };

    async function obtenerProgresionDeClase(clase) {
        switch (clase) {
            case 'barbaro':
                return progresionBarbaro;
            case 'bardo':
                return progresionBardo;
            // Hay q agregar mas casos para otras clases
            default:
                return null;
        }
    }

    function mostrarCaracteristicasDeNivel(nivel, progresionClase) {
        const rasgosPorNivel = progresionClase?.rasgosPorNivel?.[nivel];
        if (rasgosPorNivel) {
            const rasgosAcumulados = personaje.rasgosPorNivel.slice(0, nivel).flat();
            console.log("Características acumuladas hasta el nivel " + nivel + ":", rasgosAcumulados);

            if (rasgosAcumulados.length > 0) {
                const listaCaracteristicas = rasgosAcumulados.map(caracteristica => {
                    if (typeof caracteristica === 'string') {
                        return `<li>${caracteristica}</li>`;
                    } else if (caracteristica.caracteristicas && Array.isArray(caracteristica.caracteristicas)) {
                        return `<li>${caracteristica.descripcion}: ${caracteristica.caracteristicas.join(', ')}</li>`;
                    } else if (caracteristica.descripcion && caracteristica.caracteristicas) {
                        return `<li>${caracteristica.descripcion}: ${caracteristica.caracteristicas.join(', ')}</li>`;
                    }
                    return '';
                });

                rasgosClaseElement.innerHTML = `<ul>${listaCaracteristicas.join('')}</ul>`;

                personaje.rasgosClase = [...new Set(rasgosAcumulados)];
            } else {
                console.log("Sin rasgos para este nivel");
                rasgosClaseElement.innerHTML = "<p>Sin rasgos para este nivel</p>";
            }
        } else {
            console.log("Sin rasgos para este nivel");
            rasgosClaseElement.innerHTML = "<p>Sin rasgos para este nivel</p>";
        }
    }

    

    if (personaje) {
        const progresionClase = await obtenerProgresionDeClase(personaje.claseJuego);
        mostrarCaracteristicasDeNivel(personaje.nivel, progresionClase);

        // Resto del código para mostrar otros detalles del personaje
    }

    if (subirNivelBtn && bajarNivelBtn) {
        subirNivelBtn.addEventListener('click', () => {
            cambiarNivel(1);
        });

        bajarNivelBtn.addEventListener('click', () => {
            cambiarNivel(-1);
        });
    }

    async function cambiarNivel(cantidad) {
        personaje.nivel += cantidad;

        if (personaje.nivel < 1) {
            personaje.nivel = 1;
        }

        nivelElement.textContent = personaje.nivel;
        rasgosClaseElement.innerHTML = "";

        const progresionClase = await obtenerProgresionDeClase(personaje.claseJuego);

        if (cantidad === 1) {
            const rasgosNivel = progresionClase?.rasgosPorNivel?.[personaje.nivel - 1];
            if (rasgosNivel) {
                personaje.rasgosPorNivel[personaje.nivel - 1] = rasgosNivel;
                mostrarCaracteristicasDeNivel(personaje.nivel, progresionClase);
            }
        } else if (cantidad === -1) {
            mostrarCaracteristicasDeNivel(personaje.nivel, progresionClase);
        }
    }
});