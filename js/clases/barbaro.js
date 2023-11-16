
const progresionBarbaro = {
  clase: "Bárbaro",
  descripcion: "Un guerrero feroz y salvaje.",
  rasgosPorNivel: {
    1: {
      descripcion: "Furia",
      caracteristicas: ["Ventaja en pruebas y salvaciones de Fuerza", "Bonificador al daño con ataques cuerpo a cuerpo", "Resistencia al daño contundente, perforante y cortante"],
    },
    2: {
      descripcion: "Defensa sin armadura",
      caracteristicas: ["Clase de armadura de 10 + Modificador de Destreza + Modificador de Constitución", "Puede usar un escudo"],
    },
    3: {
      descripcion: "Senda Primaria",
      caracteristicas: ["Elige entre Senda del Berserker o Senda del Guerrero Totémico"],
    },
    4: {
      descripcion: "Mejora de puntuación de característica",
      caracteristicas: ["Incrementa una puntuación de característica en 2 puntos, o dos puntuaciones en 1 punto (máximo de 20)"],
    },
    5: {
      descripcion: "Ataque Extra",
      caracteristicas: ["Puede atacar dos veces con la acción Atacar"],
    },
    6: {
      descripcion: "Aspecto de la Bestia",
      caracteristicas: ["Dependiendo de la senda, obtiene beneficios mágicos"],
    },
    7: {
      descripcion: "Instinto Salvaje",
      caracteristicas: ["Ventaja en las tiradas de iniciativa", "Puede actuar normalmente si es sorprendido en combate"],
    },
    8: {
      descripcion: "Mejora de puntuación de característica",
      caracteristicas: ["Incrementa una puntuación de característica en 2 puntos, o dos puntuaciones en 1 punto (máximo de 20)"],
    },
    9: {
      descripcion: "Crítico Brutal",
      caracteristicas: ["Dado de daño adicional en golpes críticos"],
    },
    10: {
      descripcion: "Represalia",
      caracteristicas: ["Puede realizar un ataque de reacción al recibir daño de criatura a 5 pies"],
    },
    11: {
      descripcion: "Furia Implacable",
      caracteristicas: ["Puede hacer una tirada de salvación de Constitución al llegar a 0 puntos de golpe"],
    },
    12: {
      descripcion: "Mejora de puntuación de característica",
      caracteristicas: ["Incrementa una puntuación de característica en 2 puntos, o dos puntuaciones en 1 punto (máximo de 20)"],
    },
    13: {
      descripcion: "Crítico Brutal Mejorado",
      caracteristicas: ["Dado de daño adicional en golpes críticos (dos dados)"],
    },
    14: {
      descripcion: "Sintonía Totémica",
      caracteristicas: ["Dependiendo de la senda, obtiene beneficios mágicos"],
    },
    15: {
      descripcion: "Furia Persistente",
      caracteristicas: ["La furia solo termina si cae inconsciente o se cancela"],
    },
    16: {
      descripcion: "Mejora de puntuación de característica",
      caracteristicas: ["Incrementa una puntuación de característica en 2 puntos, o dos puntuaciones en 1 punto (máximo de 20)"],
    },
    17: {
      descripcion: "Crítico Brutal Mejorado",
      caracteristicas: ["Dado de daño adicional en golpes críticos (tres dados)"],
    },
    18: {
      descripcion: "Fuerza Indómita",
      caracteristicas: ["Usa tu puntuación de Fuerza en pruebas en lugar de la puntuación total"],
    },
    19: {
      descripcion: "Mejora de puntuación de característica",
      caracteristicas: ["Incrementa una puntuación de característica en 2 puntos, o dos puntuaciones en 1 punto (máximo de 20)"],
    },
    20: {
      descripcion: "Campeón Primario",
      caracteristicas: ["Puntuaciones de Fuerza y Constitución incrementadas en 4 (máximo de 24)"],
    },
  },
};

const progresionBarbaroJSON = JSON.stringify(progresionBarbaro, null, 2)


export { progresionBarbaro };