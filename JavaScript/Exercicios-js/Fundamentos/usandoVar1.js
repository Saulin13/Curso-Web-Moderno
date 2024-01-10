{
    {
        {
            {
                var sera = "Será???";
                console.log(sera);
            }
        }
    }
}

console.log(sera);

function teste(){
    var local =  123; // Quando definido uma variavel dentro de uma função, essa variavel estará visivel somente dentro do escopo daquela função
    console.log(local);
}

teste();
console.log(local);