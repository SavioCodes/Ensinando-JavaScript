# Funções em JavaScript

## O que são Funções?

Funções são blocos de código reutilizáveis que executam uma tarefa específica. Elas são fundamentais para organizar, reutilizar e estruturar código.

## Declaração de Funções

### Função Declarativa (Function Declaration)

```javascript
function saudar() {
    console.log("Olá, mundo!");
}

saudar();  // Olá, mundo!
```

### Função com Parâmetros

```javascript
function saudar(nome) {
    console.log(`Olá, ${nome}!`);
}

saudar("Sávio");      // Olá, Sávio!
saudar("JavaScript"); // Olá, JavaScript!
```

### Função com Múltiplos Parâmetros

```javascript
function somar(a, b) {
    return a + b;
}

let resultado = somar(5, 3);
console.log(resultado);  // 8
```

### Parâmetros Padrão (ES6)

```javascript
function saudar(nome = "visitante") {
    console.log(`Olá, ${nome}!`);
}

saudar();           // Olá, visitante!
saudar("Sávio");   // Olá, Sávio!
```

## Expressões de Função

### Function Expression

```javascript
const somar = function(a, b) {
    return a + b;
};

console.log(somar(10, 20));  // 30
```

### Arrow Functions (ES6)

Sintaxe mais concisa para escrever funções.

```javascript
// Sintaxe completa
const somar = (a, b) => {
    return a + b;
};

// Sintaxe simplificada (return implícito)
const multiplicar = (a, b) => a * b;

// Um único parâmetro (parênteses opcionais)
const dobro = x => x * 2;

// Sem parâmetros
const saudar = () => console.log("Olá!");

console.log(somar(5, 3));        // 8
console.log(multiplicar(4, 2));  // 8
console.log(dobro(5));           // 10
saudar();                        // Olá!
```

### Diferenças entre Arrow Functions e Funções Tradicionais

```javascript
// Funções tradicionais têm seu próprio 'this'
function Pessoa() {
    this.idade = 0;

    setInterval(function() {
        this.idade++;  // 'this' aqui não é Pessoa
    }, 1000);
}

// Arrow functions herdam 'this' do contexto pai
function PessoaArrow() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;  // 'this' aqui é PessoaArrow
    }, 1000);
}
```

## Return (Retorno)

### Retornando Valores

```javascript
function calcularArea(largura, altura) {
    return largura * altura;
}

let area = calcularArea(5, 10);
console.log(area);  // 50
```

### Múltiplos Returns

```javascript
function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    }
    return "Maior de idade";
}

console.log(verificarIdade(15));  // Menor de idade
console.log(verificarIdade(25));  // Maior de idade
```

### Retornando Objetos

```javascript
function criarPessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
}

// Shorthand (ES6)
function criarPessoaModerna(nome, idade) {
    return { nome, idade };
}

let pessoa = criarPessoa("Sávio", 25);
console.log(pessoa);  // { nome: "Sávio", idade: 25 }
```

## Escopo de Funções

### Escopo Local

```javascript
function testar() {
    let mensagem = "Olá!";
    console.log(mensagem);  // Funciona
}

testar();
// console.log(mensagem);  // Erro: mensagem não está definida
```

### Closure (Fechamento)

```javascript
function criarContador() {
    let contador = 0;

    return function() {
        contador++;
        return contador;
    };
}

let contar = criarContador();
console.log(contar());  // 1
console.log(contar());  // 2
console.log(contar());  // 3
```

## Parâmetros Rest (ES6)

Permite representar um número indefinido de argumentos como array.

```javascript
function somar(...numeros) {
    let total = 0;
    for (let num of numeros) {
        total += num;
    }
    return total;
}

console.log(somar(1, 2, 3));        // 6
console.log(somar(1, 2, 3, 4, 5));  // 15
```

## Operador Spread

```javascript
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

let notas = [8, 7, 9];
console.log(calcularMedia(...notas));  // 8
```

## Funções Callback

Funções passadas como argumentos para outras funções.

```javascript
function executar(callback) {
    console.log("Iniciando...");
    callback();
    console.log("Finalizado!");
}

executar(function() {
    console.log("Executando callback");
});

// Com arrow function
executar(() => console.log("Callback moderno"));
```

## Funções de Alta Ordem

Funções que recebem ou retornam outras funções.

