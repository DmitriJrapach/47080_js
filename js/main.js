let raza = prompt("Seleccione raza: (Puede elegir entre: elfo, humano, enano, gnomo, mediano, semielfo, semiorco )")

switch(raza){

    case "enano":
        console.log("Raza: Enano, las clases predilectas para enano son: Guerrero, Clerigo ");
        break;

    case "elfo":
        console.log("Raza: Elfo, las clases predilectas para elfo son: Explorador, Druida, Guerrero");
        break;

    case "mediano":
        console.log("Raza: Mediano, las clases predilectas para mediano son: Picaro, Hechicero, Bardo");
        break;

    case "humano":
        console.log("Raza: Humano, los humanos no tienen clase predilecta");
        break;

    case "gnomo":
        console.log("Raza: Gnomo, las clases preidlectas para gnomo son: Picaro, Druida, Mago");
        break;

    case "semielfo":
        console.log("Raza: Semielfo, las clases predilectas para semielfo son : Bardo, Brujo, Paladin, Hechicero");
        break;
    case "semiorco":
        console.log("Raza: Semiorco, las clases predilectas para semiorco son : Barbaro, Guerrero, Explorador");
        break;

    default:
        prompt("Ingrese una raza");
}

let clase = prompt("Seleccione una clase: (Eliga entre: barbaro, bardo, brujo, clerigo, druida, explorador, guerrero, hechicero, mago, monje, paldin, picaro )")

if (clase !== " " && clase == "barbaro" || "bardo" || "brujo" || "clerigo" || "druida" || "explorador" || "guerrero" || "hechicero" || "mago" || "monje" || "paladin" || "picaro") {
    console.log("clase: " + clase);
}
else{
    alert("seleccione una clase");
}

let total;

do{
    let fuerza = Number(prompt("ingrese su fuerza"));
    console.log("Fuerza: " + fuerza);

    let destreza = Number(prompt("ingrese su destreza"));
    console.log("Destreza: " + destreza);

    let constitucion = Number(prompt("ingrese su constitucion"));
    console.log("Constitucion: " + constitucion);

    let sabiduria = Number(prompt("ingrese su sabiduria"));
    console.log("Sabiduria: " + sabiduria);

    let inteligencia = Number(prompt("ingrese su inteligencia"));
    console.log("Inteligencia: " + inteligencia);

    let carisma = Number(prompt("ingrese su carisma"));
    console.log("Carisma: " + carisma);

    total = fuerza + destreza + constitucion + sabiduria + inteligencia + carisma ;

    if (total > 78) {
    console.log("El total de puntos es mayor o igual a 78. Vuelva a repartir los puntos.");
    }
    else {
    console.log("Los datos son correctos.");
    }
}
while (total > 78);