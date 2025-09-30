# Arrays em JavaScript

## O que são Arrays?

Arrays são estruturas de dados que armazenam uma coleção ordenada de elementos. Cada elemento tem uma posição numérica chamada índice (começando em 0).

## Criando Arrays

### Array Literal

```javascript
let numeros = [1, 2, 3, 4, 5];
let frutas = ["maçã", "banana", "laranja"];
let misto = [1, "texto", true, { nome: "Sávio" }, [1, 2]];
```

### Array Vazio

```javascript
let vazio = [];
```

### Usando new Array()

```javascript
let numeros = new Array(1, 2, 3, 4, 5);
let tamanho = new Array(10);  // Array com 10 posições vazias
```

### Array.from()

```javascript
let letras = Array.from("JavaScript");
console.log(letras);  // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// Criar array de números
let numeros = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(numeros);  // [1, 2, 3, 4, 5]
```

## Acessando Elementos

```javascript
let frutas = ["maçã", "banana", "laranja"];

console.log(frutas[0]);  // maçã (primeiro elemento)
console.log(frutas[1]);  // banana
console.log(frutas[2]);  // laranja

// Último elemento
console.log(frutas[frutas.length - 1]);  // laranja
```

## Propriedades e Métodos Básicos

### length

```javascript
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas.length);  // 3
```

### Modificando Arrays

```javascript
let frutas = ["maçã", "banana"];

// Adicionar elemento
frutas[2] = "laranja";
console.log(frutas);  // ["maçã", "banana", "laranja"]

// Modificar elemento
frutas[1] = "morango";
console.log(frutas);  // ["maçã", "morango", "laranja"]
```

## Métodos de Adição e Remoção

### push() - Adiciona no final

```javascript
let frutas = ["maçã", "banana"];
frutas.push("laranja");
frutas.push("uva", "manga");

console.log(frutas);  // ["maçã", "banana", "laranja", "uva", "manga"]
```

### pop() - Remove do final

```javascript
let frutas = ["maçã", "banana", "laranja"];
let ultimo = frutas.pop();

console.log(ultimo);  // laranja
console.log(frutas);  // ["maçã", "banana"]
```

### unshift() - Adiciona no início

```javascript
let frutas = ["banana", "laranja"];
frutas.unshift("maçã");

console.log(frutas);  // ["maçã", "banana", "laranja"]
```

### shift() - Remove do início

```javascript
let frutas = ["maçã", "banana", "laranja"];
let primeiro = frutas.shift();

console.log(primeiro);  // maçã
console.log(frutas);    // ["banana", "laranja"]
```

### splice() - Adiciona/Remove em qualquer posição

```javascript
let numeros = [1, 2, 3, 4, 5];

// Remove 2 elementos a partir do índice 2
numeros.splice(2, 2);
console.log(numeros);  // [1, 2, 5]

// Adiciona elementos no índice 1
numeros.splice(1, 0, 10, 20);
console.log(numeros);  // [1, 10, 20, 2, 5]

// Substitui elementos
numeros.splice(1, 2, 100);
console.log(numeros);  // [1, 100, 2, 5]
```

## Métodos de Busca

### indexOf() - Encontra índice

```javascript
let frutas = ["maçã", "banana", "laranja", "banana"];

console.log(frutas.indexOf("banana"));  // 1
console.log(frutas.indexOf("uva"));     // -1 (não encontrado)
```

### lastIndexOf() - Último índice

```javascript
let frutas = ["maçã", "banana", "laranja", "banana"];
console.log(frutas.lastIndexOf("banana"));  // 3
```

### includes() - Verifica se existe

```javascript
let frutas = ["maçã", "banana", "laranja"];

console.log(frutas.includes("banana"));  // true
console.log(frutas.includes("uva"));     // false
```

### find() - Encontra elemento

```javascript
let numeros = [5, 12, 8, 130, 44];

let encontrado = numeros.find(num => num > 10);
console.log(encontrado);  // 12 (primeiro maior que 10)
```

### findIndex() - Encontra índice com condição

```javascript
let numeros = [5, 12, 8, 130, 44];

let indice = numeros.findIndex(num => num > 10);
console.log(indice);  // 1
```

## Métodos de Iteração

### forEach() - Executa função para cada elemento

```javascript
let frutas = ["maçã", "banana", "laranja"];

frutas.forEach(fruta => {
    console.log(fruta);
});

// Com índice
frutas.forEach((fruta, indice) => {
    console.log(`${indice}: ${fruta}`);
});
```

### map() - Transforma array

```javascript
let numeros = [1, 2, 3, 4, 5];

let dobrados = numeros.map(num => num * 2);
console.log(dobrados);  // [2, 4, 6, 8, 10]

// Exemplo prático
let pessoas = [
    { nome: "Sávio", idade: 25 },
    { nome: "Ana", idade: 30 }
];

let nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);  // ["Sávio", "Ana"]
```

### filter() - Filtra elementos

```javascript
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = numeros.filter(num => num % 2 === 0);
console.log(pares);  // [2, 4, 6, 8, 10]

// Exemplo prático
let pessoas = [
    { nome: "Sávio", idade: 25 },
    { nome: "Ana", idade: 17 },
    { nome: "João", idade: 30 }
];

let maiores = pessoas.filter(pessoa => pessoa.idade >= 18);
console.log(maiores);  // [{ nome: "Sávio", idade: 25 }, { nome: "João", idade: 30 }]
```

### reduce() - Reduz a um único valor

