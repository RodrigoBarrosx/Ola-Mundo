var input = require('readline-sync')
consle.log("SUA IDADE")
const agora = new Date()
const anoAtual = agora.getFullYear()
const anoDeNascimento = Number(
    input.question('Digite o ano de seu nascimento [yyyy]')
)
if(anoDeNascimento> anoAtual){
    console.log('[ERRO] Ano de nascimento inválido!')
} else {
    console.log(`Sua idade é ${anoAtual - anoDeNascimento} anos!`)
}