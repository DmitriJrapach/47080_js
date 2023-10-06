class InterfazUsuario {
  static obtenerEntrada(mensaje) {
      return prompt(mensaje);
  }

  static mostrarMensaje(mensaje) {
      alert(mensaje);
  }
}

class Personaje {
  constructor(raza, claseJuego, fuerza, destreza, constitucion, sabiduria, inteligencia, carisma, velocidad, vision, aptitudes) {
      this.raza = raza;
      this.claseJuego = claseJuego; 
      this.fuerza = fuerza;
      this.destreza = destreza;
      this.constitucion = constitucion;
      this.sabiduria = sabiduria;
      this.inteligencia = inteligencia;
      this.carisma = carisma;
      this.velocidad = velocidad;
      this.vision = vision;
      this.aptitudes = aptitudes;
      this.hp = 0;
      this.nivel = 1;
      this.bonificadorCompetencia = 2;
  }

  obtenerCaracteristicas() {
    return `Raza: ${this.raza},
    Clase: ${this.claseJuego},
    Fuerza: ${this.fuerza},
    Destreza: ${this.destreza},
    Constitucion: ${this.constitucion},
    Sabiduria: ${this.sabiduria},
    Inteligencia: ${this.inteligencia},
    Carisma: ${this.carisma},
    Velocidad: ${this.velocidad},
    Vision en oscuridad: ${this.vision},
    HP: ${this.hp},
    Bonificador de Competencia: ${this.bonificadorCompetencia},
    Aptitudes raciales: ${this.aptitudes},
    ${this.mostrarEquipamiento()},
    ${this.mostrarHabilidades()}`;
  }

  establecerHPInicial() {
    const modConstitucion = this.obtenerModificador(this.constitucion);
    this.hp = ClaseJuego.dadoVidaMaximo[this.claseJuego] + modConstitucion;
  }

  obtenerModificador(caracteristica) {
    return Math.floor((caracteristica - 10) / 2);
  }

  establecerEquipamientoInicial() {
    this.equipamiento = ClaseJuego.equipamientoInicial[this.claseJuego] || [];
  }

  establecerHabilidadesIniciales() {
    this.habilidades = ClaseJuego.habilidadesPorClase[this.claseJuego] || [];
  }

  mostrarEquipamiento() {
    return `Equipamiento: ${this.equipamiento.join(", ")}`;
  }

  mostrarHabilidades() {
    return `Habilidades: ${this.habilidades.join(", ")}`;
  }
}

