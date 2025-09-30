# Exercícios Práticos de JavaScript

Este arquivo contém exercícios práticos para consolidar o conhecimento de JavaScript. Cada seção corresponde a um tópico específico.

## Variáveis e Tipos de Dados

### Exercício 1: Calculadora de IMC
```javascript
// Crie uma calculadora de IMC que:
// - Recebe peso e altura
// - Calcula o IMC
// - Retorna a classificação

function calcularIMC(peso, altura) {
    // Seu código aqui
}

// Teste
console.log(calcularIMC(70, 1.75)); // Deve retornar "Peso normal"
```

### Exercício 2: Conversor de Temperatura
```javascript
// Crie funções para converter:
// - Celsius para Fahrenheit
// - Fahrenheit para Celsius
// - Celsius para Kelvin

function celsiusParaFahrenheit(celsius) {
    // Seu código aqui
}

function fahrenheitParaCelsius(fahrenheit) {
    // Seu código aqui
}

function celsiusParaKelvin(celsius) {
    // Seu código aqui
}

// Teste
console.log(celsiusParaFahrenheit(25)); // 77
```

## Funções

### Exercício 3: Validador de CPF
```javascript
// Crie uma função que valida se um CPF é válido
// Considere: 11 dígitos, não todos iguais

function validarCPF(cpf) {
    // Seu código aqui
}

// Teste
console.log(validarCPF("123.456.789-10")); // true ou false
```

### Exercício 4: Gerador de Slug
```javascript
// Crie uma função que converte texto em slug
// Exemplo: "Ensinando JavaScript" -> "ensinando-javascript"

function gerarSlug(texto) {
    // Seu código aqui
}

// Teste
console.log(gerarSlug("Ensinando JavaScript")); // "ensinando-javascript"
```

## Objetos

### Exercício 5: Sistema de Biblioteca
```javascript
// Crie um objeto Livro com:
// - título, autor, ano, páginas, lido
// - método para marcar como lido
// - método para exibir informações

let livro = {
    // Seu código aqui
};
```

### Exercício 6: Carrinho de Compras
```javascript
// Crie um objeto carrinho com:
// - array de itens
// - método adicionar
// - método remover
// - método calcular total

let carrinho = {
    itens: [],
    // Seus métodos aqui
};
```

## Arrays

### Exercício 7: Manipulação de Array
```javascript
// Dado um array de números:
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a) Retorne apenas os números pares
// b) Retorne o dobro de cada número
// c) Retorne a soma de todos os números
// d) Retorne o maior número
// e) Retorne a média dos números
```

### Exercício 8: Filtro de Produtos
```javascript
// Dado um array de produtos:
let produtos = [
    { nome: "Notebook", preco: 3000, categoria: "eletrônicos" },
    { nome: "Mouse", preco: 50, categoria: "eletrônicos" },
    { nome: "Cadeira", preco: 500, categoria: "móveis" },
    { nome: "Mesa", preco: 800, categoria: "móveis" }
];

// a) Retorne produtos da categoria "eletrônicos"
// b) Retorne produtos com preço menor que 600
// c) Retorne o produto mais caro
// d) Calcule o valor total de todos os produtos
```

## Condicionais

### Exercício 9: Calculadora de Desconto
```javascript
// Crie uma função que calcula desconto baseado em:
// - Valor da compra
// - Tipo de cliente (vip, regular, novo)
// VIP: 20%, Regular: 10%, Novo: 5%

function calcularDesconto(valor, tipoCliente) {
    // Seu código aqui
}

// Teste
console.log(calcularDesconto(1000, "vip")); // 800
```

### Exercício 10: Jogo Pedra, Papel, Tesoura
```javascript
// Crie uma função que joga pedra, papel, tesoura
// Recebe duas escolhas e retorna o vencedor

function jogar(jogador1, jogador2) {
    // Seu código aqui
}

// Teste
console.log(jogar("pedra", "tesoura")); // "Jogador 1 vence"
```

## Loops

### Exercício 11: Tabuada
```javascript
// Crie uma função que retorna a tabuada de um número
// De 1 a 10

function tabuada(numero) {
    // Seu código aqui
}

tabuada(7);
```

### Exercício 12: FizzBuzz
```javascript
// Imprima números de 1 a 100, mas:
// - Múltiplos de 3: "Fizz"
// - Múltiplos de 5: "Buzz"
// - Múltiplos de 3 e 5: "FizzBuzz"

function fizzBuzz() {
    // Seu código aqui
}
```

### Exercício 13: Números Primos
```javascript
// Crie uma função que retorna array com todos os números primos até N

function numerosPrimosAte(n) {
    // Seu código aqui
}

console.log(numerosPrimosAte(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
```

## DOM

### Exercício 14: Lista de Tarefas
```html
<!-- Crie uma lista de tarefas com:
- Input para adicionar tarefa
- Botão para adicionar
- Lista de tarefas
- Botão para marcar como concluída
- Botão para remover -->

<!DOCTYPE html>
<html>
<head>
    <title>Lista de Tarefas</title>
</head>
<body>
    <!-- Seu HTML aqui -->
    <script>
        // Seu JavaScript aqui
    </script>
</body>
</html>
```

### Exercício 15: Contador
```html
<!-- Crie um contador com:
- Display do número
- Botão incrementar
- Botão decrementar
- Botão zerar -->
```

## Eventos

### Exercício 16: Validação de Formulário
```html
<!-- Crie um formulário com validação em tempo real:
- Nome (mínimo 3 caracteres)
- Email (formato válido)
- Senha (mínimo 6 caracteres)
- Confirmação de senha (igual à senha) -->
```

