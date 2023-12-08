create database Usuarios;

use Usuarios;

CREATE TABLE ROLES (
    id int auto_increment primary key,
    descripcion varchar(200) not null
);

create TABLE USUARIOS(
    nick varchar(200) not null primary key,
    email varchar(200) not null, 
    password varchar(500) not null,
    rol int not null,
    created_at date not null,

    FOREIGN KEY (rol) REFERENCES ROLES(id)
);

INSERT INTO ROLES(descripcion) values('usuario');
INSERT INTO ROLES(descripcion) values('root');