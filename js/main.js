


// class Personaje {
//   constructor(raza, claseJuego, fuerza, destreza, constitucion, sabiduria, inteligencia, carisma, velocidad, vision, aptitudes) {
//       this.raza = raza;
//       this.claseJuego = claseJuego; 
//       this.fuerza = fuerza;
//       this.destreza = destreza;
//       this.constitucion = constitucion;
//       this.sabiduria = sabiduria;
//       this.inteligencia = inteligencia;
//       this.carisma = carisma;
//       this.velocidad = velocidad;
//       this.vision = vision;
//       this.aptitudes = aptitudes;
//       this.hp = 0;
//       this.nivel = 1;
//       this.bonificadorCompetencia = 2;
//   }

//   obtenerCaracteristicas() {
//     return `Raza: ${this.raza},
//     Clase: ${this.claseJuego},
//     Fuerza: ${this.fuerza},
//     Destreza: ${this.destreza},
//     Constitucion: ${this.constitucion},
//     Sabiduria: ${this.sabiduria},
//     Inteligencia: ${this.inteligencia},
//     Carisma: ${this.carisma},
//     Velocidad: ${this.velocidad},
//     Vision en oscuridad: ${this.vision},
//     HP: ${this.hp},
//     Bonificador de Competencia: ${this.bonificadorCompetencia},
//     Aptitudes raciales: ${this.aptitudes},
//     ${this.mostrarEquipamiento()},
//     ${this.mostrarHabilidades()}`;
//   }

//   establecerHPInicial() {
//     const modConstitucion = this.obtenerModificador(this.constitucion);
//     this.hp = ClaseJuego.dadoVidaMaximo[this.claseJuego] + modConstitucion;
//   }

//   obtenerModificador(caracteristica) {
//     return Math.floor((caracteristica - 10) / 2);
//   }

//   establecerEquipamientoInicial() {
//     this.equipamiento = ClaseJuego.equipamientoInicial[this.claseJuego] || [];
//   }

//   establecerHabilidadesIniciales() {
//     this.habilidades = ClaseJuego.habilidadesPorClase[this.claseJuego] || [];
//   }

//   mostrarEquipamiento() {
//     return `Equipamiento: ${this.equipamiento.join(", ")}`;
//   }

//   mostrarHabilidades() {
//     return `Habilidades: ${this.habilidades.join(", ")}`;
//   }
// }
// // Agregamos equipo inicial y habilidades claseas
// const ClaseJuego = {
//   dadoVidaMaximo: {
//       barbaro: 12,
//       bardo: 8,
//       brujo: 8,
//       clerigo: 8,
//       druida: 8,
//       explorador: 10,
//       guerrero: 10,
//       hechicero: 6,
//       mago: 6,
//       monje: 8,
//       paladin: 10,      
//       pícaro: 8,
      
//   },
//   equipamientoInicial: {
//     barbaro: ["Una gran hacha o cualquier arma marcial cuerpo a cuerpo. Dos hachas de mano o cualquier arma simple", "sin armadura", "Un equipo de explorador y cuatro jabalinas."],
//     bardo: ["Un estoque, una espada larga o  cualquier arma sencilla. Una daga", "armadura de cuero", "Un equipo de diplomático o un equipo de actor. Una lira o cualquier otro instrumento musical."],
//     brujo: ["Una ballesta ligera y 20 virotes o cualquier arma simple. Dos dagas ", "armadura de cuero", "Una bolsa de componentes de conjuros o un foco arcano. Un equipo de erudito o un equipo para dungeons."],
//     clerigo: ["Una maza o un martillo de guerra (si eres competente). Una ballesta ligera y 20 virotes o cualquier arma simple.", "Cota de escamas, armadura de cuero o cota de malla (si eres competente). Un escudo y un símbolo sagrado.", "Un equipo de sacerdote o un equipo de explorador."],
//     druida: ["Una cimitarra o cualquier arma simple cuerpo a cuerpo. Un escudo de madera o cualquier arma simple.", "Armadura de cuero", "Un equipo de explorador y un foco-    druídico."],
//     explorador: ["Dos espadas cortas o dos armas simples cuerpo a cuerpo, un arco largo y un carcaj con 20 flechas. ", "Una cota de escamas o armadura de cuero", "Un equipo de dungeon o (b) un equipo de explorador."],
//     guerrero: ["Una arma marcial y un escudo o dos armas marciales. Una ballesta ligera y 20 virotes o dos hachas de mano, arco largo y carcaj con 20 flechas. ", "Una cota de malla o armadura de cuero", "Un equipo para dungeon o un equipo de explorador"],
//     hechicero: ["Una ballesta ligera y 20 virotes o cualquier arma simple. Dos dagas.", "Una bolsa de componentes de conjuro o un foco arcano.", "Un equipo para dungeons un equipo de explorador."],
//     mago: ["Un bastón o una daga.", "Una bolsa de componentes de conjuro o un foco arcano. Un libro de conjuros.", "Un equipo de erudito o un equipo de explorador"],
//     monje: ["Una espada corta o cualquier arma simple, 10 dardos. ", "Un equipo de dungeon o un equipo de explorador."],
//     paladin: ["Un arma marcial y un escudo o dos armas marciales. Cinco jabalinas o cualquier arma cuerpo a cuerpo simple.", "Cota de mallas y un símbolo sagrado.", "Un equipo de sacerdote o un equipo de explorador."],      
//     pícaro: ["Un estoque o una espada corta. Un arco pequeño y carcaj con 20 flechas o una espada corta. Dos dagas", "Armadura de cuero", "Un equipo de ladrón, un equipo para dungeons o un equipo de explorador, herramientas de ladrón."],
       
