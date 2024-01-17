// Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

let aluno1 = {
  Nome: "Rafael",
  Nota1: 8,
  Nota2: 7.5,
};

let aluno2 = {
  Nome: "Adriano",
  Nota1: 7,
  Nota2: 5,
};

console.log(aluno1, aluno2);

let mediaAluno1 = (aluno1.Nota1 + aluno1.Nota2) / 2;
console.log(mediaAluno1);

let mediaAluno2 = (aluno2.Nota1 + aluno2.Nota2) / 2;
console.log(mediaAluno2);

let mediaTurma = (mediaAluno1 + mediaAluno2) / 2;
console.log(mediaTurma)
