import {calcularMedia, definirStatus } from './opc.js'
// importando as function

//substitui o querySelector puxando pelo class para querySelctorAll mirando em todas as linhas da tabela
let tabelinha = document.querySelectorAll ('tbody tr') 

//para repetir o mesmo em todas vamos criar um laço de repetição
//lenght se adapta a quantidade de itens dentro da array (vetor)
for ( let repita =0; repita <tabelinha.length; repita++ ){

//agora criar uma nova variavel que vai r=usar o laço para repetir 
let linhas = tabelinha[repita]
//mais uma variavel agora engobrando tudo
let filhos = linhas.children //children pega os babys (as td)

//agora a resolução chamando as function
let nota1 = filhos[1].textContent
let nota2 = filhos[2].textContent
let nota3 = filhos[3].textContent

nota1 = parseFloat(nota1)
nota2 = parseFloat (nota2)
nota3 = parseFloat (nota3)

let contamedia = calcularMedia(nota1,nota2,nota3) //chama function e faz conta
let media = filhos[4]
media.textContent = contamedia.toFixed(1)

let veredito =parseFloat (media.textContent)
veredito = definirStatus (veredito, filhos[5])
}

//iterador
tabelinha.forEach(tr=>{
let filhos=tr.children
let veredito=filhos[5]

if (veredito.textContent == "APROVADO") {
   veredito.style.backgroundColor =	"#32CD32"}
else if (veredito.textContent == "REPROVADO") {
   veredito.style.backgroundColor ="#FF0000"}
else {
     veredito.style.backgroundColor ="#DCDCDC"
}

})

//filtro
let entrada = document.querySelector(".entrada")
entrada.addEventListener('input', ()=>{
tabelinha.forEach(tr=> { tr.viseble=true
 let tds = tr.children

     if(!tds[5].textContent.includes(entrada.value)){
        tr.viseble = false 
     }
    if(tr.viseble){
        tr.style.display ='table-row'
    }
    else {
        tr.style.display = 'none'
    }
      })
console.log ('...')
})