```javascript
// Recebe função como argumento
function processar(array, funcao) {
    let resultado = [];
    for (let item of array) {
        resultado.push(funcao(item));
    }
    return resultado;
}

let numeros = [1, 2, 3, 4, 5];
let dobrados = processar(numeros, x => x * 2);
console.log(dobrados);  // [2, 4, 6, 8, 10]

// Retorna uma função
function multiplicador(fator) {
    return function(numero) {
        return numero * fator;
    };
}

let dobrar = multiplicador(2);
let triplicar = multiplicador(3);

console.log(dobrar(5));     // 10
console.log(triplicar(5));  // 15
```

## Funções Anônimas

Funções sem nome, geralmente usadas como callbacks.

```javascript
setTimeout(function() {
    console.log("Executado após 1 segundo");
}, 1000);

// Com arrow function
setTimeout(() => {
    console.log("Forma moderna");
}, 1000);
```

## IIFE (Immediately Invoked Function Expression)

Função que é executada imediatamente após ser definida.

```javascript
(function() {
    console.log("Executada imediatamente!");
})();

// Com arrow function
(() => {
    console.log("IIFE moderna!");
})();
```

## Recursão

Função que chama a si mesma.

```javascript
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

console.log(fatorial(5));  // 120

// Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7));  // 13
```

## Métodos de Funções

### call()

```javascript
function apresentar(saudacao) {
    console.log(`${saudacao}, meu nome é ${this.nome}`);
}

let pessoa = { nome: "Sávio" };
apresentar.call(pessoa, "Olá");  // Olá, meu nome é Sávio
```

### apply()

```javascript
function somar(a, b, c) {
    return a + b + c;
}

let numeros = [1, 2, 3];
console.log(somar.apply(null, numeros));  // 6
```

### bind()

```javascript
let pessoa = {
    nome: "Sávio",
    apresentar: function() {
        console.log(`Olá, sou ${this.nome}`);
    }
};

let apresentacao = pessoa.apresentar.bind(pessoa);
setTimeout(apresentacao, 1000);  // Olá, sou Sávio
```

## Boas Práticas

### 1. Use Nomes Descritivos

```javascript
// Ruim
function calc(x, y) {
    return x * y;
}

// Bom
function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}
```

### 2. Uma Função, Uma Responsabilidade

```javascript
// Ruim - faz muitas coisas
function processar(dados) {
    validar(dados);
    transformar(dados);
    salvar(dados);
    enviarEmail(dados);
}

// Bom - separar responsabilidades
function validarDados(dados) { /* ... */ }
function transformarDados(dados) { /* ... */ }
function salvarDados(dados) { /* ... */ }
function enviarEmail(dados) { /* ... */ }
```

### 3. Evite Muitos Parâmetros

```javascript
// Ruim
function criar(nome, idade, email, telefone, endereco, cidade) {
    // ...
}

// Bom - use objetos
function criarUsuario({ nome, idade, email, telefone, endereco, cidade }) {
    // ...
}

criarUsuario({
    nome: "Sávio",
    idade: 25,
    email: "exemplo@email.com"
});
```

### 4. Return Cedo

```javascript
// Ruim
function verificar(numero) {
    if (numero > 0) {
        return "Positivo";
    } else {
        return "Negativo ou zero";
    }
}

// Bom
function verificarNumero(numero) {
    if (numero > 0) return "Positivo";
    return "Negativo ou zero";
}
```

## Exercícios Práticos

```javascript
// 1. Crie uma função que calcula o IMC
function calcularIMC(peso, altura) {
    return peso / (altura ** 2);
}

// 2. Função que verifica se número é par
const ehPar = numero => numero % 2 === 0;

// 3. Função que converte Celsius para Fahrenheit
const celsiusParaFahrenheit = celsius => (celsius * 9/5) + 32;

// 4. Função que retorna o maior de três números
function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
}

// 5. Função que inverte uma string
function inverterString(str) {
    return str.split('').reverse().join('');
}

// 6. Função que conta vogais em uma string
function contarVogais(str) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;
    for (let char of str) {
        if (vogais.includes(char)) contador++;
    }
    return contador;
}

// Testando
console.log(calcularIMC(70, 1.75));                // 22.86
console.log(ehPar(4));                              // true
console.log(celsiusParaFahrenheit(25));            // 77
console.log(maiorNumero(10, 25, 18));              // 25
console.log(inverterString("JavaScript"));         // "tpircSavaJ"
console.log(contarVogais("Ensinando JavaScript")); // 8
```

## Próximos Passos

Continue para: [Objetos](objetos.md)

---

**Desenvolvido por Sávio** | [GitHub](https://github.com/SavioCodes)
