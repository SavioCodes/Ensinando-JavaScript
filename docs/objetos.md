# Objetos em JavaScript

## O que são Objetos?

Objetos são coleções de propriedades relacionadas, onde cada propriedade é uma associação entre um nome (chave) e um valor. São a estrutura de dados mais importante em JavaScript.

## Criando Objetos

### Objeto Literal

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25,
    profissao: "Desenvolvedor"
};

console.log(pessoa);
```

### Objeto Vazio

```javascript
let obj = {};
console.log(obj);  // {}
```

### Usando new Object()

```javascript
let pessoa = new Object();
pessoa.nome = "Sávio";
pessoa.idade = 25;
```

## Acessando Propriedades

### Notação de Ponto

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25
};

console.log(pessoa.nome);   // Sávio
console.log(pessoa.idade);  // 25
```

### Notação de Colchetes

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25
};

console.log(pessoa["nome"]);   // Sávio
console.log(pessoa["idade"]);  // 25

// Útil para propriedades dinâmicas
let propriedade = "nome";
console.log(pessoa[propriedade]);  // Sávio
```

## Modificando Objetos

### Adicionando Propriedades

```javascript
let pessoa = {
    nome: "Sávio"
};

pessoa.idade = 25;
pessoa["profissao"] = "Desenvolvedor";

console.log(pessoa);
// { nome: "Sávio", idade: 25, profissao: "Desenvolvedor" }
```

### Modificando Propriedades

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25
};

pessoa.idade = 26;
console.log(pessoa.idade);  // 26
```

### Deletando Propriedades

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25,
    cidade: "São Paulo"
};

delete pessoa.cidade;
console.log(pessoa);  // { nome: "Sávio", idade: 25 }
```

## Métodos de Objetos

Funções dentro de objetos são chamadas de métodos.

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25,

    apresentar: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    },

    // Sintaxe curta (ES6)
    aniversario() {
        this.idade++;
        console.log(`Agora tenho ${this.idade} anos`);
    }
};

pessoa.apresentar();   // Olá, meu nome é Sávio
pessoa.aniversario();  // Agora tenho 26 anos
```

## This

A palavra-chave `this` refere-se ao objeto atual.

```javascript
let pessoa = {
    nome: "Sávio",
    saudar() {
        console.log(`Olá, sou ${this.nome}`);
    }
};

pessoa.saudar();  // Olá, sou Sávio
```

## Objetos Aninhados

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25,
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo"
    },
    contato: {
        email: "savio@example.com",
        telefone: "11999999999"
    }
};

console.log(pessoa.endereco.cidade);  // São Paulo
console.log(pessoa.contato.email);    // savio@example.com
```

## Propriedades Computadas (ES6)

```javascript
let propriedade = "nome";
let valor = "Sávio";

let pessoa = {
    [propriedade]: valor,
    ["idade"]: 25
};

console.log(pessoa);  // { nome: "Sávio", idade: 25 }
```

## Shorthand Properties (ES6)

```javascript
let nome = "Sávio";
let idade = 25;

// Forma antiga
let pessoa1 = {
    nome: nome,
    idade: idade
};

// Forma moderna (shorthand)
let pessoa2 = {
    nome,
    idade
};

console.log(pessoa2);  // { nome: "Sávio", idade: 25 }
```

## Destructuring (Desestruturação)

### Desestruturação Básica

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25,
    profissao: "Desenvolvedor"
};

// Extrair propriedades
let { nome, idade } = pessoa;
console.log(nome);   // Sávio
console.log(idade);  // 25
```

### Com Nomes Diferentes

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25
};

let { nome: n, idade: i } = pessoa;
console.log(n);  // Sávio
console.log(i);  // 25
```

### Com Valores Padrão

```javascript
let pessoa = {
    nome: "Sávio"
};

let { nome, idade = 18 } = pessoa;
console.log(nome);   // Sávio
console.log(idade);  // 18 (valor padrão)
```

### Desestruturação Aninhada

```javascript
let pessoa = {
    nome: "Sávio",
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
};

let { endereco: { cidade, estado } } = pessoa;
console.log(cidade);  // São Paulo
console.log(estado);  // SP
```

## Métodos Úteis de Object

### Object.keys()

Retorna um array com as chaves do objeto.

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25,
    profissao: "Desenvolvedor"
};

let chaves = Object.keys(pessoa);
console.log(chaves);  // ["nome", "idade", "profissao"]
```

### Object.values()

Retorna um array com os valores do objeto.

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25,
    profissao: "Desenvolvedor"
};

