const escola = "Cod3r";
            //  01234
console.log(escola.charAt(4)); // Essa função é resposavel para dar a letra q esta no indice 4 da String; 
console.log(escola.charAt(5)); // Retorna um valor vazio por não possuir um caracter na posição 5;
console.log(escola.charCodeAt(3)); //Essa função retorna o valor do carcter da tabela ascii;
console.log(escola.indexOf("3"));

console.log(escola.substring(1)); // Essa função faz com que imprima no console apartir de do índice colocado.
console.log(escola.substring(0, 3)); // foi do índice 0 até o 3

console.log("escola ".concat(escola).concat("!")); //Pode usar um valor sem armazenar em uma variavel e concatenar com a variavel;
console.log("escola " + (escola) + ("!")); // Outra forma de concatenar;
console.log(escola.replace(3, "e")); // Serve para substituir um caracter "Esse substituiu o 3 pelo e";


console.log("Ana,Maria,Pedro".split(",")); // Serve para serparar a String em 3 elementos diferentes;