/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
    name: 'Rudimar',
    lastname: 'Silva',
    age: 28
};
  /*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));
//Crie um array vazio chamado `books`.
var books = []
/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({name: 'A Caixa do Suicídio', pages: 69, });
books.push({name: 'JavaScript: O Guia Definitivo', pages: 1.080, });
books.push({name: 'A Menina que Roubava Livros ', pages: 480, });
// Mostre no console todos os livros.
console.log(books);
/*
Remova o último livro, e mostre-o no console.
*/
console.log(books.pop())
/*
Mostre no console os livros restantes.
*/
 console.log(books)
/*
Converta os objetos que ficaram em `books` para strings.
*/
books = JSON.strings(books);
/*
Mostre os livros nesse formato no console:
*/
console.log(books);
/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books);
/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for (var value = 0; value < books.length; value++){
    for(var propriedade in books[value]){
     console.log(propriedade + ':' + books[value][propriedade]);
    }
};
/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['R','u','d','i','m','a','r' ]
/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( myName.join(''))
/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log( myName.reverse())
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log( myName.sort())