//   },

//   habilidadesPorClase: {
//     barbaro: ["Furia", "Defensa sin armadura"],
//     bardo: ["Lanzamiento de Conjuros", "Inspiración de Bardo (d6)"],
//     brujo: ["Patrón de Otro Mundo", "Magia de Pacto"],
//     clerigo: ["Lanzamiento de Conjuros", "Dominio Divino"],
//     druida: ["Lengua Druídica", "Lanzamiento de Conjuros "],
//     explorador: ["Enemigo Predilecto", "Explorador de lo Natural"],
//     guerrero: ["Estilo de Combate", "Nuevas Energías"],
//     hechicero: ["Lanzamiento de Conjuros", "Origen de Hechicería"],
//     mago: ["Lanzamiento de Conjuros", "Recuperación Arcana "],
//     monje: ["Defensa sin Armadura", "Artes Marciales"],
//     paladin: ["Imposición de Manos", "Sentido Divino"],      
//     pícaro: ["Ataque Furtivo", "Experto", "Jerga de Ladrones"],
       
//   }
// }

// //  Solicita al usuario ingresar su raza y clase de personaje y devuelve estos valores en un array.

// function obtenerRazaClase() {
//   const raza = limpiarYNormalizar(document.getElementById('raza').value).toLowerCase();
//   const claseJuego = limpiarYNormalizar(document.getElementById('claseJuego').value).toLowerCase();

//   return [raza, claseJuego];
// }
// // Obtenemos las tiradas de caracteristicas
// function obtenerCaracteristicas() {
//   const fuerza = Number(document.getElementById('fuerza').value);
//   const destreza = Number(document.getElementById('destreza').value);
//   const constitucion = Number(document.getElementById('constitucion').value);
//   const inteligencia = Number(document.getElementById('inteligencia').value);
//   const sabiduria = Number(document.getElementById('sabiduria').value);
//   const carisma = Number(document.getElementById('carisma').value);

//   const caracteristicas = [fuerza, destreza, constitucion, inteligencia, sabiduria, carisma];

//   let suma_caracteristicas = caracteristicas.reduce((total, stat) => total + stat, 0);

 
//   if (suma_caracteristicas > 78) {
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'La suma de los puntos no debe exceder 78!',
//     });
//     return false;
//   }


//   for (let i = 0; i < caracteristicas.length; i++) {
//       if (caracteristicas[i] < 8 || caracteristicas[i] > 18) {
//         Swal.fire({
//           icon: 'error',
//           title: 'Error en Característica',
//           text: `La característica #${i+1} está fuera de rango. Debe estar entre 8 y 18.`,
//       });
//         return false;
//       }
//   }

//   return caracteristicas;
// }