const ClaseJuego = {
  dadoVidaMaximo: {
      barbaro: 12,
      bardo: 8,
      brujo: 8,
      clerigo: 8,
      druida: 8,
      explorador: 10,
      guerrero: 10,
      hechicero: 6,
      mago: 6,
      monje: 8,
      paladin: 10,      
      pícaro: 8,
      
  },
  equipamientoInicial: {
    barbaro: ["Una gran hacha o cualquier arma marcial cuerpo a cuerpo. Dos hachas de mano o cualquier arma simple", "sin armadura", "Un equipo de explorador y cuatro jabalinas."],
    bardo: ["Un estoque, una espada larga o  cualquier arma sencilla. Una daga", "armadura de cuero", "Un equipo de diplomático o un equipo de actor. Una lira o cualquier otro instrumento musical."],
    brujo: ["Una ballesta ligera y 20 virotes o cualquier arma simple. Dos dagas ", "armadura de cuero", "Una bolsa de componentes de conjuros o un foco arcano. Un equipo de erudito o un equipo para dungeons."],
    clerigo: ["Una maza o un martillo de guerra (si eres competente). Una ballesta ligera y 20 virotes o cualquier arma simple.", "Cota de escamas, armadura de cuero o cota de malla (si eres competente). Un escudo y un símbolo sagrado.", "Un equipo de sacerdote o un equipo de explorador."],
    druida: ["Una cimitarra o cualquier arma simple cuerpo a cuerpo. Un escudo de madera o cualquier arma simple.", "Armadura de cuero", "Un equipo de explorador y un foco-    druídico."],
    explorador: ["Dos espadas cortas o dos armas simples cuerpo a cuerpo, un arco largo y un carcaj con 20 flechas. ", "Una cota de escamas o armadura de cuero", "Un equipo de dungeon o (b) un equipo de explorador."],
    guerrero: ["Una arma marcial y un escudo o dos armas marciales. Una ballesta ligera y 20 virotes o dos hachas de mano, arco largo y carcaj con 20 flechas. ", "Una cota de malla o armadura de cuero", "Un equipo para dungeon o un equipo de explorador"],
    hechicero: ["Una ballesta ligera y 20 virotes o cualquier arma simple. Dos dagas.", "Una bolsa de componentes de conjuro o un foco arcano.", "Un equipo para dungeons un equipo de explorador."],
    mago: ["Un bastón o una daga.", "Una bolsa de componentes de conjuro o un foco arcano. Un libro de conjuros.", "Un equipo de erudito o un equipo de explorador"],
    monje: ["Una espada corta o cualquier arma simple, 10 dardos. ", "Un equipo de dungeon o un equipo de explorador."],
    paladin: ["Un arma marcial y un escudo o dos armas marciales. Cinco jabalinas o cualquier arma cuerpo a cuerpo simple.", "Cota de mallas y un símbolo sagrado.", "Un equipo de sacerdote o un equipo de explorador."],      
    pícaro: ["Un estoque o una espada corta. Un arco pequeño y carcaj con 20 flechas o una espada corta. Dos dagas", "Armadura de cuero", "Un equipo de ladrón, un equipo para dungeons o un equipo de explorador, herramientas de ladrón."],
       
  },

  habilidadesPorClase: {
    barbaro: ["Furia", "Defensa sin armadura"],
    bardo: ["Lanzamiento de Conjuros", "Inspiración de Bardo (d6)"],
    brujo: ["Patrón de Otro Mundo", "Magia de Pacto"],
    clerigo: ["Lanzamiento de Conjuros", "Dominio Divino"],
    druida: ["Lengua Druídica", "Lanzamiento de Conjuros "],
    explorador: ["Enemigo Predilecto", "Explorador de lo Natural"],
    guerrero: ["Estilo de Combate", "Nuevas Energías"],
    hechicero: ["Lanzamiento de Conjuros", "Origen de Hechicería"],
    mago: ["Lanzamiento de Conjuros", "Recuperación Arcana "],
    monje: ["Defensa sin Armadura", "Artes Marciales"],
    paladin: ["Imposición de Manos", "Sentido Divino"],      
    pícaro: ["Ataque Furtivo", "Experto", "Jerga de Ladrones"],
       
  }
}

//  Solicita al usuario ingresar su raza y clase de personaje y devuelve estos valores en un array.

function obtenerRazaClase() {
  const razaClase = InterfazUsuario.obtenerEntrada('Ingrese raza y clase (ejem: elfo explorador)');
  return razaClase.toLowerCase().split(' ').map(limpiarYNormalizar);
}

// Solicita al usuario ingresar sus características y asegura que cumplan con ciertas restricciones.

function obtenerCaracteristicas() {
  let caracteristicas = [];
  let suma_caracteristicas = 0;

  while (caracteristicas.length !== 6 || suma_caracteristicas > 78) {
      caracteristicas = InterfazUsuario.obtenerEntrada('Ingrese sus tiradas de caracteristicas, separadas por espacio en el siguiente orden: Fuerza, Destreza, Constitucion, Sabiduria, Inteligencia, Carisma. Cada una de las caracteristicas no puede ser menor a 8 y mayor a 18 y el total no puede superar 78 puntos (ejem: 18 16 14 12 10 8)').split(' ').map(Number);
      
      if (caracteristicas.length === 6) {
          suma_caracteristicas = caracteristicas.reduce((total, stat) => total + stat, 0);
          
          if (suma_caracteristicas > 78) {
              InterfazUsuario.mostrarMensaje("La suma total de las características no puede exceder los 78 puntos.");
          }
          
          for (let i = 0; i < caracteristicas.length; i++) {
              if (caracteristicas[i] < 8 || caracteristicas[i] > 18) {
                  InterfazUsuario.mostrarMensaje(`La característica #${i+1} está fuera de rango. Debe estar entre 8 y 18.`);
              }
          }
      } else {
          InterfazUsuario.mostrarMensaje("Debes ingresar exactamente 6 valores para las características.");
      }
  }
  return caracteristicas;
}
// Función auxiliar para limpiar y normalizar strings.
function limpiarYNormalizar(str) {
  let resultado = str.trim(); 
  resultado = resultado.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); 
  return resultado;
}
const RAZAS_VALIDAS = ["enano", "elfo", "mediano", "humano", "gnomo", "semielfo", "semiorco"];
const CLASES_VALIDAS = ["barbaro", "bardo", "brujo", "clerigo", "druida", "explorador", "guerrero", "hechicero", "mago", "monje", "paladin", "picaro", "pícaro"];

