create database grocery_store;

use grocery_store;

create table Usuario(
	id_usuario int not null auto_increment primary key,
    telefone varchar(255) not null,
    nome varchar(255) not null,
    email varchar(255) not null
);
create table Categoria(
	id_categoria int not null auto_increment primary key,
    nome varchar(255),
    imagem varchar(255)
);
create table Pedido(
	id_pedido int not null auto_increment primary key,
	usuario_fk int,
    foreign key (usuario_fk) references Usuario(id_usuario)
);
create table Produto(
	id_produto int not null auto_increment primary key, 
    nome varchar(255),
    qtd_disponivel int,
    qtd_produto varchar(255),
    preco decimal,
    categoria_fk int,
    foreign key (categoria_fk) references Categoria(id_categoria)
);

create table Pedido_produto (
	pedido_fk int,
    produto_fk int,
    qnt_solicitada int,
    foreign key (pedido_fk) references Pedido(id_pedido),
    foreign key (produto_fk) references Produto(id_produto)
);

create table Favorito(
	usuario_fk int,
    produto_fk int,
    foreign key (usuario_fk) references Usuario(id_usuario),
    foreign key (produto_fk) references Produto(id_produto)
)
