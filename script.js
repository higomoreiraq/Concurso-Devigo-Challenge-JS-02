
const button = document.querySelector("button")
button.addEventListener("click", updateButton)
function updateButton() {

  alert(`
  Olá, aluno!
  Aqui você encontra a lista do resultado final do Concurso Devigo.
  `)
  let option

  // criar a lista de alunos

  let list = [
    {
      name: "Higo Moreira",
      noteOne: 9,
      noteTwo: 9.5
    },

    {
      name: "Jorge Castro",
      noteOne: 5,
      noteTwo: 8
    },

    {
      name: "Lucas Silva",
      noteOne: 3,
      noteTwo: 6
    },

    {
      name: "Matheus Alves",
      noteOne: 10,
      noteTwo: 10
    },

    {
      name: "Stefanie Ferreira",
      noteOne: 10,
      noteTwo: 10
    }
  ]

  // criar a função para calcular a média das notas dos alunos
  // média = (n1 + n2) / 2

  function meanStudent(noteOne, noteTwo) {
    return ((noteOne + noteTwo) / 2).toFixed(2)
  }

  function printMeanStudents (student) {
    return `A média do(a) aluno(a) ${student.name} é ${meanStudent(student.noteOne, student.noteTwo)}.`
  }

  while (option != 3) {

    option = prompt(`
    Digite a opção desejada:

    1. Ver resultado final
    2. Situação
    3. Sair
    `)

    const optionNumber = Number(option)

    switch (optionNumber) {

      case 1:

        alert("Ok, vamos à relação de alunos :)")
        for (let student of list) {

          if (meanStudent(student.noteOne, student.noteTwo) >= 7) {
            alert(`
            ${printMeanStudents(student)} 
            Parabéns, ${student.name}! Você foi aprovado(a).`)
      
          } else if (meanStudent(student.noteOne, student.noteTwo) >= 5) {
            alert(`
            ${printMeanStudents(student)}
            ${student.name}, você está no cadastro reserva. 
            Se surgir uma vaga, ela poderá ser sua.`)
          
          } else {
            alert(`
            ${printMeanStudents(student)} 
            Não foi dessa vez, ${student.name}. Você foi reprovado(a).`)
          }
        }
        break
      
      case 2:

        alert(`
        Média maior ou igual a 7 = aprovado(a)
        Média maior ou igual a 5 e menor que 7 = cadastro reserva
        Média menor que 5 = reprovado(a)
        `)
        break

      case 3:

        alert(`
        O Concurso Devigo agradece a sua visita. Até mais :)
        `)
        break

      default:

        alert(`
        Ops, você digitou: "${option}"
        Apenas os números de 1 a 3 são opções válidas.
        `)
    } 
  }
}