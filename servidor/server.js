//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var competenciasController = require ('./controlador/CompetenciasController');


var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/generos', competenciasController.cargarGeneros);
app.get('/directores', competenciasController.cargarDirectores);
app.get('/actores', competenciasController.cargarActores);

app.get('/competencias/:id/peliculas', competenciasController.obtenerDosPelis);
app.post('/competencias/:idCompetencia/voto', competenciasController.guardarVoto);
app.get('/competencias/:id/resultados', competenciasController.obtenerResultados);
app.get('/competencias/:id', competenciasController.obtenerCompetencia);
app.get('/competencias', competenciasController.buscarCompetencias);

app.post('/competencias', competenciasController.crearCompetencia);
app.put('/competencias/:id', competenciasController.editarCompetencia);

app.delete('/competencias/:id/votos', competenciasController.eliminarVotos);
app.delete('/competencias/:idCompetencia', competenciasController.eliminarCompetencia);

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});
