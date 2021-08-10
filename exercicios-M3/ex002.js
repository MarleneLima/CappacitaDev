
/*
1. Faça um loop que procure no array "doces" a palavra "pirulito" e troque por "doce de leite"
*/

 
 var doces =  ['bala', 'pirulito', 'chiclete', 'jujuba', 'chocolate']

console.log("Antes de mudar: " .doces)
for (i= 0; i < doces.length; i ++) {
    if (doces [i] == "pirulito") {
        doces[i] = "doce de leite"
    }
}    

console.log(" Depois de mudar: " .doces)

/*
imprime:
Antes de mudar: ['bala', 'pirulito', 'chiclete', 'jujuba', 'chocolate']
Depois de mudar: ['bala', 'doce de leite', 'chiclete', 'jujuba', 'chocolate']

2. Faça um loop que imprima somente as cidades dos clientes da variável listaClientes */

    var listaClientes = [
        {
            nome: 'Larissa',
            cidade: 'Sumaré'
        },
        {
            nome: 'Hugo',
            cidade: 'São Vicente'
        },
        {
            nome: 'André',
            cidade: 'Osasco'
        }
    ]

    for (var i = 0; i < listaClientes.length; i++ ) {
        console.log(listaClientes[i].cidade)
    }
    /*
    imprime:
    Sumaré
    São Vicente
    Osasco
    */


   