// // Función auxiliar para limpiar y normalizar strings.
// function limpiarYNormalizar(str) {
//   let resultado = str.trim(); 
//   resultado = resultado.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); 
//   return resultado;
// }
// const RAZAS_VALIDAS = ["enano", "elfo", "mediano", "humano", "gnomo", "semielfo", "semiorco"];
// const CLASES_VALIDAS = ["barbaro", "bardo", "brujo", "clerigo", "druida", "explorador", "guerrero", "hechicero", "mago", "monje", "paladin", "picaro", "pícaro"];

// const aptitudesRacialesPorRaza = {
//   enano: [
//     "Resistencia Enana: Tienes ventaja en las tiradas de salvación contra veneno, y posees resistencia contra el daño por veneno.\nEntrenamiento de Combate Enano: Eres competente con el hacha de batalla, hacha de mano, martillo arrojadizo y martillo de guerra. \nCompetencia con Herramientas: Ganas competencia con unas herramientas de artesano a tu elección: herramientas de herrero, materiales de cervecería o herramientas de albañil. \nAfinidad con la Piedra: Cuando quiera que hagas una  prueba de Inteligencia (Historia) relacionada con el origen de un trabajo hecho en piedra, eres considerado competente en la habilidad de Historia y añades el doble de tu bonificador de competencia a la tirada, en lugar de tu bonificador de competencia normal. \nIdiomas: Puedes hablar, leer y escribir Común y Enano. El Enano está lleno de consonantes duras y sonidos guturales, y esas características se vierten en cualquier otro idioma que el enano pueda hablar."     
//   ],
//   elfo: [
//     "Ascendencia Feérica: Tienes ventaja en las tiradas de salvación contra Encantamiento, y no puedes ser dormido mediante la magia. \nTrance: Los elfos no necesitan dormir. En lugar de eso, meditan profundamente, permaneciendo semiconscientes durante 4 horas al día. (La palabra en Común para tal meditación es “trance”). Mientras meditas, puedes soñar en cierta manera; tales sueños son en realidad ejercicios mentales que se han convertido en un reflejo a lo largo de años de práctica. Tras descansar de esta manera, obtienes el mismo beneficio que un humano tras 8 horas de sueño. \nIdiomas: Sabes hablar, leer y escribir en Común y Élfico. El élfico es fluido, de entonación sutil y gramática intrincada. La literatura élfica es rica y variada, y sus canciones y poemas son famosos entre las otras razas. Muchos bardos aprenden su idioma para poder añadir baladas élficas a sus repertorios."
    
//   ],
//   mediano: [
//     "Suertudo: Cuando obtienes un 1 en una tirada de ataque, prueba de característica o tirada de salvación, puedes volver a tirar el dado y debes usar la puntuación obtenida en la nueva tirada. \nValiente: Tienes ventaja en las tiradas de salvación en contra de ser asustado. \nAgilidad Mediana: Puedes moverte a través del espacio de cualquier criatura que sea de un tamaño mayor que el tuyo. \nIdiomas: Puedes hablar, leer y escribir Común y Mediano. El idioma mediano no es secreto pero los medianos son reacios a compartirlos con otros. Escriben muy poco, así que no tienen una gran cantidad de literatura. Su tradición oral, sin embargo, es muy fuerte. Casi todos los medianos hablan común para conversar con la gente en las tierras donde viven o a través de las que están viajando."
//   ],
//   humano: [
//     "Puedes hablar, leer y escribir Común y una lengua extra de tu elección. Los humanos normalmente aprenden lenguas de otras personas con las que tienen trato, incluyendo dialectos ocultos. Son aficionados a enriquecer su lenguaje con palabras que toman prestadas de otras lenguas: maldiciones orcas, expresiones musicales élficas, frases militares enanas y ese tipo de cosas."
//   ],
//   gnomo: [
//     "Astucia Gnoma: Obtienes ventaja en todas tus tiradas de salvación de Inteligencia, Sabiduría y Carisma contra magia. \nIdiomas: Puedes hablar, leer y escribir Común y Gnómico. El idioma gnómico, que usa el alfabeto enano, es conocido por sus tratados técnicos y sus catálogos de conocimiento sobre el mundo natural."
//   ],
//   semielfo: [
//     "Ascendencia Feérica: Tienes ventaja en las tiradas de salvación contra Encantamiento, y no puedes ser dormido mediante la magia. \nVersatilidad con Habilidades: Ganas competencia en dos habilidades a tu elección. \nIdiomas: Puedes hablar, leer y escribir Común, Élfico y otro idioma de tu elección."
//   ],
//   semiorco: [
//     "Amenazante: Ganas competencia en la habilidad Intimidar. \nResistencia Incansable: Cuando te ves reducido a 0 Puntos de Golpe pero no estás totalmente muerto, puedes volver a tener 1 punto de golpe en su lugar. No puedes volver usar este rasgo hasta que no hayas completado un descanso prolongado. \nAtaques Salvajes: Cuando saques un impacto crítico con un ataque con arma cuerpo a cuerpo, puedes tirar otra vez uno de los dados de daño del arma y añadirlo al daño extra por el impacto crítico. \nIdiomas. Puedes hablar, leer y escribir Común y Orco. El Orco es un idioma estridente y áspero con fuertes consonantes. No tiene alfabeto propio pero se escribe con el alfabeto enano."
//   ],
// }

