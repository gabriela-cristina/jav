const anoAtual = 2021;

let nome = prompt("Digite o seu nome!");

let anoNascimento = parseInt(prompt("Digite o ano em que você nasceu!"));

let idade;

idade = anoAtual - anoNascimento;

alert(`Olá, seu nome é  ${nome} , e você tem ${idade} anos.`);

