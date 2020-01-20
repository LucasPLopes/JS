create schema `cursonode`;
use cursonode;

create table cursonode.user(
    `id` int not null auto_increment,
    `nome` varchar(80) not null,
    `email` varchar(140) not null,
    primary key (`id`)
    );
