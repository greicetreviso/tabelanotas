import {calcularMedia, definirStatus } from './opc.js'
// importando as function

// Query selector tem como retorno a TAG
let nota1 = document.querySelector('.nota1_aluno1') //document.querySelector procura um UNICO elemento html
let nota2 = document.querySelector('.nota2_aluno1')
let nota3 = document.querySelector('.nota3_aluno1')
let mediaTela = document.querySelector('.media_aluno1')
let status1 = document.querySelector('.status_aluno1')


// Retirar apenas o texto da tag
nota1 = parseInt(nota1.textContent) // document.querySelector tras toda tag html, parseInt corrige para so o objeto da tag
nota2 = parseInt(nota2.textContent)
nota3 = parseInt(nota3.textContent)

let media = calcularMedia(nota1, nota2, nota3) // chama function
mediaTela.textContent = media.toFixed(2) // textContent escreve resultado na tabela. toFixed vc muda as casas decimais do result
definirStatus(media, status1) // chama outra function


//aluno2
let nota4 = document.querySelector('.nota1_aluno2')
let nota5 = document.querySelector('.nota2_aluno2')
let nota6 = document.querySelector('.nota3_aluno2')
let mediaTela2 = document.querySelector('.media_aluno2')
let status2 = document.querySelector('.status_aluno2')

nota4 = parseInt(nota4.textContent)
nota5 = parseInt(nota5.textContent)
nota6 = parseInt(nota6.textContent)

let media2 = calcularMedia(nota4, nota5, nota6)
mediaTela2.textContent = media2.toFixed(2)
definirStatus(media2, status2)

//aluno3
let nota7 = document.querySelector('.nota1_aluno3')
let nota8 = document.querySelector('.nota2_aluno3')
let nota9 = document.querySelector('.nota3_aluno3')
let mediaTela3 = document.querySelector('.media_aluno3')
let status3 = document.querySelector('.status_aluno3')


nota7 = parseInt(nota7.textContent)
nota8 = parseInt(nota8.textContent)
nota9 = parseInt(nota9.textContent)

let media3 = calcularMedia(nota7, nota8, nota9)
mediaTela3.textContent = media3.toFixed(2)
definirStatus(media3, status3) 

//aluno4
let nota10 = document.querySelector('.nota1_aluno4')
let nota11 = document.querySelector('.nota2_aluno4')
let nota12 = document.querySelector('.nota3_aluno4')
let mediaTela4 = document.querySelector('.media_aluno4')
let status4 = document.querySelector('.status_aluno4')

nota10 = parseInt(nota10.textContent)
nota11 = parseInt(nota11.textContent)
nota12 = parseInt(nota12.textContent)

let media4 = calcularMedia(nota10, nota11, nota12)
mediaTela4.textContent = media4.toFixed(2)
definirStatus(media4, status4) 

//aluno5
let nota13 = document.querySelector('.nota1_aluno5')
let nota14 = document.querySelector('.nota2_aluno5')
let nota15 = document.querySelector('.nota3_aluno5')
let mediaTela5 = document.querySelector('.media_aluno5')
let status5 = document.querySelector('.status_aluno5')


nota13 = parseInt(nota13.textContent)
nota14 = parseInt(nota14.textContent)
nota15 = parseInt(nota15.textContent)

let media5 = calcularMedia(nota13, nota14, nota15)
mediaTela5.textContent = media5.toFixed(2)
definirStatus(media5, status5) 

//aluno6
let nota16 = document.querySelector('.nota1_aluno6')
let nota17 = document.querySelector('.nota2_aluno6')
let nota18 = document.querySelector('.nota3_aluno6')
let mediaTela6 = document.querySelector('.media_aluno6')
let status6 = document.querySelector('.status_aluno6')


nota16 = parseInt(nota16.textContent)
nota17 = parseInt(nota17.textContent)
nota18 = parseInt(nota18.textContent)

let media6 = calcularMedia(nota16, nota17, nota18)
mediaTela6.textContent = media6.toFixed(2)
definirStatus(media6, status6) 

//aluno7
let nota19 = document.querySelector('.nota1_aluno7')
let nota20 = document.querySelector('.nota2_aluno7')
let nota21 = document.querySelector('.nota3_aluno7')
let mediaTela7 = document.querySelector('.media_aluno7')
let status7 = document.querySelector('.status_aluno7')


nota19 = parseInt(nota19.textContent)
nota20 = parseInt(nota20.textContent)
nota21 = parseInt(nota21.textContent)

let media7 = calcularMedia(nota19, nota20, nota21)
mediaTela7.textContent = media7.toFixed(2)
definirStatus(media7, status7) 