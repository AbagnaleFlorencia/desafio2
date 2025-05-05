import { readFileSync } from 'fs';


const cargarPersonas = () => {
    try {
        const data = readFileSync('./personas.json', 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al cargar personas.json:', error.message);
        return [];
    }
};


const calcularPromedioEdad = (personas) => {
    const totalEdad = personas.reduce((suma, persona) => suma + persona.edad, 0);
    console.log("Total de edades:", totalEdad);  
    console.log("Número de personas:", personas.length)
    return Math.round(totalEdad / personas.length);
};


const encontrarMasJoven = (personas) => {
    return personas.reduce((menor, persona) => (persona.edad < menor.edad ? persona : menor));
};


const obtenerNombresGomez = (personas) => {
    return personas
        .filter(persona => persona.apellido === "GOMEZ")
        .map(persona => persona.nombre)
        .sort()
        .join(", ");
};


const sumaEdadesPorLongitudNombreApellido = (personas) => {
    return personas
        .filter(persona => persona.nombre.length % 2 === 0 && persona.apellido.length % 2 !== 0)
        .reduce((suma, persona) => suma + persona.edad, 0);
};


const generarEstadisticasJSON = (personas) => {
    const resultado = {
        mayores: 0,
        menores: 0,
        primeraMitad: 0,
        segundaMitad: 0
    };

    personas.forEach(p => {
        if (p.edad > 18) resultado.mayores++;
        else resultado.menores++;

        const letra = p.apellido[0].toUpperCase();
        if (letra >= 'A' && letra <= 'L') resultado.primeraMitad++;
        else if (letra >= 'M' && letra <= 'Z') resultado.segundaMitad++;
    });

    return resultado;
};


const contarApellidosEspecificos = (personas) => {
    const apellidos = ["CASTILLO", "DIAZ", "FERRER", "PINO", "ROMERO"];
    const conteo = {};

    apellidos.forEach(apellido => {
        conteo[apellido] = personas.filter(persona => persona.apellido.toUpperCase() === apellido).length;
    });

    return conteo;
};

export {
    cargarPersonas,
    calcularPromedioEdad,
    encontrarMasJoven,
    obtenerNombresGomez,
    sumaEdadesPorLongitudNombreApellido,
    generarEstadisticasJSON,
    contarApellidosEspecificos
};
