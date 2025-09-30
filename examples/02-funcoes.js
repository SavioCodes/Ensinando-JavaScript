// Exemplos de Funções
// Desenvolvido por Sávio

console.log("=== FUNÇÕES EM JAVASCRIPT ===\n");

// 1. Função Declarativa
function saudar(nome) {
    return `Olá, ${nome}!`;
}

console.log("=== FUNÇÃO DECLARATIVA ===");
console.log(saudar("Sávio"));
console.log(saudar("JavaScript"));

// 2. Function Expression
const somar = function(a, b) {
    return a + b;
};

console.log("\n=== FUNCTION EXPRESSION ===");
console.log("5 + 3 =", somar(5, 3));

// 3. Arrow Function
const multiplicar = (a, b) => a * b;
const dobro = x => x * 2;
const saudacao = () => "Bem-vindo!";

console.log("\n=== ARROW FUNCTIONS ===");
console.log("4 * 2 =", multiplicar(4, 2));
console.log("Dobro de 7:", dobro(7));
console.log(saudacao());

// 4. Parâmetros Padrão
function criarUsuario(nome = "Visitante", idade = 18) {
    return { nome, idade };
}

console.log("\n=== PARÂMETROS PADRÃO ===");
console.log(criarUsuario("Sávio", 25));
console.log(criarUsuario("Ana"));
console.log(criarUsuario());

// 5. Rest Parameters
function somarTodos(...numeros) {
    let total = 0;
    for (let num of numeros) {
        total += num;
    }
    return total;
}

console.log("\n=== REST PARAMETERS ===");
console.log("Soma de 1,2,3:", somarTodos(1, 2, 3));
console.log("Soma de 1,2,3,4,5:", somarTodos(1, 2, 3, 4, 5));

// 6. Função com Callback
function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}

console.log("\n=== CALLBACKS ===");
console.log("10 + 5 =", executarOperacao(10, 5, (x, y) => x + y));
console.log("10 - 5 =", executarOperacao(10, 5, (x, y) => x - y));
console.log("10 * 5 =", executarOperacao(10, 5, (x, y) => x * y));

// 7. Closure
function criarContador() {
    let contador = 0;

    return {
        incrementar: () => ++contador,
        decrementar: () => --contador,
        obterValor: () => contador
    };
}

console.log("\n=== CLOSURE ===");
const meuContador = criarContador();
console.log("Incrementar:", meuContador.incrementar());
console.log("Incrementar:", meuContador.incrementar());
console.log("Decrementar:", meuContador.decrementar());
console.log("Valor atual:", meuContador.obterValor());

// 8. Higher Order Functions
function multiplicador(fator) {
    return function(numero) {
        return numero * fator;
    };
}

console.log("\n=== HIGHER ORDER FUNCTIONS ===");
const dobrar = multiplicador(2);
const triplicar = multiplicador(3);
console.log("Dobro de 5:", dobrar(5));
console.log("Triplo de 5:", triplicar(5));

// 9. Recursão - Fatorial
function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * fatorial(n - 1);
}

console.log("\n=== RECURSÃO - FATORIAL ===");
console.log("5! =", fatorial(5));
console.log("7! =", fatorial(7));

// 10. Recursão - Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("\n=== RECURSÃO - FIBONACCI ===");
console.log("Fibonacci(7):", fibonacci(7));
console.log("Sequência:", [0,1,2,3,4,5,6,7].map(fibonacci));

// 11. Exemplos Práticos

// Validador de Email
const validarEmail = email => email.includes("@") && email.includes(".");

console.log("\n=== VALIDADOR DE EMAIL ===");
console.log("savio@email.com:", validarEmail("savio@email.com"));
console.log("email-invalido:", validarEmail("email-invalido"));

// Calculadora
const calculadora = {
    somar: (a, b) => a + b,
    subtrair: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => b !== 0 ? a / b : "Erro: divisão por zero"
};

console.log("\n=== CALCULADORA ===");
console.log("10 + 5 =", calculadora.somar(10, 5));
console.log("10 - 5 =", calculadora.subtrair(10, 5));
console.log("10 * 5 =", calculadora.multiplicar(10, 5));
console.log("10 / 5 =", calculadora.dividir(10, 5));
console.log("10 / 0 =", calculadora.dividir(10, 0));

// Gerador de Slug
function gerarSlug(texto) {
    return texto
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
}

console.log("\n=== GERADOR DE SLUG ===");
console.log(gerarSlug("Ensinando JavaScript"));
console.log(gerarSlug("Aprenda JS Facilmente!"));

// Verificar Palíndromo
function ehPalindromo(texto) {
    const limpo = texto.toLowerCase().replace(/\s/g, '');
    const invertido = limpo.split('').reverse().join('');
    return limpo === invertido;
}

console.log("\n=== VERIFICADOR DE PALÍNDROMO ===");
console.log("arara:", ehPalindromo("arara"));
console.log("ovo:", ehPalindromo("ovo"));
console.log("javascript:", ehPalindromo("javascript"));
