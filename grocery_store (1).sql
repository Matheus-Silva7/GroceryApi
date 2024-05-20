create database grocery_store;

use grocery_store;
/*  falta algumas colunas, mas as base é essa */

create Table Usuario(
UsuarioID int primary key auto_increment,
Nome varchar(40),
Email varchar(30),
Telefone varchar(12),
Senha varchar(16)
);

create Table Categoria(
CategoriaID int primary key auto_increment,
Nome varchar(20),
Imagem varchar(255)
);

create Table Produto(
ProdutoID int primary key auto_increment,
Nome varchar(30),
QuantidadeDisponivel int,
QuantidadeProduto varchar(10),
Preco decimal,
CategoriaID int,
foreign key (CategoriaID) references Categoria(CategoriaID)
);
create table Favorito(
UsuarioID int,
ProdutoID int,
foreign key (UsuarioID) references Usuario(UsuarioID),
foreign key (ProdutoID) references Produto(ProdutoID)
);

create table Pedido(
PedidoID int primary key auto_increment,
UsuarioID int,
foreign key (UsuarioID) references Usuario(UsuarioID)
);

Create table PedidoProduto(
PedidoID int, 
ProdutoID int,
QuantidadeSolicitada int,
foreign key (PedidoID) references Pedido(PedidoID),
foreign key (ProdutoID) references Produto(ProdutoID)
);

Create table Carrinho(
CarrinhoID int primary key auto_increment, 
UsuarioID int,
foreign key (UsuarioID) references Usuario(UsuarioID)
);

Create table ProdutoCarrinho(
ProdutoCarrinhoID int primary key auto_increment,
ProdutoID int,
CarrinhoID int, 
foreign key (ProdutoID) references Produto(ProdutoID),
foreign key (CarrinhoID) references Carrinho(CarrinhoID)
);