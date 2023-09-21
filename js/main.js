let raza = prompt("Seleccione raza: (Puede elegir entre: elfo, humano, enano, gnomo, mediano, semielfo, semiorco )")

switch(raza){

    case "enano":
        console.log("Las clases predilectas para enano son: Guerrero, Clerigo ");
        break;

    case "elfo":
        console.log("Las clases predilectas para elfo son: Explorador, Druida, Guerrero");
        break;

    case "mediano":
        console.log("Las clases predilectas para mediano son: Picaro, Hechicero, Bardo");
        break;

    case "humano":
        console.log("Los humanos no tienen clase predilecta");
        break;

    case "gnomo":
        console.log("Las clases preidlectas para gnomo son: Picaro, Druida, Mago");
        break;

    case "semielfo":
        console.log("Las clases predilectas para semielfo son : Bardo, Brujo, Paladin, Hechicero");
        break;
    case "semiorco":
        console.log("Las clases predilectas para semiorco son : Barbaro, Guerrero, Explorador");
        break;

    default:
        prompt("Ingrese una raza")
}

// let clase = prompt("Seleccione una clase: (Eliga entre: Barbaro, Bardo, Brujo, Clerigo, Druida, Explorador, Guerrero, Hechicero, Mago, Monje, Paldin, Picaro )")

// switch(raza){

//     case "Barbaro||barbaro"
// }