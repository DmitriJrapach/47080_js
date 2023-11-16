
const progresionBardo = {
    clase: "Bardo",
    descripcion: "Maestros de la música, poesía y magia.",
    rasgosPorNivel: {
      1: {
        descripcion: "Lanzamiento de Conjuros",
        caracteristicas: [
          "Conoces dos trucos de tu elección de la lista de conjuros del bardo.",
          "Tienes espacios de conjuro para lanzar conjuros de nivel 1 y superior.",
          "Conoces cuatro conjuros de nivel 1 de tu elección de la lista de conjuros del bardo.",
          "Característica para el Lanzamiento de Conjuros: Carisma es tu característica de lanzamiento.",
          "Conjuración Ritual: Puedes lanzar cualquier conjuro de bardo que conozcas como un ritual si ese conjuro tiene el descriptor ritual.",
          "Foco Arcano: Puedes usar un instrumento musical como foco arcano para tus conjuros de bardo.",
          "Inspiración de Bardo: Puedes inspirar a otros usando una acción adicional en tu turno."
        ],
      },
      2: {
        descripcion: "Trucos",
        caracteristicas: [
          "Aprendes trucos de bardo adicionales en niveles superiores.",
          "Espacios de Conjuro: La tabla Bardo muestra cuántos espacios de conjuro tienes para lanzar tus conjuros de nivel 1 y superior.",
          "Conjuros Conocidos de Nivel 1 y Superior: Conoces cuatro conjuros de nivel 1 de tu elección."
        ],
      },
      3: {
        descripcion: "Colegio de Bardo",
        caracteristicas: ["Eliges entre el Colegio del Conocimiento o el Colegio del Valor."],
      },
      4: {
        descripcion: "Mejora de Puntuación de Característica",
        caracteristicas: ["Incrementas una puntuación de característica en 2 puntos, o dos puntuaciones de característica en 1 punto (máximo de 20)."],
      },
      5: {
        descripcion: "Inspiración Superior",
        caracteristicas: ["Recuperas todos tus usos de Inspiración de Bardo cuando terminas un descanso corto o prolongado."],
      },
      6: {
        descripcion: "Magia de Colegio",
        caracteristicas: ["Aprendes dos conjuros de cualquier clase. Cuentan como conjuros de bardo para ti, pero no se incluyen en la lista de Conjuros Conocidos."],
      },
      7: {
        descripcion: "Colegio de Bardo",
        caracteristicas: ["Obtienes características específicas del Colegio del Conocimiento o el Colegio del Valor, según tu elección."],
      },
      8: {
        descripcion: "Mejora de Puntuación de Característica",
        caracteristicas: ["Incrementas una puntuación de característica en 2 puntos, o dos puntuaciones de característica en 1 punto (máximo de 20)."],
      },
      9: {
        descripcion: "Secretos Mágicos",
        caracteristicas: ["Eliges dos conjuros de cualquier clase. Cuentan como conjuros de bardo para ti y se incluyen en la lista de Conjuros Conocidos."],
      },
      10: {
        descripcion: "Polivalente",
        caracteristicas: ["Añades la mitad de tu bonificador de competencia, redondeado hacia abajo, a cualquier prueba de habilidad que realices que no incluya ya tu bonificador de competencia."],
      },
      11: {
        descripcion: "Colegio de Bardo",
        caracteristicas: ["Obtienes características específicas del Colegio del Conocimiento o el Colegio del Valor, según tu elección."],
      },
      12: {
        descripcion: "Mejora de Puntuación de Característica",
        caracteristicas: ["Incrementas una puntuación de característica en 2 puntos, o dos puntuaciones de característica en 1 punto (máximo de 20)."],
      },
      13: {
        descripcion: "Magia de Colegio Mejorada",
        caracteristicas: ["Aprendes dos conjuros adicionales de cualquier clase. Cuentan como conjuros de bardo para ti, pero no se incluyen en la lista de Conjuros Conocidos."],
      },
      14: {
        descripcion: "Canción de Descanso",
        caracteristicas: ["Puedes usar música o una oración reconfortante para ayudar a revitalizar a tus aliados heridos durante un descanso corto."],
      },
      15: {
        descripcion: "Colegio de Bardo",
        caracteristicas: ["Obtienes características específicas del Colegio del Conocimiento o el Colegio del Valor, según tu elección."],
      },
      16: {
        descripcion: "Mejora de Puntuación de Característica",
        caracteristicas: ["Incrementas una puntuación de característica en 2 puntos, o dos puntuaciones de característica en 1 punto (máximo de 20)."],
      },
      17: {
        descripcion: "Secretos Mágicos Mejorados",
        caracteristicas: ["Aprendes dos conjuros adicionales de cualquier clase. Cuentan como conjuros de bardo para ti y se incluyen en la lista de Conjuros Conocidos."],
      },
      18: {
        descripcion: "Habilidad Incomparable",
        caracteristicas: ["Cuando haces una prueba de habilidad, puedes gastar un uso de Inspiración de Bardo. Tira un dado de Inspiración de Bardo y agrega el resultado a tu prueba de habilidad."],
      },
      19: {
        descripcion: "Mejora de Puntuación de Característica",
        caracteristicas: ["Incrementas una puntuación de característica en 2 puntos, o dos puntuaciones de característica en 1 punto (máximo de 20)."],
      },
      20: {
        descripcion: "Inspiración Superior",
        caracteristicas: ["Cuando tiras iniciativa y no te quedan usos de Inspiración de Bardo, recuperas un uso."],
      },
    },
  };
  
  const progresionBardoJSON = JSON.stringify(progresionBardo, null, 2);
  
  export { progresionBardo };