// function crearNuevoPersonaje() {
//   const razaClaseArray = obtenerRazaClase();
//   const raza = limpiarYNormalizar(razaClaseArray[0]);
//   const claseJuego = limpiarYNormalizar(razaClaseArray[1]);

//   if (!RAZAS_VALIDAS.includes(raza) || !CLASES_VALIDAS.includes(claseJuego)) {
//       return null; 
//   }

//   const caracteristicas = obtenerCaracteristicas();
//   if (!caracteristicas) {

//     return null;
// }
//   const resultado = aplicarModificadoresRaza(caracteristicas, raza);
//   const personaje = new Personaje(raza, claseJuego, ...resultado.caracteristicas, resultado.velocidad, resultado.vision, resultado.aptitudes);
//   personaje.establecerHPInicial();
//   personaje.establecerEquipamientoInicial();
//   personaje.establecerHabilidadesIniciales();

//   return personaje;
// }

// // Aplica modificadores raciales a las características del personaje según la raza seleccionada.
// function aplicarModificadoresRaza(caracteristicas, raza) {
//   const modificadoresPorRaza = {
//       enano: {modConstitucion: 2, velocidad: 25, vision: 60, },
//       elfo: {modDestreza: 2, velocidad: 30, vision: 60},
//       mediano: {modDestreza: 2, velocidad: 25},
//       humano: {modFuerza: 1, modDestreza: 1, modConstitucion: 1, modSabiduria: 1, modInteligencia: 1, modCarisma: 1, velocidad: 30},
//       gnomo: {modInteligencia: 2, velocidad: 25, vision: 60},
//       semielfo: {modCarisma: 2, modDestreza: 1, velocidad: 30, vision: 60},
//       semiorco: {modFuerza: 2, modConstitucion: 1, velocidad: 30, vision: 60},
//   }
//   const modRza = modificadoresPorRaza[raza] || {};
//   const modFuerza = modRza.modFuerza || 0;
//   const modDestreza = modRza.modDestreza || 0;
//   const modConstitucion = modRza.modConstitucion || 0;
//   const modSabiduria = modRza.modSabiduria || 0;
//   const modInteligencia = modRza.modInteligencia || 0;
//   const modCarisma = modRza.modCarisma || 0;
//   const velocidad = modRza.velocidad || 30;
//   const vision = modRza.vision || 0;
//   const aptitudes = aptitudesRacialesPorRaza[raza] ? aptitudesRacialesPorRaza[raza].join(", ") : "Ninguna";

//   const caracteristicasModificadas = caracteristicas.map((stat, index) => {
//     switch (index) {
//         case 0: return stat + modFuerza;
//         case 1: return stat + modDestreza;
//         case 2: return stat + modConstitucion;
//         case 3: return stat + modSabiduria;
//         case 4: return stat + modInteligencia;
//         case 5: return stat + modCarisma;
//         default: return stat;
//     }
//   } );

//   return {
//       caracteristicas: caracteristicasModificadas,
//       velocidad: velocidad,
//       vision: vision,
//       aptitudes: aptitudes
//   };
           
// }
// // FUNCION Q ARROJA ERRORES EN EL FORMULARIO CUANDO CREAMOS A NUEVO PERSONAJE
// function crearPersonaje() {
//   const personaje = crearNuevoPersonaje();
//   if (!personaje) {
//       Swal.fire({
//           icon: 'error',
//           title: 'Error',
//           text: 'Error al crear el personaje. Por favor, revisa tus entradas.'
//       });
//       return;
//   }
  
