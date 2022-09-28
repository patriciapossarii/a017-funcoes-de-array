/*
# Exercício 1

Crie duas funcões que recebem como parâmetro um objeto.
1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
2. A segunda deve retornar os valores do objeto como texto corrido.

3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. 
A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
Repita o processo para a funcão 2
*/


const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta = (inputCaixaAlta) => {

inputCaixaAlta.nome = inputCaixaAlta.nome.toUpperCase()
inputCaixaAlta.profissao = inputCaixaAlta.profissao.toUpperCase()
inputCaixaAlta.username = inputCaixaAlta.username.toUpperCase()
inputCaixaAlta.senha = inputCaixaAlta.senha.toUpperCase()

return inputCaixaAlta

}
console.log(caixaAlta(objeto))



const textoCorrido = (newObjeto) => {
    const retornaTexto = [newObjeto.nome,newObjeto.profissao,newObjeto.username,newObjeto.senha]
    const juntaTexto = retornaTexto.join(' ')
    return juntaTexto
}
console.log(textoCorrido(objeto))



function retornoCallback (executaCallback){
    console.log("Fazendo Callback")
    executaCallback()
}

retornoCallback(caixaAlta,textoCorrido)