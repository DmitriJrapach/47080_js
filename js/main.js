class Personaje {
  constructor(raza, clase, fuerza, destreza, constitucion, sabiduria, inteligencia, carisma, velocidad, vision, aptitudes) {
      this.raza = raza;
      this.clase = clase;
      this.fuerza = fuerza;
      this.destreza = destreza;
      this.constitucion = constitucion;
      this.sabiduria = sabiduria;
      this.inteligencia = inteligencia;
      this.carisma = carisma;
      this.velocidad = velocidad
      this.vision = vision
      this.aptitudes = aptitudes
  }
  obtener_caracteristicas(){
      return "Raza: " + this.raza + ", Clase: " + this.clase  + ", Fuerza: " + this.fuerza + ", Destreza: " + this.destreza + ", Constitucion: " + this.constitucion + ", Sabiduria: " + this.sabiduria + ", Inteligencia: " + this.inteligencia + ", Carisma: " + this.carisma + ", Velocidad:" + this.velocidad + ", Vision en oscuridad: " + this.vision + ", Aptitudes raciales: " + this.aptitudes;
  }
}

function obtener_raza_clase() {
  const raza_clase = prompt('Ingrese raza y clase (ejem: elfo explorador)');
  return raza_clase.toLowerCase().split(' ');
}

function obtener_caracteristicas() {
  let caracteristicas = [];
  let suma_caracteristicas = 0;

  while (caracteristicas.length !== 6 || suma_caracteristicas > 78) {
      caracteristicas = prompt('Ingrese sus tiradas de caracteristicas, separadas por espacio en el siguiente orden: Fuerza, Destreza, Constitucion, Sabiduria, Inteligencia, Carisma. Cada una de las caracteristicas no puede ser menor a 8 y mayor a 18 y el total no puede superar 78 puntos (ejem: 18 16 14 12 10 8)').split(' ').map(Number);
      
      if (caracteristicas.length === 6) {
          suma_caracteristicas = caracteristicas.reduce((total, stat) => total + stat, 0);
          
          if (suma_caracteristicas > 78) {
              alert("La suma total de las características no puede exceder los 78 puntos.");
          }
          
          for (let i = 0; i < caracteristicas.length; i++) {
              if (caracteristicas[i] < 8 || caracteristicas[i] > 18) {
                  alert(`La característica #${i+1} está fuera de rango. Debe estar entre 8 y 18.`);
              }
          }
      } else {
          alert("Debes ingresar exactamente 6 valores para las características.");
      }
  }
  return caracteristicas;
}

function validar_caracteristicas(caracteristicas) {
  return caracteristicas.every(stat => stat >= 8 && stat <= 18);
}