//   Swal.fire({
//       icon: 'info',
//       title: 'Información del Personaje',
//       html: personaje.obtenerCaracteristicas(),
//       showCloseButton: true, 
//       showCancelButton: true, 
//       focusConfirm: false,
//       confirmButtonText: 'Guardar',
//       cancelButtonText: 'Borrar',
//       reverseButtons: true
//     }).then((result) => {
//       if (result.isConfirmed) {          
//           localStorage.setItem('personajeGuardado', JSON.stringify(personaje));
//           window.location.href = './pages/personaje.html'; 
//       } else if (result.dismiss === Swal.DismissReason.cancel) {          
//           Swal.fire('Borrado!', 'Tu personaje ha sido borrado.', 'error');
//       }
//     });
// }
// // AGREGAMOS IMAGENES AL PERSONAJE CARGADO EN PERSONAJE.HTML
// function establecerImagenRaza(raza) {
//   const imgElement = document.getElementById('imagenRaza');
//   let imagePath = "../assets/"; 

//   switch (raza) {
//       case 'enano':
//           imagePath += "../assets/enano.webp"; 
//           break;
//       case 'elfo':
//           imagePath += "../assets/elfo.webp"; 
//           break;
//       case 'mediano':
//           imagePath += "../assets/mediano.webp"; 
//           break;
//       case 'humano':
//           imagePath += "../assets/humano.webp"; 
//           break;
//       case 'gnomo':
//           imagePath += "../assets/gnomo.webp"; 
//           break;
//       case 'semielfo':
//           imagePath += "../assets/semielfo.webp"; 
//           break;
//       case 'semiorco':
//           imagePath += "../assets/semiorco.webp"; 
//           break;
     
//   }

//   imgElement.src = imagePath;
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const camposCaracteristicas = [
//     document.getElementById('fuerza'),
//     document.getElementById('destreza'),
//     document.getElementById('constitucion'),
//     document.getElementById('inteligencia'),
//     document.getElementById('sabiduria'),
//     document.getElementById('carisma')
//   ];

//   camposCaracteristicas.forEach(campo => {
//     campo.addEventListener('input', actualizarContador);
//   });

//   function actualizarContador() {
//     const totalUsado = camposCaracteristicas.reduce((suma, campo) => suma + (Number(campo.value) || 0), 0);
//     const puntosDisponibles = 78 - totalUsado;
//     document.getElementById('puntosDisponibles').innerText = puntosDisponibles;
//   }

//   const botonCrear = document.getElementById('crearPersonajeBtn');
//   if (botonCrear) {
//     botonCrear.addEventListener('click', crearPersonaje);
//   }
  
//   if (window.location.href.includes('personaje.html')) {
//     const personaje = JSON.parse(localStorage.getItem('personajeGuardado'));
      
//     if (personaje) {
//       const divPersonaje = document.getElementById('infoPersonaje');
//       if (divPersonaje) {
//           divPersonaje.innerHTML = `
//           Raza: ${personaje.raza}<br>
//           Clase: ${personaje.claseJuego}<br>
//           Fuerza: ${personaje.fuerza}<br>
//           Destreza: ${personaje.destreza}<br>
//           Constitución: ${personaje.constitucion}<br>
//           Inteligencia: ${personaje.inteligencia}<br>
//           Sabiduría: ${personaje.sabiduria}<br>
//           Carisma: ${personaje.carisma}<br>
//           Velocidad: ${personaje.velocidad}<br>
//           Visión: ${personaje.vision}<br>
//           Aptitudes Raciales: ${personaje.aptitudes}<br>
//           HP: ${personaje.hp}<br>
//           Bonificador de Competencia: ${personaje.bonificadorCompetencia}<br>
//           Equipamiento: ${personaje.equipamiento.join(", ")}<br>
//           Habilidades: ${personaje.habilidades.join(", ")}<br>
//           `;
//           establecerImagenRaza(personaje.raza);
//       }
//     } else {
//       Swal.fire({
//           icon: 'error',
//           title: 'Error',
//           text: 'No se encontró un personaje guardado.'
//       });
//     }
//   }
// });
