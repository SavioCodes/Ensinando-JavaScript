// Exemplos de Condicionais e Loops
// Desenvolvido por Sávio

console.log("=== CONDICIONAIS E LOOPS ===\n");

// ===== CONDICIONAIS =====

// 1. if/else básico
console.log("=== IF/ELSE BÁSICO ===");
const idade = 25;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// 2. if/else if/else
console.log("\n=== IF/ELSE IF/ELSE ===");
const nota = 85;

if (nota >= 90) {
    console.log("Conceito A");
} else if (nota >= 80) {
    console.log("Conceito B");
} else if (nota >= 70) {
    console.log("Conceito C");
} else if (nota >= 60) {
    console.log("Conceito D");
} else {
    console.log("Reprovado");
}

// 3. Operador Ternário
console.log("\n=== OPERADOR TERNÁRIO ===");
const numero = 10;
const tipo = numero % 2 === 0 ? "Par" : "Ímpar";
console.log(`${numero} é ${tipo}`);

// 4. Switch
console.log("\n=== SWITCH ===");
const diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia inválido");
}

// 5. Operadores Lógicos
console.log("\n=== OPERADORES LÓGICOS ===");
const idadeUser = 25;
const temCarteira = true;

if (idadeUser >= 18 && temCarteira) {
    console.log("Pode dirigir");
}

const dia = "sábado";
if (dia === "sábado" || dia === "domingo") {
    console.log("É fim de semana!");
}

// ===== LOOPS =====

// 6. for
console.log("\n=== FOR LOOP ===");
for (let i = 1; i <= 5; i++) {
    console.log(`Contagem: ${i}`);
}

// 7. for com array
console.log("\n=== FOR COM ARRAY ===");
const frutas = ["maçã", "banana", "laranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(`${i + 1}. ${frutas[i]}`);
}

// 8. while
console.log("\n=== WHILE ===");
let contador = 1;
while (contador <= 5) {
    console.log(`While: ${contador}`);
    contador++;
}

// 9. do...while
console.log("\n=== DO WHILE ===");
let num = 1;
do {
    console.log(`Do while: ${num}`);
    num++;
} while (num <= 5);

// 10. for...of (para valores)
console.log("\n=== FOR OF ===");
const cores = ["vermelho", "azul", "verde"];
for (let cor of cores) {
    console.log(cor);
}

// 11. for...in (para chaves)
console.log("\n=== FOR IN ===");
const pessoa = {
    nome: "Sávio",
    idade: 25,
    profissao: "Desenvolvedor"
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

// 12. break
console.log("\n=== BREAK ===");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Parando no 5");
        break;
    }
    console.log(i);
}

// 13. continue
console.log("\n=== CONTINUE ===");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Pulando 3");
        continue;
    }
    console.log(i);
}

// ===== EXEMPLOS PRÁTICOS =====

// 14. Tabuada
console.log("\n=== TABUADA DO 7 ===");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 15. FizzBuzz
console.log("\n=== FIZZBUZZ ===");
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 16. Números Primos até 30
console.log("\n=== NÚMEROS PRIMOS ATÉ 30 ===");
function ehPrimo(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const primos = [];
for (let i = 2; i <= 30; i++) {
    if (ehPrimo(i)) {
        primos.push(i);
    }
}
console.log(primos);

// 17. Fatorial
console.log("\n=== FATORIAL ===");
function fatorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log("5! =", fatorial(5));
console.log("7! =", fatorial(7));

// 18. Fibonacci
console.log("\n=== FIBONACCI ===");
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log("Primeiros 10:", fibonacci(10));

// 19. Pirâmide de Asteriscos
console.log("\n=== PIRÂMIDE ===");
const linhas = 5;
for (let i = 1; i <= linhas; i++) {
    let espacos = " ".repeat(linhas - i);
    let asteriscos = "*".repeat(i * 2 - 1);
    console.log(espacos + asteriscos);
}

// 20. Calculadora de Desconto
console.log("\n=== CALCULADORA DE DESCONTO ===");
function calcularDesconto(valor, tipoCliente) {
    let desconto;

    switch (tipoCliente.toLowerCase()) {
        case "vip":
            desconto = 0.20;
            break;
        case "premium":
            desconto = 0.15;
            break;
        case "regular":
            desconto = 0.10;
            break;
        default:
            desconto = 0;
    }

    const valorFinal = valor * (1 - desconto);
    return {
        valorOriginal: valor,
        desconto: desconto * 100 + "%",
        valorFinal: valorFinal.toFixed(2)
    };
}

console.log(calcularDesconto(1000, "vip"));
console.log(calcularDesconto(1000, "regular"));

// 21. Validador de Senha
console.log("\n=== VALIDADOR DE SENHA ===");
function validarSenha(senha) {
    const erros = [];

    if (senha.length < 6) {
        erros.push("Mínimo 6 caracteres");
    }

    if (!/[A-Z]/.test(senha)) {
        erros.push("Precisa ter maiúscula");
    }

    if (!/[0-9]/.test(senha)) {
        erros.push("Precisa ter número");
    }

    if (erros.length > 0) {
        return { valida: false, erros };
    }

    return { valida: true, erros: [] };
}

console.log(validarSenha("abc"));
console.log(validarSenha("Abc123"));

// 22. Soma de Array
console.log("\n=== SOMA DE ARRAY ===");
const numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (let num of numeros) {
    soma += num;
}
console.log("Soma:", soma);

// 23. Encontrar Maior Valor
console.log("\n=== MAIOR VALOR ===");
const valores = [10, 5, 20, 15, 8];
let maior = valores[0];

for (let valor of valores) {
    if (valor > maior) {
        maior = valor;
    }
}
console.log("Maior valor:", maior);

// 24. Contar Vogais
console.log("\n=== CONTAR VOGAIS ===");
function contarVogais(texto) {
    const vogais = "aeiouAEIOU";
    let contador = 0;

    for (let letra of texto) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

console.log("JavaScript tem", contarVogais("JavaScript"), "vogais");
console.log("Ensinando tem", contarVogais("Ensinando"), "vogais");

// 25. Inverter String
console.log("\n=== INVERTER STRING ===");
function inverterString(str) {
    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

console.log("JavaScript =>", inverterString("JavaScript"));
console.log("Sávio =>", inverterString("Sávio"));
