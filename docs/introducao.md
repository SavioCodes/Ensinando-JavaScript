# Introdução ao JavaScript

## O que é JavaScript?

JavaScript é uma linguagem de programação de alto nível, interpretada e multi-paradigma. Criada em 1995 por Brendan Eich, inicialmente foi desenvolvida para adicionar interatividade às páginas web, mas hoje é uma das linguagens mais populares e versáteis do mundo.

## História

- **1995**: Criado por Brendan Eich em apenas 10 dias na Netscape
- **1997**: Padronizado como ECMAScript (ES)
- **2009**: Node.js permite JavaScript no servidor
- **2015**: ECMAScript 6 (ES6) traz grandes melhorias
- **Atualmente**: Uma das linguagens mais usadas no mundo

## Por que aprender JavaScript?

### 1. Linguagem do Front-end
JavaScript é a única linguagem que roda nativamente nos navegadores, sendo essencial para desenvolvimento web moderno.

### 2. Versatilidade
- **Front-end**: React, Vue, Angular
- **Back-end**: Node.js, Express
- **Mobile**: React Native, Ionic
- **Desktop**: Electron
- **IoT**: Johnny-Five

### 3. Comunidade Enorme
Milhões de desenvolvedores, bibliotecas abundantes e recursos de aprendizado infinitos.

### 4. Mercado de Trabalho
Alta demanda por desenvolvedores JavaScript em todo o mundo.

## Características Principais

### Interpretada
Não precisa ser compilada, o código é executado diretamente pelo navegador ou Node.js.

### Multi-paradigma
Suporta programação:
- Orientada a objetos
- Funcional
- Imperativa
- Baseada em eventos

### Dinamicamente Tipada
Não é necessário declarar tipos de variáveis explicitamente.

```javascript
let variavel = 10;      // número
variavel = "texto";     // agora é string
variavel = true;        // agora é boolean
```

### Single-threaded com Event Loop
Executa uma tarefa por vez, mas usa operações assíncronas para não bloquear a execução.

## Onde JavaScript Roda?

### 1. Navegadores
Todos os navegadores modernos têm um motor JavaScript:
- Chrome: V8
- Firefox: SpiderMonkey
- Safari: JavaScriptCore
- Edge: V8

### 2. Servidor (Node.js)
Permite executar JavaScript fora do navegador.

### 3. Outros Ambientes
- Aplicativos mobile
- Aplicativos desktop
- Servidores de jogos
- Dispositivos IoT

## Primeiro Código JavaScript

### No Navegador

Crie um arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Meu Primeiro JavaScript</title>
</head>
<body>
    <h1>Olá, JavaScript!</h1>

    <script>
        console.log("Hello, World!");
        alert("Bem-vindo ao JavaScript!");
    </script>
</body>
</html>
```

### Console do Navegador

Abra o DevTools (F12) e acesse o Console:

```javascript
console.log("Meu primeiro código!");
```

### Node.js

Crie um arquivo `app.js`:

```javascript
console.log("Hello, World!");
```

Execute no terminal:
```bash
node app.js
```

## Sintaxe Básica

### Case Sensitive
JavaScript diferencia maiúsculas de minúsculas:

```javascript
let nome = "Sávio";
let Nome = "JavaScript";  // variável diferente
```

### Ponto e Vírgula
Opcional, mas recomendado:

```javascript
console.log("Com ponto e vírgula");
console.log("Sem ponto e vírgula")  // também funciona
```

### Comentários

```javascript
// Comentário de linha única

/*
   Comentário
   de múltiplas
   linhas
*/
```

## Ferramentas Necessárias

### Editor de Código
- Visual Studio Code (recomendado)
- Sublime Text
- Atom
- WebStorm

### Navegador Moderno
- Google Chrome (recomendado)
- Firefox
- Edge
- Safari

### Node.js (Opcional)
Para executar JavaScript fora do navegador.
Download: [nodejs.org](https://nodejs.org)

## Próximos Passos

Agora que você entende o que é JavaScript e sua importância, é hora de começar a programar! Continue para o próximo tópico: [Variáveis e Tipos de Dados](variaveis.md).

## Recursos Adicionais

- [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [W3Schools JavaScript](https://www.w3schools.com/js/)

---

**Desenvolvido por Sávio** | [GitHub](https://github.com/SavioCodes)
