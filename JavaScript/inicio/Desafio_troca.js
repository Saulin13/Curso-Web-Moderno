let a = 7;
let b = 94;

// antes da troca dos valores a e b

console.log("antes da troca de valores a: " + a 
+ " e b: " + b);

// trocando os valores de a e b
// Primeira Maneira:
/*
let temp;
temp = a;
a = b;
b = temp;
*/

//Segunda Maneira:

[a, b] = [b, a]; //essa forma também é possivel trocar os valores das variaveis

console.log("Depois da troca de valores a: " + a 
+ " e b: " + b);
