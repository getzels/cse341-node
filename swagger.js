const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contact API',
        description: 'Project 1 - week 1-4',
    },
    host: 'cse341node-getzels.herokuapp.com',
    schemes: ['https'],
};

const outputFile = './swagger/swagger-output.json';
const endpointsFiles = ['./server.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js'); // Your project's root file
});