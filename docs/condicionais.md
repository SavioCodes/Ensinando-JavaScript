# Condicionais em JavaScript

## O que são Condicionais?

Condicionais permitem que seu código tome decisões e execute diferentes blocos de código baseado em condições específicas. São fundamentais para criar lógica em programas.

## if

Executa um bloco de código se a condição for verdadeira.

```javascript
let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
}
```

## if...else

Executa um bloco se a condição for verdadeira, outro se for falsa.

```javascript
let idade = 15;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

## if...else if...else

Múltiplas condições em sequência.

```javascript
let nota = 85;

if (nota >= 90) {
    console.log("Aprovado com A");
} else if (nota >= 80) {
    console.log("Aprovado com B");
} else if (nota >= 70) {
    console.log("Aprovado com C");
} else if (nota >= 60) {
    console.log("Aprovado com D");
} else {
    console.log("Reprovado");
}
```

## Operadores de Comparação

```javascript
let a = 10;
let b = 5;

// Igualdade
console.log(a == b);   // false (compara valores)
console.log(a === b);  // false (compara valores e tipos)

// Desigualdade
console.log(a != b);   // true
console.log(a !== b);  // true

// Maior e menor
console.log(a > b);    // true
console.log(a < b);    // false
console.log(a >= 10);  // true
console.log(a <= 10);  // true
```

### == vs ===

```javascript
// == (igualdade solta - faz conversão de tipo)
console.log(5 == "5");    // true
console.log(true == 1);   // true
console.log(null == undefined);  // true

// === (igualdade estrita - não faz conversão)
console.log(5 === "5");   // false
console.log(true === 1);  // false
console.log(null === undefined);  // false

// RECOMENDADO: Use sempre ===
```

## Operadores Lógicos

### && (E - AND)

Retorna true se todas as condições forem verdadeiras.

```javascript
let idade = 25;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir");
}

// Mais condições
let nota = 85;
let frequencia = 80;

if (nota >= 70 && frequencia >= 75 && !temPendencias) {
    console.log("Aprovado");
}
```

### || (OU - OR)

Retorna true se pelo menos uma condição for verdadeira.

```javascript
let dia = "sábado";

if (dia === "sábado" || dia === "domingo") {
    console.log("É fim de semana!");
}

// Valor padrão
let nome = inputUsuario || "Visitante";
```

### ! (NÃO - NOT)

Inverte o valor booleano.

```javascript
let chovendo = false;

if (!chovendo) {
    console.log("Não está chovendo");
}

let usuario = null;
if (!usuario) {
    console.log("Usuário não está logado");
}
```

### Combinando Operadores

```javascript
let idade = 25;
let temIngresso = true;
let ehVIP = false;

if ((idade >= 18 && temIngresso) || ehVIP) {
    console.log("Pode entrar no evento");
}
```

## Operador Ternário

Sintaxe concisa para if...else simples.

```javascript
// Sintaxe: condição ? valorSeVerdadeiro : valorSeFalso

let idade = 20;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);  // Maior de idade

// Mais exemplos
let nota = 75;
let resultado = nota >= 60 ? "Aprovado" : "Reprovado";

let numero = 10;
let tipo = numero % 2 === 0 ? "Par" : "Ímpar";

// Ternário aninhado (use com moderação)
let pontos = 85;
let nivel = pontos >= 90 ? "Ouro" :
            pontos >= 70 ? "Prata" :
            "Bronze";
```

## switch

Útil quando há muitas condições baseadas no mesmo valor.

```javascript
let diaSemana = 3;
let nomeDia;

switch (diaSemana) {
    case 1:
        nomeDia = "Segunda";
        break;
    case 2:
        nomeDia = "Terça";
        break;
    case 3:
        nomeDia = "Quarta";
        break;
    case 4:
        nomeDia = "Quinta";
        break;
    case 5:
        nomeDia = "Sexta";
        break;
    case 6:
        nomeDia = "Sábado";
        break;
    case 7:
        nomeDia = "Domingo";
        break;
    default:
        nomeDia = "Dia inválido";
}

console.log(nomeDia);  // Quarta
```

### switch sem break

```javascript
let mes = 2;
let diasNoMes;

switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        diasNoMes = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        diasNoMes = 30;
        break;
    case 2:
        diasNoMes = 28;
        break;
    default:
        diasNoMes = 0;
}

console.log(diasNoMes);  // 28
```

## Valores Truthy e Falsy

JavaScript converte valores para booleanos em contextos condicionais.

### Valores Falsy

```javascript
if (false) console.log("Não executa");
if (0) console.log("Não executa");
if (-0) console.log("Não executa");
if (0n) console.log("Não executa");
if ("") console.log("Não executa");
if (null) console.log("Não executa");
if (undefined) console.log("Não executa");
if (NaN) console.log("Não executa");
```

### Valores Truthy

Todos os outros valores são truthy.

```javascript
if (true) console.log("Executa");
if (1) console.log("Executa");
if (-1) console.log("Executa");
if ("texto") console.log("Executa");
if ("0") console.log("Executa");  // String não vazia
if ([]) console.log("Executa");   // Array vazio é truthy
if ({}) console.log("Executa");   // Objeto vazio é truthy
```

## Short-Circuit Evaluation

### && (AND)

Retorna o primeiro valor falsy ou o último valor.

```javascript
let usuario = { nome: "Sávio" };