const aptitudesRacialesPorRaza = {
  enano: [
    "Resistencia Enana: Tienes ventaja en las tiradas de salvación contra veneno, y posees resistencia contra el daño por veneno.\nEntrenamiento de Combate Enano: Eres competente con el hacha de batalla, hacha de mano, martillo arrojadizo y martillo de guerra. \nCompetencia con Herramientas: Ganas competencia con unas herramientas de artesano a tu elección: herramientas de herrero, materiales de cervecería o herramientas de albañil. \nAfinidad con la Piedra: Cuando quiera que hagas una  prueba de Inteligencia (Historia) relacionada con el origen de un trabajo hecho en piedra, eres considerado competente en la habilidad de Historia y añades el doble de tu bonificador de competencia a la tirada, en lugar de tu bonificador de competencia normal. \nIdiomas: Puedes hablar, leer y escribir Común y Enano. El Enano está lleno de consonantes duras y sonidos guturales, y esas características se vierten en cualquier otro idioma que el enano pueda hablar."     
  ],
  elfo: [
    "Ascendencia Feérica: Tienes ventaja en las tiradas de salvación contra Encantamiento, y no puedes ser dormido mediante la magia. \nTrance: Los elfos no necesitan dormir. En lugar de eso, meditan profundamente, permaneciendo semiconscientes durante 4 horas al día. (La palabra en Común para tal meditación es “trance”). Mientras meditas, puedes soñar en cierta manera; tales sueños son en realidad ejercicios mentales que se han convertido en un reflejo a lo largo de años de práctica. Tras descansar de esta manera, obtienes el mismo beneficio que un humano tras 8 horas de sueño. \nIdiomas: Sabes hablar, leer y escribir en Común y Élfico. El élfico es fluido, de entonación sutil y gramática intrincada. La literatura élfica es rica y variada, y sus canciones y poemas son famosos entre las otras razas. Muchos bardos aprenden su idioma para poder añadir baladas élficas a sus repertorios."
    
  ],
  mediano: [
    "Suertudo: Cuando obtienes un 1 en una tirada de ataque, prueba de característica o tirada de salvación, puedes volver a tirar el dado y debes usar la puntuación obtenida en la nueva tirada. \nValiente: Tienes ventaja en las tiradas de salvación en contra de ser asustado. \nAgilidad Mediana: Puedes moverte a través del espacio de cualquier criatura que sea de un tamaño mayor que el tuyo. \nIdiomas: Puedes hablar, leer y escribir Común y Mediano. El idioma mediano no es secreto pero los medianos son reacios a compartirlos con otros. Escriben muy poco, así que no tienen una gran cantidad de literatura. Su tradición oral, sin embargo, es muy fuerte. Casi todos los medianos hablan común para conversar con la gente en las tierras donde viven o a través de las que están viajando."
  ],
  humano: [
    "Puedes hablar, leer y escribir Común y una lengua extra de tu elección. Los humanos normalmente aprenden lenguas de otras personas con las que tienen trato, incluyendo dialectos ocultos. Son aficionados a enriquecer su lenguaje con palabras que toman prestadas de otras lenguas: maldiciones orcas, expresiones musicales élficas, frases militares enanas y ese tipo de cosas."
  ],
  gnomo: [
    "Astucia Gnoma: Obtienes ventaja en todas tus tiradas de salvación de Inteligencia, Sabiduría y Carisma contra magia. \nIdiomas: Puedes hablar, leer y escribir Común y Gnómico. El idioma gnómico, que usa el alfabeto enano, es conocido por sus tratados técnicos y sus catálogos de conocimiento sobre el mundo natural."
  ],
  semielfo: [
    "Ascendencia Feérica: Tienes ventaja en las tiradas de salvación contra Encantamiento, y no puedes ser dormido mediante la magia. \nVersatilidad con Habilidades: Ganas competencia en dos habilidades a tu elección. \nIdiomas: Puedes hablar, leer y escribir Común, Élfico y otro idioma de tu elección."
  ],
  semiorco: [
    "Amenazante: Ganas competencia en la habilidad Intimidar. \nResistencia Incansable: Cuando te ves reducido a 0 Puntos de Golpe pero no estás totalmente muerto, puedes volver a tener 1 punto de golpe en su lugar. No puedes volver usar este rasgo hasta que no hayas completado un descanso prolongado. \nAtaques Salvajes: Cuando saques un impacto crítico con un ataque con arma cuerpo a cuerpo, puedes tirar otra vez uno de los dados de daño del arma y añadirlo al daño extra por el impacto crítico. \nIdiomas. Puedes hablar, leer y escribir Común y Orco. El Orco es un idioma estridente y áspero con fuertes consonantes. No tiene alfabeto propio pero se escribe con el alfabeto enano."
  ],
}

