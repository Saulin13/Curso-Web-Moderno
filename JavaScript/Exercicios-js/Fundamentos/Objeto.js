const prod1 = {};
prod1.nome = "Celular Ultra Mega"; // Aqui foi dito que dentro desse objeto prod1 foi criado uma chave/identificador chamada nome
prod1.preco = 4998.90;
prod1["Desconto Legal"] = 0.40; // Evitar Atributos com Espaço

console.log(prod1);

//Objetos tem que ter nomes únicos

const prod2 = {  //Dessa forma ja criou o objeto com os atributos dentro dele
    nome: "Camisa Polo",
    preco: 79.90,
    obj: {             //Nesse caso obj é único dentro do prod2
        blablalba: 1,
        obj:{          //Nesse caso obj tbm é único, mas agora dentro do outro obj
            blablabla: 2
        }
    }
}

console.log(prod2);