# Loops em JavaScript

## O que são Loops?

Loops (laços de repetição) permitem executar um bloco de código múltiplas vezes. São essenciais para tarefas repetitivas e iteração sobre dados.

## for

Loop mais comum, ideal quando você sabe quantas vezes quer repetir.

### Sintaxe Básica

```javascript
for (inicialização; condição; incremento) {
    // código a ser repetido
}
```

### Exemplos

```javascript
// Contar de 1 a 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// 1, 2, 3, 4, 5

// Contar de 10 a 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Incrementos diferentes
for (let i = 0; i <= 10; i += 2) {
    console.log(i);  // 0, 2, 4, 6, 8, 10
}

// Iterar sobre array
let frutas = ["maçã", "banana", "laranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

### Loops Aninhados

```javascript
// Tabuada
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// Matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}
```

## while

Executa enquanto a condição for verdadeira. Use quando não souber quantas iterações serão necessárias.

```javascript
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
// 1, 2, 3, 4, 5

// Exemplo prático: jogo de adivinhação
let numeroSecreto = 7;
let palpite = 0;
let tentativas = 0;

while (palpite !== numeroSecreto) {
    palpite = Math.floor(Math.random() * 10) + 1;
    tentativas++;
    console.log(`Tentativa ${tentativas}: ${palpite}`);
}

console.log(`Acertou em ${tentativas} tentativas!`);
```

### Cuidado com Loops Infinitos

```javascript
// RUIM - loop infinito!
let i = 1;
while (i <= 5) {
    console.log(i);
    // Esqueceu de incrementar i
}

// BOM
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;  // Incrementa
}
```

## do...while

Similar ao `while`, mas executa pelo menos uma vez antes de verificar a condição.

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
// 1, 2, 3, 4, 5

// Diferença: executa mesmo se condição for falsa
let x = 10;
do {
    console.log(x);  // Executa uma vez
} while (x < 5);     // Condição falsa
```

### Exemplo Prático: Validação

```javascript
let senha;

do {
    senha = prompt("Digite uma senha (mínimo 6 caracteres):");
} while (senha.length < 6);

console.log("Senha válida!");
```

## for...of

Itera sobre valores de objetos iteráveis (arrays, strings, etc).

```javascript
// Array
let frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
    console.log(fruta);
}
// maçã, banana, laranja

// String
let texto = "JavaScript";

for (let letra of texto) {
    console.log(letra);
}
// J, a, v, a, S, c, r, i, p, t

// Com índice usando entries()
let cores = ["vermelho", "azul", "verde"];

for (let [indice, cor] of cores.entries()) {
    console.log(`${indice}: ${cor}`);
}
// 0: vermelho
// 1: azul
// 2: verde
```

## for...in

Itera sobre propriedades enumeráveis de um objeto.

```javascript
// Objeto
let pessoa = {
    nome: "Sávio",
    idade: 25,
    profissao: "Desenvolvedor"
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
// nome: Sávio
// idade: 25
// profissao: Desenvolvedor

// Array (não recomendado - use for...of)
let numeros = [10, 20, 30];

for (let indice in numeros) {
    console.log(indice);  // 0, 1, 2 (strings!)
}
```

### for...in vs for...of

```javascript
let arr = ["a", "b", "c"];

// for...in - retorna índices (chaves)
for (let i in arr) {
    console.log(i);  // "0", "1", "2"
}

// for...of - retorna valores
for (let valor of arr) {
    console.log(valor);  // "a", "b", "c"
}
```

## break

Interrompe o loop imediatamente.

```javascript
// Parar ao encontrar número
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // Para no 5
    }
    console.log(i);
}
// 1, 2, 3, 4

// Buscar em array
let numeros = [3, 7, 12, 18, 25];
let alvo = 12;

for (let numero of numeros) {
    if (numero === alvo) {
        console.log("Encontrado!");
        break;
    }
}
```

### break em Loops Aninhados

```javascript
// break apenas sai do loop interno
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) break;
        console.log(`i=${i}, j=${j}`);
    }
}
// i=1, j=1
// i=2, j=1
// i=3, j=1

// Para sair de todos, use label
externo: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) break externo;
        console.log(`i=${i}, j=${j}`);
    }
}
// i=1, j=1
```

## continue

Pula para a próxima iteração do loop.

```javascript
// Pular números pares
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Pula pares
    }
    console.log(i);
}
// 1, 3, 5, 7, 9

// Processar apenas valores válidos
let valores = [10, -5, 20, -3, 30];

for (let valor of valores) {
    if (valor < 0) {
        continue;  // Ignora negativos
    }
    console.log(valor);
}
// 10, 20, 30
```

## forEach (Método de Array)

Não é tecnicamente um loop, mas muito usado para iteração.

```javascript
let frutas = ["maçã", "banana", "laranja"];

// Básico
frutas.forEach(fruta => {
    console.log(fruta);
});

// Com índice
frutas.forEach((fruta, indice) => {
    console.log(`${indice}: ${fruta}`);
});

// Com array
frutas.forEach((fruta, indice, array) => {
    console.log(`${indice}/${array.length}: ${fruta}`);
});
```

