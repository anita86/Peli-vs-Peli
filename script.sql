USE COMPETENCIAS;

CREATE TABLE competencia(
  id INT NOT NULL auto_increment,
  nombre VARCHAR(500),
  PRIMARY KEY (id)
)

CREATE TABLE voto(
  id INT NOT NULL auto_increment,
  pelicula_id INT unsigned NOT NULL,
  competencia_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (pelicula_id) REFERENCES pelicula(id),
  FOREIGN KEY (competencia_id) REFERENCES competencia(id)
)

ALTER TABLE competencia ADD COLUMN genero_id INT unsigned;
ALTER TABLE competencia ADD FOREIGN KEY (genero_id) REFERENCES genero(id);

ALTER TABLE competencia ADD COLUMN director_id INT unsigned;
ALTER TABLE competencia ADD FOREIGN KEY (director_id) REFERENCES director(id);

ALTER TABLE competencia ADD COLUMN actor_id INT unsigned;
ALTER TABLE competencia ADD FOREIGN KEY (actor_id) REFERENCES actor(id);

INSERT INTO competencia(nombre, genero_id) VALUES("¿Cuál es la mejor comedia?", 5), ("¿Cuál es el peor drama?", 8), ("¿Cuál es la peli de terror que más te asustó?", 10);