// Se usuario existir, acessa nome
let nome = usuario && usuario.nome;
console.log(nome);  // Sávio

// Se não existir, retorna falsy
let inexistente = null && inexistente.nome;
console.log(inexistente);  // null
```

### || (OR)

Retorna o primeiro valor truthy ou o último valor.

```javascript
let nomeUsuario = "";
let nomeExibido = nomeUsuario || "Visitante";
console.log(nomeExibido);  // Visitante

// Com múltiplos valores
let cor = valorUsuario || valorPadrao || "azul";
```

### ?? (Nullish Coalescing - ES2020)

Retorna o lado direito apenas se o esquerdo for `null` ou `undefined`.

```javascript
let valor1 = 0 || 100;   // 100 (0 é falsy)
let valor2 = 0 ?? 100;   // 0 (0 não é null/undefined)

let nome1 = "" || "Padrão";   // "Padrão"
let nome2 = "" ?? "Padrão";   // ""

// Útil para valores que podem ser 0 ou ""
let quantidade = 0;
let mostrar = quantidade ?? 10;  // 0
```

## Optional Chaining (?.) - ES2020

Acessa propriedades aninhadas sem erro se alguma for null/undefined.

```javascript
let usuario = {
    nome: "Sávio",
    endereco: {
        cidade: "São Paulo"
    }
};

// Sem optional chaining
let cidade1 = usuario && usuario.endereco && usuario.endereco.cidade;

// Com optional chaining
let cidade2 = usuario?.endereco?.cidade;
console.log(cidade2);  // São Paulo

// Se não existir
let inexistente = usuario?.contato?.telefone;
console.log(inexistente);  // undefined (sem erro)

// Com métodos
let resultado = usuario?.calcular?.();  // Não dá erro se não existir

// Com arrays
let primeiro = lista?.[0];
```

## Condicionais em Funções

```javascript
function verificarIdade(idade) {
    if (idade < 0) {
        return "Idade inválida";
    }

    if (idade < 18) {
        return "Menor de idade";
    }

    if (idade < 65) {
        return "Adulto";
    }

    return "Idoso";
}

console.log(verificarIdade(25));   // Adulto
console.log(verificarIdade(-5));   // Idade inválida
console.log(verificarIdade(70));   // Idoso
```

## Guard Clauses

Pattern de retornar cedo para evitar aninhamento.

```javascript
// Ruim - muito aninhamento
function processar(dados) {
    if (dados) {
        if (dados.valido) {
            if (dados.ativo) {
                // processar
            }
        }
    }
}

// Bom - guard clauses
function processarMelhor(dados) {
    if (!dados) return;
    if (!dados.valido) return;
    if (!dados.ativo) return;

    // processar
}
```

## Exemplos Práticos

### Validação de Login

```javascript
function validarLogin(usuario, senha) {
    if (!usuario) {
        return "Usuário não pode estar vazio";
    }

    if (!senha) {
        return "Senha não pode estar vazia";
    }

    if (senha.length < 6) {
        return "Senha deve ter no mínimo 6 caracteres";
    }

    return "Login válido";
}
```

### Calculadora de Desconto

```javascript
function calcularDesconto(valor, tipo) {
    let desconto = 0;

    if (tipo === "vip") {
        desconto = 0.20;
    } else if (tipo === "premium") {
        desconto = 0.15;
    } else if (tipo === "regular") {
        desconto = 0.10;
    }

    return valor * (1 - desconto);
}

console.log(calcularDesconto(100, "vip"));  // 80
```

### Verificar Faixa Etária

```javascript
function classificarIdade(idade) {
    if (idade < 0) return "Idade inválida";
    if (idade <= 12) return "Criança";
    if (idade <= 17) return "Adolescente";
    if (idade <= 59) return "Adulto";
    return "Idoso";
}
```

### Sistema de Notas

```javascript
function obterConceito(nota) {
    if (nota < 0 || nota > 100) {
        return "Nota inválida";
    }

    switch (true) {
        case nota >= 90:
            return "A - Excelente";
        case nota >= 80:
            return "B - Ótimo";
        case nota >= 70:
            return "C - Bom";
        case nota >= 60:
            return "D - Regular";
        default:
            return "F - Reprovado";
    }
}
```

## Exercícios Práticos

```javascript
// 1. Par ou Ímpar
function parOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

// 2. Maior de três números
function maiorDeTres(a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
}

// 3. Verificar triângulo
function ehTriangulo(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

// 4. Calcular IMC com classificação
function classificarIMC(peso, altura) {
    let imc = peso / (altura ** 2);

    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}

// 5. Ano bissexto
function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// 6. Dia da semana
function obterDiaSemana(numero) {
    switch (numero) {
        case 1: return "Domingo";
        case 2: return "Segunda";
        case 3: return "Terça";
        case 4: return "Quarta";
        case 5: return "Quinta";
        case 6: return "Sexta";
        case 7: return "Sábado";
        default: return "Número inválido";
    }
}

// Testando
console.log(parOuImpar(7));                    // Ímpar
console.log(maiorDeTres(10, 25, 18));          // 25
console.log(ehTriangulo(3, 4, 5));             // true
console.log(classificarIMC(70, 1.75));         // Peso normal
console.log(ehBissexto(2024));                 // true
console.log(obterDiaSemana(3));                // Terça
```

## Próximos Passos

Continue para: [Loops](loops.md)

---

**Desenvolvido por Sávio** | [GitHub](https://github.com/SavioCodes)