### Exercício 17: Galeria de Imagens
```html
<!-- Crie uma galeria com:
- Miniaturas clicáveis
- Imagem principal grande
- Navegação (anterior/próximo)
- Teclas de atalho (setas) -->
```

## Promises e Async/Await

### Exercício 18: Simulador de API
```javascript
// Simule uma API que retorna dados após delay
// Implemente funções para:
// - Buscar usuário
// - Buscar posts do usuário
// - Buscar comentários do post

function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simular dados
            resolve({ id: id, nome: "Usuário " + id });
        }, 1000);
    });
}

// Complete com buscarPosts e buscarComentarios
```

### Exercício 19: Promise.all
```javascript
// Busque dados de múltiplos usuários em paralelo
// Use Promise.all para esperar todos

async function buscarVariosUsuarios(ids) {
    // Seu código aqui
}

// Teste
buscarVariosUsuarios([1, 2, 3, 4, 5]);
```

## Fetch API

### Exercício 20: CRUD com JSONPlaceholder
```javascript
// Use a API https://jsonplaceholder.typicode.com
// Implemente:

class PostsAPI {
    constructor() {
        this.baseURL = "https://jsonplaceholder.typicode.com/posts";
    }

    // Listar todos os posts
    async listar() {
        // Seu código aqui
    }

    // Buscar post por ID
    async buscar(id) {
        // Seu código aqui
    }

    // Criar novo post
    async criar(post) {
        // Seu código aqui
    }

    // Atualizar post
    async atualizar(id, dados) {
        // Seu código aqui
    }

    // Deletar post
    async deletar(id) {
        // Seu código aqui
    }
}

// Teste todas as funções
```

## Projetos Completos

### Projeto 1: Calculadora
```html
<!-- Crie uma calculadora funcional com:
- Display
- Botões 0-9
- Operações básicas (+, -, *, /)
- Limpar (C)
- Igual (=)
- Suporte a teclado -->
```

### Projeto 2: Quiz Interativo
```javascript
// Crie um quiz com:
// - Perguntas e respostas
// - Sistema de pontuação
// - Feedback imediato
// - Resultado final

let perguntas = [
    {
        pergunta: "Qual é a capital do Brasil?",
        opcoes: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        resposta: 2
    },
    // Adicione mais perguntas
];

// Implemente o quiz
```

### Projeto 3: Clone do Google Keep
```html
<!-- Crie um app de notas com:
- Adicionar nota (título e conteúdo)
- Listar notas
- Editar nota
- Deletar nota
- Cores para notas
- Buscar notas
- Salvar no localStorage -->
```

### Projeto 4: Weather App
```javascript
// Crie um app de clima usando API
// (Use OpenWeatherMap ou similar)

// Recursos:
// - Buscar cidade
// - Exibir temperatura atual
// - Exibir condições
// - Previsão para próximos dias
// - Ícones do clima
// - Geolocalização
```

### Projeto 5: Pomodoro Timer
```html
<!-- Crie um timer Pomodoro com:
- 25 minutos de trabalho
- 5 minutos de pausa
- Pausar/Retomar
- Resetar
- Notificação sonora
- Contador de sessões -->
```

## Desafios Avançados

### Desafio 1: Algoritmo de Ordenação
```javascript
// Implemente os algoritmos:
// - Bubble Sort
// - Selection Sort
// - Insertion Sort
// Compare a performance
```

### Desafio 2: Validador de Expressões
```javascript
// Valide se parênteses, colchetes e chaves estão balanceados
// Exemplo: "{[()]}" = válido, "{[(])}" = inválido

function validarExpressao(str) {
    // Seu código aqui
}
```

### Desafio 3: Jogo da Velha
```html
<!-- Crie um jogo da velha com:
- Tabuleiro 3x3
- Dois jogadores alternados
- Detecção de vitória
- Detecção de empate
- Botão reiniciar
- Placar -->
```

### Desafio 4: Sistema de Login
```javascript
// Implemente sistema de autenticação com:
// - Registro de usuário
// - Login
// - Logout
// - Proteção de rotas
// - Sessão persistente
// - Hash de senha (simulado)
```

### Desafio 5: E-commerce Simples
```html
<!-- Crie um e-commerce básico com:
- Listagem de produtos
- Filtros (categoria, preço)
- Carrinho de compras
- Adicionar/remover do carrinho
- Cálculo de total
- Finalizar compra
- LocalStorage para persistência -->
```

## Soluções

As soluções para esses exercícios podem ser encontradas em repositórios separados ou você pode tentar resolvê-los por conta própria primeiro para melhor aprendizado!

## Dicas para Resolver os Exercícios

1. **Leia atentamente** o enunciado
2. **Planeje** antes de codificar
3. **Teste** cada função isoladamente
4. **Refatore** seu código após funcionar
5. **Comente** partes complexas
6. **Pesquise** quando necessário
7. **Pratique regularmente**

## Recursos Adicionais

- [MDN Web Docs](https://developer.mozilla.org/pt-BR/)
- [JavaScript.info](https://javascript.info/)
- [freeCodeCamp](https://www.freecodecamp.org/)
- [Exercism](https://exercism.org/tracks/javascript)
- [CodeWars](https://www.codewars.com/)

---

**Desenvolvido por Sávio** | [GitHub](https://github.com/SavioCodes)

## Continue Aprendendo

Parabéns por completar este guia! Continue praticando e explorando recursos mais avançados:

- Frameworks (React, Vue, Angular)
- Node.js e Back-end
- TypeScript
- Testes (Jest, Mocha)
- Build Tools (Webpack, Vite)
- E muito mais!

**Bons estudos e sucesso na sua jornada com JavaScript!**
