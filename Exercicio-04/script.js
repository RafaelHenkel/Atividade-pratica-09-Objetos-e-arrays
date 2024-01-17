// Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500. 

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

let listaDePessoasDesempregadas = [];
let listaDePessoasEmpregadasMenor = [];
let listaDePessoasEmpregadasMaior = [];
let pessoas = {};
do {
  let pessoasNovas = { ...pessoas };
  pessoasNovas.Nome = prompt("Digite seu nome");
  pessoasNovas.Idade = Number(prompt("Digite sua idade"));
  let confirmarTrabalho = confirm("Você esta trabalhando?");
  if (confirmarTrabalho) {
    pessoasNovas.Salario = Number(prompt("Digite seu salario"));
    if (pessoasNovas.Salario < 2500) {
      listaDePessoasEmpregadasMenor.push(pessoasNovas);
    } else {
      listaDePessoasEmpregadasMaior.push(pessoasNovas);
    }
  } else {
    listaDePessoasDesempregadas.push(pessoasNovas);
  }
} while (confirm("Deseja adicionar outra pessoa?") == true);
console.log("Pessoas desempregadas:");
console.log(listaDePessoasDesempregadas);
console.log("Pessoas empregadas com salários menores que 2500:");
console.log(listaDePessoasEmpregadasMenor);
console.log("Pessoas empregadas com salários maiores que 2500:");
console.log(listaDePessoasEmpregadasMaior);