function crearNuevoPersonaje() {
  const razaClaseArray = obtenerRazaClase();
  const raza = limpiarYNormalizar(razaClaseArray[0]);
  const claseJuego = limpiarYNormalizar(razaClaseArray[1]);

  if (!RAZAS_VALIDAS.includes(raza) || !CLASES_VALIDAS.includes(claseJuego)) {
      return null; 
  }

  const caracteristicas = obtenerCaracteristicas();
  const resultado = aplicarModificadoresRaza(caracteristicas, raza);
  const personaje = new Personaje(raza, claseJuego, ...resultado.caracteristicas, resultado.velocidad, resultado.vision, resultado.aptitudes);
  personaje.establecerHPInicial();
  personaje.establecerEquipamientoInicial();
  personaje.establecerHabilidadesIniciales();

  return personaje;
}

// Aplica modificadores raciales a las características del personaje según la raza seleccionada.
function aplicarModificadoresRaza(caracteristicas, raza) {
  const modificadoresPorRaza = {
      enano: {modConstitucion: 2, velocidad: 25, vision: 60, },
      elfo: {modDestreza: 2, velocidad: 30, vision: 60},
      mediano: {modDestreza: 2, velocidad: 25},
      humano: {modFuerza: 1, modDestreza: 1, modConstitucion: 1, modSabiduria: 1, modInteligencia: 1, modCarisma: 1, velocidad: 30},
      gnomo: {modInteligencia: 2, velocidad: 25, vision: 60},
      semielfo: {modCarisma: 2, modDestreza: 1, velocidad: 30, vision: 60},
      semiorco: {modFuerza: 2, modConstitucion: 1, velocidad: 30, vision: 60},
  }
  const modRza = modificadoresPorRaza[raza] || {};
  const modFuerza = modRza.modFuerza || 0;
  const modDestreza = modRza.modDestreza || 0;
  const modConstitucion = modRza.modConstitucion || 0;
  const modSabiduria = modRza.modSabiduria || 0;
  const modInteligencia = modRza.modInteligencia || 0;
  const modCarisma = modRza.modCarisma || 0;
  const velocidad = modRza.velocidad || 30;
  const vision = modRza.vision || 0;
  const aptitudes = aptitudesRacialesPorRaza[raza] ? aptitudesRacialesPorRaza[raza].join(", ") : "Ninguna";

  const caracteristicasModificadas = caracteristicas.map((stat, index) => {
    switch (index) {
        case 0: return stat + modFuerza;
        case 1: return stat + modDestreza;
        case 2: return stat + modConstitucion;
        case 3: return stat + modSabiduria;
        case 4: return stat + modInteligencia;
        case 5: return stat + modCarisma;
        default: return stat;
    }
  } );

  return {
      caracteristicas: caracteristicasModificadas,
      velocidad: velocidad,
      vision: vision,
      aptitudes: aptitudes
  };
           
}