const aptitudesRacialesPorRaza = {
  enano: [
    "Resistencia Enana: Tienes ventaja en las tiradas de salvación contra veneno, y posees resistencia contra el daño por veneno. Entrenamiento de Combate Enano: Eres competente con el hacha de batalla, hacha de mano, martillo arrojadizo y martillo de guerra. Competencia con Herramientas: Ganas competencia con unas herramientas de artesano a tu elección: herramientas de herrero, materiales de cervecería o herramientas de albañil. Afinidad con la Piedra: Cuando quiera que hagas una  prueba de Inteligencia (Historia) relacionada con el origen de un trabajo hecho en piedra, eres considerado competente en la habilidad de Historia y añades el doble de tu bonificador de competencia a la tirada, en lugar de tu bonificador de competencia normal. Idiomas: Puedes hablar, leer y escribir Común y Enano. El Enano está lleno de consonantes duras y sonidos guturales, y esas características se vierten en cualquier otro idioma que el enano pueda hablar."     
  ],
  elfo: [
    "Ascendencia Feérica. Tienes ventaja en las tiradas de salvación contra Encantamiento, y no puedes ser dormido mediante la magia. Trance. Los elfos no necesitan dormir. En lugar de eso, meditan profundamente, permaneciendo semiconscientes durante 4 horas al día. (La palabra en Común para tal meditación es “trance”). Mientras meditas, puedes soñar en cierta manera; tales sueños son en realidad ejercicios mentales que se han convertido en un reflejo a lo largo de años de práctica. Tras descansar de esta manera, obtienes el mismo beneficio que un humano tras 8 horas de sueño. Idiomas. Sabes hablar, leer y escribir en Común y Élfico. El élfico es fluido, de entonación sutil y gramática intrincada. La literatura élfica es rica y variada, y sus canciones y poemas son famosos entre las otras razas. Muchos bardos aprenden su idioma para poder añadir baladas élficas a sus repertorios."
    
  ],
  mediano: [
    "Suertudo. Cuando obtienes un 1 en una tirada de ataque, prueba de característica o tirada de salvación, puedes volver a tirar el dado y debes usar la puntuación obtenida en la nueva tirada. Valiente. Tienes ventaja en las tiradas de salvación en contra de ser asustado. Agilidad Mediana. Puedes moverte a través del espacio de cualquier criatura que sea de un tamaño mayor que el tuyo. Idiomas. Puedes hablar, leer y escribir Común y Mediano. El idioma mediano no es secreto pero los medianos son reacios a compartirlos con otros. Escriben muy poco, así que no tienen una gran cantidad de literatura. Su tradición oral, sin embargo, es muy fuerte. Casi todos los medianos hablan común para conversar con la gente en las tierras donde viven o a través de las que están viajando."
  ],
  humano: [
    "Puedes hablar, leer y escribir Común y una lengua extra de tu elección. Los humanos normalmente aprenden lenguas de otras personas con las que tienen trato, incluyendo dialectos ocultos. Son aficionados a enriquecer su lenguaje con palabras que toman prestadas de otras lenguas: maldiciones orcas, expresiones musicales élficas, frases militares enanas y ese tipo de cosas."
  ],
  gnomo: [
    "Astucia Gnoma. Obtienes ventaja en todas tus tiradas de salvación de Inteligencia, Sabiduría y Carisma contra magia. Idiomas. Puedes hablar, leer y escribir Común y Gnómico. El idioma gnómico, que usa el alfabeto enano, es conocido por sus tratados técnicos y sus catálogos de conocimiento sobre el mundo natural."
  ],
  semielfo: [
    "Ascendencia Feérica. Tienes ventaja en las tiradas de salvación contra Encantamiento, y no puedes ser dormido mediante la magia. Versatilidad con Habilidades. Ganas competencia en dos habilidades a tu elección. Idiomas. Puedes hablar, leer y escribir Común, Élfico y otro idioma de tu elección."
  ],
  semiorco: [
    "Amenazante. Ganas competencia en la habilidad Intimidar. Resistencia Incansable. Cuando te ves reducido a 0 Puntos de Golpe pero no estás totalmente muerto, puedes volver a tener 1 punto de golpe en su lugar. No puedes volver usar este rasgo hasta que no hayas completado un descanso prolongado. Ataques Salvajes. Cuando saques un impacto crítico con un ataque con arma cuerpo a cuerpo, puedes tirar otra vez uno de los dados de daño del arma y añadirlo al daño extra por el impacto crítico. Idiomas. Puedes hablar, leer y escribir Común y Orco. El Orco es un idioma estridente y áspero con fuertes consonantes. No tiene alfabeto propio pero se escribe con el alfabeto enano."
  ],
}
function aplicar_modificadores_raza(caracteristicas, raza) {
  const modificadores_por_raza = {
      enano: {mod_constitucion: 2, velocidad: 25, vision: 60, },
      elfo: {mod_destreza: 2, velocidad: 30, vision: 60},
      mediano: {mod_destreza: 2, velocidad: 25},
      humano: {mod_fuerza: 1, mod_destreza: 1, mod_constitucion: 1, mod_sabiduria: 1, mod_inteligencia: 1, mod_carisma: 1, velocidad: 30},
      gnomo: {mod_inteligencia: 2, velocidad: 25, vision: 60},
      semielfo: {mod_carisma: 2, mod_destreza: 1, velocidad: 30, vision: 60},
      semiorco: {mod_fuerza: 2, mod_constitucion: 1, velocidad: 30, vision: 60},
  }
  const mod_rza = modificadores_por_raza[raza] || {};
  const mod_fuerza = mod_rza.mod_fuerza || 0;
  const mod_destreza = mod_rza.mod_destreza || 0;
  const mod_constitucion = mod_rza.mod_constitucion || 0;
  const mod_sabiduria = mod_rza.mod_sabiduria || 0;
  const mod_inteligencia = mod_rza.mod_inteligencia || 0;
  const mod_carisma = mod_rza.mod_carisma || 0;

  const velocidad = mod_rza.velocidad || 30;
  const vision = mod_rza.vision || 0;
  const aptitudes = aptitudesRacialesPorRaza[raza] ? aptitudesRacialesPorRaza[raza].join(", ") : "Ninguna";

  const caracteristicasModificadas = caracteristicas.map((stat, index) => {
    switch (index) {
        case 0: return stat + mod_fuerza;
        case 1: return stat + mod_destreza;
        case 2: return stat + mod_constitucion;
        case 3: return stat + mod_sabiduria;
        case 4: return stat + mod_inteligencia;
        case 5: return stat + mod_carisma;
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

const [raza, clase] = obtener_raza_clase();
const caracteristicas = obtener_caracteristicas();

if (validar_caracteristicas(caracteristicas)) {
  const result = aplicar_modificadores_raza(caracteristicas, raza);
  const personaje = new Personaje(raza, clase, ...result.caracteristicas, result.velocidad, result.vision, result.aptitudes);
  console.log(personaje.obtener_caracteristicas());    
}


else{
  console.log('Las caracteristicas ingresadas no cumplen con los requisitos');
}