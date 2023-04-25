var readlineSync = require('readline-sync')
var numero1 = readlineSync.question('Digite um número:')
var numero2 = readlineSync.question('Digite outro número:')
console.log(`A soma entre ${numero1}e ${numero2} é igual a ${numero1 + numero2}`)