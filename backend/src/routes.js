const express = require('express');
const routes = express.Router();

const PriorityController = require('./controllers/PriorityController');
const ContentControler = require('./controllers/ContentControler');
const LivroController = require('./controllers/LivroController');


//rota annotations
routes.post('/annotations', LivroController.create);
routes.get('/annotations', LivroController.read);
routes.delete('/annotations/:id',LivroController.delete);

//rota priority
routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);

//rota content
routes.post('/contents/:id', ContentControler.update);

module.exports = routes;