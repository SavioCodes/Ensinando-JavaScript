// Exemplos de Variáveis e Tipos de Dados
// Desenvolvido por Sávio

console.log("=== VARIÁVEIS E TIPOS DE DADOS ===\n");

// 1. Declaração de Variáveis
let nome = "Sávio";
const IDADE = 25;
var cidade = "São Paulo"; // Evite usar var

console.log("Nome:", nome);
console.log("Idade:", IDADE);
console.log("Cidade:", cidade);

// 2. Tipos Primitivos
let texto = "JavaScript";
let numero = 42;
let decimal = 3.14;
let verdadeiro = true;
let indefinido;
let nulo = null;

console.log("\n=== TIPOS PRIMITIVOS ===");
console.log("String:", texto, "- Tipo:", typeof texto);
console.log("Number:", numero, "- Tipo:", typeof numero);
console.log("Boolean:", verdadeiro, "- Tipo:", typeof verdadeiro);
console.log("Undefined:", indefinido, "- Tipo:", typeof indefinido);
console.log("Null:", nulo, "- Tipo:", typeof nulo);

// 3. Operações com Strings
let primeiroNome = "Sávio";
let sobrenome = "Silva";
let nomeCompleto = primeiroNome + " " + sobrenome;
let apresentacao = `Olá, meu nome é ${nomeCompleto}!`;

console.log("\n=== STRINGS ===");
console.log(nomeCompleto);
console.log(apresentacao);
console.log("Tamanho:", nomeCompleto.length);
console.log("Maiúsculas:", nomeCompleto.toUpperCase());
console.log("Minúsculas:", nomeCompleto.toLowerCase());

// 4. Operações Matemáticas
let a = 10;
let b = 3;

console.log("\n=== OPERAÇÕES MATEMÁTICAS ===");
console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Resto:", a % b);
console.log("Potência:", a ** b);

// 5. Conversão de Tipos
let numeroTexto = "42";
let numeroConvertido = Number(numeroTexto);
let textoConvertido = String(100);

console.log("\n=== CONVERSÃO DE TIPOS ===");
console.log("String para Number:", numeroConvertido, typeof numeroConvertido);
console.log("Number para String:", textoConvertido, typeof textoConvertido);
console.log("Para Boolean:", Boolean(1), Boolean(0), Boolean("texto"));

// 6. Calculadora de IMC
function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}

console.log("\n=== CALCULADORA DE IMC ===");
const peso = 70;
const altura = 1.75;
const imc = calcularIMC(peso, altura);
console.log(`Peso: ${peso}kg, Altura: ${altura}m`);
console.log(`IMC: ${imc}`);
console.log(`Classificação: ${classificarIMC(imc)}`);

// 7. Exemplo Prático: Dados Pessoais
const pessoa = {
    nome: "Sávio",
    idade: 25,
    altura: 1.75,
    peso: 70,
    programador: true
};

console.log("\n=== DADOS PESSOAIS ===");
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("IMC:", calcularIMC(pessoa.peso, pessoa.altura));
console.log("É programador?", pessoa.programador ? "Sim" : "Não");
