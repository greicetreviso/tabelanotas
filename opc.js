// function para calcular media
export function calcularMedia(nota1, nota2, nota3)  { //exporta a function
    let media = (nota1 + nota2 + nota3) / 3  
    return media
} 

//function define stts aluno1
export function definirStatus(media, statusAluno){ //exporta function
    if(media < 4){
    // reprovado
    statusAluno.textContent = "REPROVADO"
} else if(media < 6){
    // recuperação
    statusAluno.textContent = "RECUPERAÇÃO"
} else{
    // aprovado
    statusAluno.textContent = "APROVADO"
}
}

