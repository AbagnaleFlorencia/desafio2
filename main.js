import { cargarPersonas, calcularPromedioEdad, encontrarMasJoven, obtenerNombresGomez, sumaEdadesPorLongitudNombreApellido, generarEstadisticasJSON, contarApellidosEspecificos } from './desafio.js';
import readline from 'readline'; // Cambié require por import

const personas = cargarPersonas();

// Menú interactivo
const mostrarMenu = () => {
  console.log('\n--- Menú ---');
  console.log('1. Promedio de edades');
  console.log('2. Persona más joven');
  console.log('3. Nombres de personas con apellido GOMEZ');
  console.log('4. Suma de edades con nombre par y apellido impar');
  console.log('5. Estadísticas de edades y apellidos');
  console.log('6. Contar personas por apellidos específicos');
  console.log('0. Salir');
  console.log('--------------');
};

// Ejecutar la opción seleccionada
const ejecutarOpcion = (opcion) => {
  switch (opcion) {
    case '1':
      console.log(`Promedio de edades: ${calcularPromedioEdad(personas)}`);
      break;
    case '2':
      const joven = encontrarMasJoven(personas);
      console.log(`Persona más joven: ${joven.nombre} ${joven.apellido}, Edad: ${joven.edad}`);
      break;
    case '3':
      console.log(`Nombres de personas con apellido GOMEZ: ${obtenerNombresGomez(personas)}`);
      break;
    case '4':
      console.log(`Suma de edades con nombre par y apellido impar: ${sumaEdadesPorLongitudNombreApellido(personas)}`);
      break;
    case '5':
      console.log('Estadísticas de edades y apellidos:', generarEstadisticasJSON(personas));
      break;
    case '6':
      const apellidos = ['CASTILLO', 'DIAZ', 'FERRER', 'PINO', 'ROMERO'];
      console.log('Conteo de personas por apellidos:', contarApellidosEspecificos(personas));
      break;
    case '0':
      console.log('¡Hasta luego!');
      process.exit();
      break;
    default:
      console.log('Opción no válida. Intenta de nuevo.');
      break;
  }
};

// Función para ejecutar el menú en consola
const iniciarMenu = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const preguntarOpcion = () => {
    mostrarMenu();
    rl.question('Elige una opción: ', (opcion) => {
      ejecutarOpcion(opcion);
      preguntarOpcion(); // Volver a mostrar el menú después de ejecutar
    });
  };

  preguntarOpcion();
};

// Iniciar el menú
iniciarMenu();
