const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // vai dar indefinido por não possuir um elemento que não existe

valores[4] = 10;
console.log(valores);

console.log(valores.length);

valores[10]= 100;
console.log(valores); // colocaria 5 itens vazios dentro do arrey

valores.push({id: 3}, false, null, "Teste");// vai emplilhando os valores dentro do arrey
console.log(valores);


console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores);