let valores = Object.values(pessoa);
console.log(valores);  // ["Sávio", 25, "Desenvolvedor"]
```

### Object.entries()

Retorna um array de arrays [chave, valor].

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25
};

let entradas = Object.entries(pessoa);
console.log(entradas);
// [["nome", "Sávio"], ["idade", 25]]

// Iterando
for (let [chave, valor] of entradas) {
    console.log(`${chave}: ${valor}`);
}
```

### Object.assign()

Copia propriedades de um ou mais objetos para um objeto destino.

```javascript
let pessoa = { nome: "Sávio" };
let detalhes = { idade: 25, profissao: "Desenvolvedor" };

let completo = Object.assign({}, pessoa, detalhes);
console.log(completo);
// { nome: "Sávio", idade: 25, profissao: "Desenvolvedor" }
```

### Spread Operator (...)

Forma moderna de copiar/mesclar objetos.

```javascript
let pessoa = { nome: "Sávio" };
let detalhes = { idade: 25, profissao: "Desenvolvedor" };

let completo = { ...pessoa, ...detalhes };
console.log(completo);
// { nome: "Sávio", idade: 25, profissao: "Desenvolvedor" }

// Cópia de objeto
let copia = { ...pessoa };
```

### Object.freeze()

Impede modificações no objeto.

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25
};

Object.freeze(pessoa);

pessoa.idade = 30;  // Não funciona
delete pessoa.nome; // Não funciona

console.log(pessoa);  // { nome: "Sávio", idade: 25 }
```

### Object.seal()

Impede adicionar/remover propriedades, mas permite modificar existentes.

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25
};

Object.seal(pessoa);

pessoa.idade = 30;        // Funciona
pessoa.profissao = "Dev"; // Não funciona
delete pessoa.nome;       // Não funciona

console.log(pessoa);  // { nome: "Sávio", idade: 30 }
```

### hasOwnProperty()

Verifica se uma propriedade existe no objeto.

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25
};

console.log(pessoa.hasOwnProperty("nome"));      // true
console.log(pessoa.hasOwnProperty("profissao")); // false
```

## Iterando sobre Objetos

### for...in

```javascript
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
```

### Object.keys() com forEach

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25
};

Object.keys(pessoa).forEach(chave => {
    console.log(`${chave}: ${pessoa[chave]}`);
});
```

## JSON (JavaScript Object Notation)

### Objeto para JSON

```javascript
let pessoa = {
    nome: "Sávio",
    idade: 25,
    programador: true
};

let json = JSON.stringify(pessoa);
console.log(json);
// {"nome":"Sávio","idade":25,"programador":true}
```

### JSON para Objeto

```javascript
let json = '{"nome":"Sávio","idade":25}';
let pessoa = JSON.parse(json);

console.log(pessoa.nome);  // Sávio
console.log(pessoa.idade); // 25
```

## Construtores e Classes

### Função Construtora (Forma Antiga)

```javascript
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.apresentar = function() {
        console.log(`Olá, sou ${this.nome}`);
    };
}

let pessoa1 = new Pessoa("Sávio", 25);
let pessoa2 = new Pessoa("JavaScript", 28);

pessoa1.apresentar();  // Olá, sou Sávio
pessoa2.apresentar();  // Olá, sou JavaScript
```

### Classes (ES6)

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, sou ${this.nome}`);
    }

    aniversario() {
        this.idade++;
    }
}

let pessoa = new Pessoa("Sávio", 25);
pessoa.apresentar();   // Olá, sou Sávio
pessoa.aniversario();
console.log(pessoa.idade);  // 26
```

## Exercícios Práticos

```javascript
// 1. Crie um objeto livro
let livro = {
    titulo: "JavaScript Avançado",
    autor: "Sávio",
    ano: 2025,
    paginas: 300,
    lido: false,

    marcarComoLido() {
        this.lido = true;
    },

    detalhes() {
        return `${this.titulo} por ${this.autor}, ${this.ano}`;
    }
};

// 2. Crie um objeto calculadora
let calculadora = {
    somar: (a, b) => a + b,
    subtrair: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b
};

console.log(calculadora.somar(10, 5));  // 15

// 3. Clone um objeto
let original = { nome: "Sávio", idade: 25 };
let clone = { ...original };

// 4. Mescle dois objetos
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let mesclado = { ...obj1, ...obj2 };
console.log(mesclado);  // { a: 1, b: 3, c: 4 }

// 5. Conte propriedades
let contar = Object.keys(livro).length;
console.log(contar);  // 6
```

## Próximos Passos

Continue para: [Arrays](arrays.md)

---

**Desenvolvido por Sávio** | [GitHub](https://github.com/SavioCodes)
