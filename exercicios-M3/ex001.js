/*
1. Precisamos dizer para o usuário se a conta dele está positiva ou não, para isso faça
um algoritmo que receba o valor disponível na conta e verifique se é igual a 0, se for
escreva “ Você não possui saldo ”, se for maior que 0 escreva “ Seu saldo está positivo ”,
senão escreva “ Seu saldo está negativo ”
*/

var saldo = 0

if (saldo == 0) {
    console.log(" Você não possui saldo ")
} else if (saldo > 0) {
    console.log(" Seu saldo está positivo ")
} else {
    console.log("Seu saldo está negativo")
}
/*
imprime:
Você não possui saldo


2. Para entrar no cinema Tabajara é preciso ter idade maior que a idade de censura 
(14 anos) e ter o ingresso. Faça um algoritmo que receba idade e ingresso, idade 
recebe um number e ingresso um boolean, se a idade for maior que 14 e ingresso true
escreva “ Pode entrar ”, se a idade for menor ou igual a 14 e ingresso true escreva
“Você não tem a idade mínima”, se a idade for maior que 14 e ingresso false escreva
“ Você precisa ter o ingresso ”
*/

var idade = 15
var censura = 14
var ingresso = false

if (idade > censura && ingresso == true) {
    console.log(" Pode entrar ")
} else if (idade <= censura && ingresso == true) {
    console.log(" Você não tem a idade mínima ")
} else if (idade > censura && ingresso == false) {
    console.log(" Você precisa ter o igresso ")
}
/*
imprime:
Você precisa ter o ingresso
*/
