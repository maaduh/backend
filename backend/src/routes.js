const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentControler = require('./controllers/ContentControler');


//rota annotations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id',AnnotationController.delete);

//rota priority
routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);

//rota content
routes.post('/contents/:id', ContentControler.update);

module.exports = routes;