```javascript
let numeros = [1, 2, 3, 4, 5];

let soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma);  // 15

// Exemplo: encontrar maior valor
let maior = numeros.reduce((max, atual) => atual > max ? atual : max, numeros[0]);
console.log(maior);  // 5

// Exemplo: contar ocorrências
let frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];
let contagem = frutas.reduce((acc, fruta) => {
    acc[fruta] = (acc[fruta] || 0) + 1;
    return acc;
}, {});
console.log(contagem);  // { maçã: 3, banana: 2, laranja: 1 }
```

### some() - Verifica se algum elemento atende condição

```javascript
let numeros = [1, 2, 3, 4, 5];

let temPar = numeros.some(num => num % 2 === 0);
console.log(temPar);  // true
```

### every() - Verifica se todos atendem condição

```javascript
let numeros = [2, 4, 6, 8];

let todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares);  // true
```

## Métodos de Ordenação

### sort() - Ordena array

```javascript
// Strings
let frutas = ["banana", "maçã", "laranja"];
frutas.sort();
console.log(frutas);  // ["banana", "laranja", "maçã"]

// Números (precisa de função comparadora)
let numeros = [10, 5, 20, 3, 15];
numeros.sort((a, b) => a - b);  // Crescente
console.log(numeros);  // [3, 5, 10, 15, 20]

numeros.sort((a, b) => b - a);  // Decrescente
console.log(numeros);  // [20, 15, 10, 5, 3]

// Objetos
let pessoas = [
    { nome: "João", idade: 30 },
    { nome: "Ana", idade: 25 },
    { nome: "Sávio", idade: 28 }
];

pessoas.sort((a, b) => a.idade - b.idade);
console.log(pessoas);  // Ordenado por idade
```

### reverse() - Inverte array

```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros);  // [5, 4, 3, 2, 1]
```

## Métodos de Transformação

### join() - Converte para string

```javascript
let frutas = ["maçã", "banana", "laranja"];

let texto = frutas.join();
console.log(texto);  // "maçã,banana,laranja"

let textoComHifen = frutas.join(" - ");
console.log(textoComHifen);  // "maçã - banana - laranja"
```

### concat() - Concatena arrays

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let concatenado = arr1.concat(arr2, arr3);
console.log(concatenado);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Usando spread operator
let resultado = [...arr1, ...arr2, ...arr3];
console.log(resultado);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### slice() - Extrai parte do array

```javascript
let frutas = ["maçã", "banana", "laranja", "uva", "manga"];

let algumas = frutas.slice(1, 3);
console.log(algumas);  // ["banana", "laranja"]

let ultimas = frutas.slice(-2);
console.log(ultimas);  // ["uva", "manga"]

// slice() não modifica o array original
console.log(frutas);  // ["maçã", "banana", "laranja", "uva", "manga"]
```

### flat() - Achata arrays aninhados

```javascript
let aninhado = [1, 2, [3, 4, [5, 6]]];

let achatado = aninhado.flat();
console.log(achatado);  // [1, 2, 3, 4, [5, 6]]

let totalmenteAchatado = aninhado.flat(2);
console.log(totalmenteAchatado);  // [1, 2, 3, 4, 5, 6]

let infinito = aninhado.flat(Infinity);
console.log(infinito);  // [1, 2, 3, 4, 5, 6]
```

## Spread Operator

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Combinar arrays
let combinado = [...arr1, ...arr2];
console.log(combinado);  // [1, 2, 3, 4, 5, 6]

// Copiar array
let copia = [...arr1];

// Adicionar elementos
let novo = [...arr1, 4, 5];
console.log(novo);  // [1, 2, 3, 4, 5]
```

## Destructuring (Desestruturação)

```javascript
let numeros = [1, 2, 3, 4, 5];

// Extrair valores
let [primeiro, segundo] = numeros;
console.log(primeiro);  // 1
console.log(segundo);   // 2

// Pular elementos
let [a, , c] = numeros;
console.log(a, c);  // 1 3

// Rest operator
let [x, ...resto] = numeros;
console.log(x);      // 1
console.log(resto);  // [2, 3, 4, 5]

// Valores padrão
let [p, q, r = 10] = [1, 2];
console.log(r);  // 10
```

## Arrays Multidimensionais

```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][0]);  // 1
console.log(matriz[1][2]);  // 6

// Iterando
matriz.forEach(linha => {
    linha.forEach(elemento => {
        console.log(elemento);
    });
});
```

## Exercícios Práticos

```javascript
// 1. Somar todos os números de um array
let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma);  // 15

// 2. Remover duplicatas
let arr = [1, 2, 2, 3, 4, 4, 5];
let unicos = [...new Set(arr)];
console.log(unicos);  // [1, 2, 3, 4, 5]

// 3. Encontrar maior e menor valor
let valores = [10, 5, 20, 3, 15];
let maior = Math.max(...valores);
let menor = Math.min(...valores);
console.log(maior, menor);  // 20 3

// 4. Contar palavras em uma frase
let frase = "JavaScript é uma linguagem incrível";
let palavras = frase.split(" ");
console.log(palavras.length);  // 5

// 5. Inverter string usando array
let texto = "JavaScript";
let invertido = texto.split("").reverse().join("");
console.log(invertido);  // "tpircSavaJ"

// 6. Média de idades
let pessoas = [
    { nome: "Sávio", idade: 25 },
    { nome: "Ana", idade: 30 },
    { nome: "João", idade: 28 }
];

let mediaIdade = pessoas.reduce((acc, p) => acc + p.idade, 0) / pessoas.length;
console.log(mediaIdade);  // 27.67
```

## Próximos Passos

Continue para: [Condicionais](condicionais.md)

---

**Desenvolvido por Sávio** | [GitHub](https://github.com/SavioCodes)
