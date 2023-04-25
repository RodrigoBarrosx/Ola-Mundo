var readlineSync = require('readline-sync')
var n1 = Number(readlineSync.question("Digite um número"))
var n2 = Number(readlineSync.question("Digite outro número:"))
console.log(`A média entre ${n1} e ${n2} é igual a ${((n1+n2)/2)}`)