document.addEventListener('DOMContentLoaded', () => {
  const botonCrear = document.getElementById('crearPersonaje');
  const info = document.getElementById('infoPersonaje');

  botonCrear.addEventListener('click', () => {
    const personaje = crearNuevoPersonaje();
    if (personaje) {
        mostrarPersonaje(personaje);
    } else {
        info.textContent = "Error al crear el personaje.";
    }
  });
  function mostrarPersonaje(personaje) {
    const tarjetasExistentes = document.querySelectorAll('.card');
    tarjetasExistentes.forEach(tarjeta => tarjeta.remove());

    let card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '40rem';
  
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = `./assets/${personaje.raza.toLowerCase()}.webp`;
    img.alt = `Imagen del ${personaje.raza}`;
    card.appendChild(img);
  
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = personaje.nombre;
    cardBody.appendChild(title);
    // ... puedes agregar más características aquí ...
    card.appendChild(cardBody);
  
    let razaElement = document.createElement('p');
    razaElement.textContent = `Raza: ${personaje.raza}`;
    cardBody.appendChild(razaElement);

    // Clase del juego
    let claseElement = document.createElement('p');
    claseElement.textContent = `Clase: ${personaje.claseJuego}`;
    cardBody.appendChild(claseElement);

    // Fuerza
    let fuerzaElement = document.createElement('p');
    fuerzaElement.textContent = `Fuerza: ${personaje.fuerza}`;
    cardBody.appendChild(fuerzaElement);
  
    // Destreza
    let destrezaElement = document.createElement('p');
    destrezaElement.textContent = `Destreza: ${personaje.destreza}`;
    cardBody.appendChild(destrezaElement);
  
    // Constitucion
    let constitucionElement = document.createElement('p');
    constitucionElement.textContent = `Constitucion: ${personaje.constitucion}`;
    cardBody.appendChild(constitucionElement);
  
    // Sabiduria
    let sabiduriaElement = document.createElement('p');
    sabiduriaElement.textContent = `Sabiduria: ${personaje.sabiduria}`;
    cardBody.appendChild(sabiduriaElement);
  
    // Inteligencia
    let inteligenciaElement = document.createElement('p');
    inteligenciaElement.textContent = `Inteligencia: ${personaje.inteligencia}`;
    cardBody.appendChild(inteligenciaElement);
  
    // Carisma
    let carismaElement = document.createElement('p');
    carismaElement.textContent = `Carisma: ${personaje.carisma}`;
    cardBody.appendChild(carismaElement);

    // Puntos de vida
    let hpElement = document.createElement('p');
    hpElement.textContent = `Puntos de vida: ${personaje.hp}`;
    cardBody.appendChild(hpElement);

    // Velocidad
    let velocidadElement = document.createElement('p');
    velocidadElement.textContent = `Velocidad de movimiento: ${personaje.velocidad}`;
    cardBody.appendChild(velocidadElement);

    // Vision en oscuridad
    let visionElement = document.createElement('p');
    visionElement.textContent = `Vision en oscuridad: ${personaje.vision}`;
    cardBody.appendChild(visionElement);

    // Bonificador de compebonificadorCompetencia
    let bonificadorCompetenciaElement = document.createElement('p');
    bonificadorCompetenciaElement.textContent = `BonificadorCompetencia: ${personaje.bonificadorCompetencia}`;
    cardBody.appendChild(bonificadorCompetenciaElement);
    
    // Habilidades claseas
    let habilidadesElement = document.createElement('p');
    habilidadesElement.textContent = `Habilidades: ${personaje.habilidades.join(", ")}`;
    cardBody.appendChild(habilidadesElement);

    let aptitudesRacialesElement = document.createElement('p');
    aptitudesRacialesElement.textContent = `Aptitudes Raciales: ${personaje.aptitudes}`;
    cardBody.appendChild(aptitudesRacialesElement);
  
    let equipamientoElement = document.createElement('p');
    equipamientoElement.textContent = `Equipamiento Inicial: ${personaje.mostrarEquipamiento()}`;
    cardBody.appendChild(equipamientoElement);

    document.getElementById('infoPersonaje').appendChild(card);
  }

});