### forEach vs for

```javascript
let numeros = [1, 2, 3, 4, 5];

// forEach - NÃO pode usar break/continue
numeros.forEach(num => {
    if (num === 3) return;  // Pula apenas este item
    console.log(num);
});

// for - PODE usar break/continue
for (let num of numeros) {
    if (num === 3) break;  // Para completamente
    console.log(num);
}
```

## Loops e Performance

### map() vs forEach()

```javascript
let numeros = [1, 2, 3, 4, 5];

// forEach - não retorna novo array
numeros.forEach(num => num * 2);  // Não cria novo array

// map - retorna novo array
let dobrados = numeros.map(num => num * 2);
console.log(dobrados);  // [2, 4, 6, 8, 10]
```

### for vs forEach

```javascript
let arr = [1, 2, 3, 4, 5];

// for - mais rápido, mais controle
for (let i = 0; i < arr.length; i++) {
    // pode usar break/continue
}

// forEach - mais legível, funcional
arr.forEach(item => {
    // mais simples
});
```

## Padrões Comuns

### Somar elementos

```javascript
let numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (let num of numeros) {
    soma += num;
}
console.log(soma);  // 15

// Ou com reduce
let somaReduce = numeros.reduce((acc, num) => acc + num, 0);
```

### Encontrar maior valor

```javascript
let numeros = [3, 7, 2, 9, 1];
let maior = numeros[0];

for (let num of numeros) {
    if (num > maior) {
        maior = num;
    }
}
console.log(maior);  // 9
```

### Contar ocorrências

```javascript
let texto = "JavaScript";
let contador = {};

for (let letra of texto) {
    contador[letra] = (contador[letra] || 0) + 1;
}
console.log(contador);
// { J: 1, a: 2, v: 1, S: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
```

### Inverter array

```javascript
let arr = [1, 2, 3, 4, 5];
let invertido = [];

for (let i = arr.length - 1; i >= 0; i--) {
    invertido.push(arr[i]);
}
console.log(invertido);  // [5, 4, 3, 2, 1]
```

### Filtrar valores

```javascript
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];

for (let num of numeros) {
    if (num % 2 === 0) {
        pares.push(num);
    }
}
console.log(pares);  // [2, 4, 6, 8, 10]
```

## Exemplos Práticos

### Tabuada Completa

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(`\nTabuada do ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
```

### Números Primos

```javascript
function ehPrimo(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Listar primos até 50
for (let i = 2; i <= 50; i++) {
    if (ehPrimo(i)) {
        console.log(i);
    }
}
```

### Sequência de Fibonacci

```javascript
function fibonacci(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

console.log(fibonacci(10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### Validar CPF (simplificado)

```javascript
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) return false;

    // Verificar se todos os dígitos são iguais
    let todosIguais = true;
    for (let i = 1; i < cpf.length; i++) {
        if (cpf[i] !== cpf[0]) {
            todosIguais = false;
            break;
        }
    }

    return !todosIguais;
}

console.log(validarCPF("111.111.111-11"));  // false
console.log(validarCPF("123.456.789-10"));  // true
```

## Exercícios Práticos

```javascript
// 1. Fatorial
function fatorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(fatorial(5));  // 120

// 2. Contar vogais
function contarVogais(texto) {
    let vogais = "aeiouAEIOU";
    let contador = 0;

    for (let letra of texto) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVogais("JavaScript"));  // 3

// 3. Palíndromo
function ehPalindromo(texto) {
    texto = texto.toLowerCase().replace(/\s/g, '');
    let invertido = '';

    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }

    return texto === invertido;
}
console.log(ehPalindromo("arara"));  // true

// 4. Remover duplicatas
function removerDuplicatas(arr) {
    let unicos = [];

    for (let item of arr) {
        if (!unicos.includes(item)) {
            unicos.push(item);
        }
    }

    return unicos;
}
console.log(removerDuplicatas([1, 2, 2, 3, 4, 4, 5]));  // [1, 2, 3, 4, 5]

// 5. Multiplicar elementos de dois arrays
function multiplicarArrays(arr1, arr2) {
    let resultado = [];
    let tamanho = Math.min(arr1.length, arr2.length);

    for (let i = 0; i < tamanho; i++) {
        resultado.push(arr1[i] * arr2[i]);
    }

    return resultado;
}
console.log(multiplicarArrays([1, 2, 3], [4, 5, 6]));  // [4, 10, 18]

// 6. Pirâmide de asteriscos
function piramide(linhas) {
    for (let i = 1; i <= linhas; i++) {
        let espacos = ' '.repeat(linhas - i);
        let asteriscos = '*'.repeat(i * 2 - 1);
        console.log(espacos + asteriscos);
    }
}
piramide(5);
```

## Próximos Passos

Continue para: [DOM - Document Object Model](dom.md)

---

**Desenvolvido por Sávio** | [GitHub](https://github.com/SavioCodes)
