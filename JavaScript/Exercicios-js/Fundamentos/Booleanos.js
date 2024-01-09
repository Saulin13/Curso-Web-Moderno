let isAtivo = false;
console.log(isAtivo);
 
 isAtivo = true;
 console.log(isAtivo);

 isAtivo = 1;
 console.log(!!isAtivo);  //Negou 1x voltando a ser verdadeiro; 
 console.log(!isAtivo);   // Negou 1x 

 console.log("Os verdadeiros...");
 console.log(!!3); // Dessa maneira com !! o valor é convertido em verdadeiro ou falso;
 console.log(!!-1);
 console.log(!!" ");
 console.log(!!"Texto");
 console.log(!![]);
 console.log(!!{});
 console.log(!!Infinity);
 console.log(!!(isAtivo = true));


 console.log("Os falsos...");
 console.log(!!0);
 console.log(!!"");
 console.log(!!null);
 console.log(!!NaN);
 console.log(!!undefined);
 console.log(!!(isAtivo = false));

 console.log("Pra finalizar...");

 console.log(!!("" || null || 0 || " ")); //-> Resultado é verdadeiro pois possui um verdadeiro;


 //Exemplo Pratico...

 let nome = "";
 console.log(nome || "Desconhecido"); // Nesse caso nome é uma String vazia, tornado falso , escrevendo no console a opção verdadeira (Desconhecido);


 nome = "Lucas";
 console.log(nome || "Desconhecido"); // Nesse caso nome é uma String com elementos, tornando verdadeira, escrevendo no console a primeira opção verdadeira (Lucas);
 
