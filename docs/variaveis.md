# Variáveis e Tipos de Dados

## O que são Variáveis?

Variáveis são "containers" que armazenam valores na memória. Pense nelas como caixas etiquetadas onde você guarda informações para usar depois.

## Declarando Variáveis

JavaScript possui três formas de declarar variáveis: `var`, `let` e `const`.

### let (Recomendado)

Declara uma variável com escopo de bloco que pode ser reatribuída.

```javascript
let nome = "Sávio";
let idade = 25;
let estudante = true;

console.log(nome);  // Sávio

// Pode ser reatribuída
nome = "JavaScript";
console.log(nome);  // JavaScript
```

### const (Recomendado)

Declara uma constante com escopo de bloco que NÃO pode ser reatribuída.

```javascript
const PI = 3.14159;
const NOME_SITE = "Ensinando JavaScript";

console.log(PI);  // 3.14159

// Erro: não pode reatribuir
// PI = 3.14;  // TypeError
```

**Importante**: `const` não torna objetos imutáveis, apenas a referência.

```javascript
const pessoa = { nome: "Sávio" };
pessoa.nome = "JavaScript";  // Funciona!
console.log(pessoa.nome);  // JavaScript

// Mas não pode reatribuir a variável inteira
// pessoa = { nome: "Outro" };  // Erro!
```

### var (Legado - Evite usar)

Forma antiga de declarar variáveis. Tem escopo de função e pode causar problemas.

```javascript
var idade = 30;
var idade = 25;  // Pode redeclarar (problema!)
console.log(idade);  // 25
```

## Escopo de Variáveis

### Escopo de Bloco (let e const)

```javascript
{
    let x = 10;
    const y = 20;
    console.log(x, y);  // 10 20
}

// console.log(x);  // Erro: x não está definido
```

### Escopo de Função (var)

```javascript
function teste() {
    var x = 10;
    console.log(x);  // 10
}

teste();
// console.log(x);  // Erro: x não está definido
```

### Escopo Global

```javascript
let global = "Disponível em todo lugar";

function mostrar() {
    console.log(global);  // Funciona!
}

mostrar();  // Disponível em todo lugar
```

## Tipos de Dados

JavaScript possui tipos de dados primitivos e objetos.

### Primitivos

#### 1. String (Texto)

```javascript
let nome = "Sávio";
let sobrenome = 'Silva';
let frase = `Olá, ${nome}!`;  // Template literals

console.log(frase);  // Olá, Sávio!
```

**Métodos úteis**:
```javascript
let texto = "JavaScript";

texto.length;              // 10
texto.toLowerCase();       // "javascript"
texto.toUpperCase();       // "JAVASCRIPT"
texto.includes("Script");  // true
texto.substring(0, 4);     // "Java"
texto.replace("Java", "Type");  // "TypeScript"
```

#### 2. Number (Números)

```javascript
let inteiro = 42;
let decimal = 3.14;
let negativo = -10;
let exponencial = 2e3;  // 2000

// Operações matemáticas
let soma = 10 + 5;        // 15
let subtracao = 10 - 5;   // 5
let multiplicacao = 10 * 5;  // 50
let divisao = 10 / 5;     // 2
let resto = 10 % 3;       // 1
let potencia = 2 ** 3;    // 8
```

**Valores especiais**:
```javascript
let infinito = Infinity;
let naoNumero = NaN;  // Not a Number

console.log(10 / 0);      // Infinity
console.log("abc" * 2);   // NaN
```

#### 3. Boolean (Verdadeiro/Falso)

```javascript
let verdadeiro = true;
let falso = false;

let maiorIdade = 18 >= 18;  // true
let menorQue = 10 < 5;      // false
```

#### 4. Undefined

Variável declarada mas não inicializada.

```javascript
let semValor;
console.log(semValor);  // undefined
```

#### 5. Null

Ausência intencional de valor.

```javascript
let vazio = null;
console.log(vazio);  // null
```

#### 6. Symbol (ES6)

Identificador único e imutável.

```javascript
let simbolo1 = Symbol("id");
let simbolo2 = Symbol("id");

console.log(simbolo1 === simbolo2);  // false
```

#### 7. BigInt (ES11)

Números inteiros muito grandes.

```javascript
let numeroGrande = 1234567890123456789012345678901234567890n;
let outro = BigInt("9007199254740991");
```

### Objetos (Não-Primitivos)

#### Object

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25,
    programador: true
};

console.log(pessoa.nome);  // Sávio
```

#### Array

```javascript
let numeros = [1, 2, 3, 4, 5];
let misto = [1, "texto", true, { nome: "Sávio" }];

console.log(numeros[0]);  // 1
console.log(misto.length);  // 4
```

## Verificando Tipos

### typeof

```javascript
typeof "Sávio";       // "string"
typeof 42;            // "number"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof null;          // "object" (bug histórico)
typeof {};            // "object"
typeof [];            // "object"
typeof function(){};  // "function"
```

### instanceof

```javascript
let arr = [1, 2, 3];
console.log(arr instanceof Array);  // true

let obj = { nome: "Sávio" };
console.log(obj instanceof Object);  // true
```

## Conversão de Tipos

### Para String

```javascript
let num = 42;
String(num);        // "42"
num.toString();     // "42"
num + "";           // "42"
```

### Para Number

```javascript
let str = "42";
Number(str);        // 42
parseInt(str);      // 42
parseFloat("3.14"); // 3.14
+str;               // 42
```

### Para Boolean

```javascript
Boolean(1);         // true
Boolean(0);         // false
Boolean("texto");   // true
Boolean("");        // false
!!"texto";          // true (dupla negação)
```

## Valores Falsy

Valores que se comportam como `false`:

```javascript
false
0
-0
0n
""  // string vazia
null
undefined
NaN
```

Todos os outros valores são **truthy** (comportam-se como `true`).

```javascript
if ("Sávio") {
    console.log("Isso é executado!");  // truthy
}

if (0) {
    console.log("Isso NÃO é executado");  // falsy
}
```

## Boas Práticas

1. **Use `const` por padrão**, `let` quando precisar reatribuir
2. **Evite `var`** completamente
3. **Nomes descritivos**: `nomeCompleto` ao invés de `nc`
4. **camelCase**: `meuNome`, `idadeUsuario`
5. **CONSTANTS em MAIÚSCULAS**: `API_KEY`, `MAX_SIZE`
6. **Inicialize variáveis**: evite `undefined` acidental

```javascript
// Ruim
var x = 10;
let a;

// Bom
const IDADE_MAXIMA = 120;
let nomeUsuario = "Sávio";
let contador = 0;
```

## Exercícios Práticos

```javascript
// 1. Declare uma variável com seu nome
const meuNome = "Seu nome aqui";

// 2. Declare variáveis para idade, altura e peso
let idade = 25;
let altura = 1.75;
let peso = 70;

// 3. Calcule o IMC (peso / altura²)
const imc = peso / (altura ** 2);
console.log(`IMC: ${imc.toFixed(2)}`);

// 4. Verifique o tipo de cada variável
console.log(typeof meuNome);
console.log(typeof idade);
console.log(typeof altura);

// 5. Crie um objeto pessoa com suas informações
const pessoa = {
    nome: meuNome,
    idade: idade,
    altura: altura,
    peso: peso,
    imc: imc
};

console.log(pessoa);
```

## Próximos Passos

Continue para: [Funções](funcoes.md)

---

**Desenvolvido por Sávio** | [GitHub](https://github.com/SavioCodes)
