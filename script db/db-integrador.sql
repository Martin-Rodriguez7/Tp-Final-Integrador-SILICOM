CREATE DATABASE integrador;

CREATE TABLE usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255),
  nickname VARCHAR(50),
  password VARCHAR(50),
  rol VARCHAR(50)
);

CREATE TABLE alumno (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255),
  apellido VARCHAR(255),
  dni VARCHAR(10),
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE curso (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255),
  descripcion VARCHAR(1000),
  imagen VARCHAR(1000),
  anio INT,
  activo BOOLEAN
);

CREATE TABLE alumno_curso (
  id_alumno INT,
  id_curso INT,
  PRIMARY KEY (id_alumno, id_curso),
  FOREIGN KEY (id_alumno) REFERENCES alumno(id),
  FOREIGN KEY (id_curso) REFERENCES curso(id)
);

INSERT INTO usuario (email, nickname, password, rol) VALUES
  ('admin@admin.com', 'admin', 'admin', 'admin'),
  ('docente@docente.com', 'docente', 'docente', 'docente');