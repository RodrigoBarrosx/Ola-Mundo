var readlineSync = require ('readline-sync')
var nome = readlineSync.question('Qual é o seu nome')
console.log(`Ola! Seja bem vindo ${nome}!`)
