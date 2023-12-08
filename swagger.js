const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./rutas/usuarios.js'];

swaggerAutogen(outputFile, endpointsFiles);