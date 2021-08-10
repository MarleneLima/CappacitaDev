/*
1. Uma função que receba um array listaDadosClientes e retorne outro array contendo
somente os endereços destes clientes
*/


    var listaDadosClientes = [
        {
            nome: 'Daiane',
            idade: 24,
            endereco: 'Rua Freire, 24, Consolação, São Paulo'
        },
        {
            nome: 'Gabriel',
            idade: 19,
            endereco: 'Rua Armando Sá, 47, Perdizes, São Paulo'
        },
        {
            nome: 'Bruno',
            idade: 37,
            endereco: 'Av. Santos Dumont, 978, Belo Horizonte, Minas Gerais'
        }
    ]
    function retornaEnderecos(array) {
        var listaEnderecos = [] // iniciar array vazio

        for (var i = 0; i < array.length; i ++) {
            listaEnderecos[i] = array[i].endereco
        }
        return listaEnderecos 
    }
    console.log(retornaEnderecos(listaDadosClientes))
    /*
    imprime:
    "Rua Freire, 24, Consolação, São Paulo",
    "Rua Armando Sá, 47, Perdizes, São Paulo",
    "Av. Santos Dumont, 978, Belo Horizonte, Minas Gerais"
    */