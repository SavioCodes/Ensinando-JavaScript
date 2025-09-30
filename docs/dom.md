# Manipulação do DOM (Document Object Model)

## O que é o DOM?

O DOM (Document Object Model) é uma representação da estrutura HTML em forma de árvore de objetos. Permite que JavaScript acesse e manipule elementos HTML, estilos CSS e conteúdo da página.

## Estrutura do DOM

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Minha Página</title>
  </head>
  <body>
    <h1>Título</h1>
    <p>Parágrafo</p>
  </body>
</html>
```

Árvore DOM:
```
document
  └── html
      ├── head
      │   └── title
      └── body
          ├── h1
          └── p
```

## Selecionando Elementos

### getElementById()

Seleciona elemento pelo ID.

```javascript
let titulo = document.getElementById("titulo");
console.log(titulo);
```

```html
<h1 id="titulo">Meu Título</h1>
```

### getElementsByClassName()

Retorna HTMLCollection de elementos com a classe.

```javascript
let itens = document.getElementsByClassName("item");
console.log(itens);  // HTMLCollection

// Converter para array
let itensArray = Array.from(itens);
```

```html
<div class="item">Item 1</div>
<div class="item">Item 2</div>
<div class="item">Item 3</div>
```

### getElementsByTagName()

Retorna HTMLCollection de elementos pela tag.

```javascript
let paragrafos = document.getElementsByTagName("p");

for (let p of paragrafos) {
    console.log(p.textContent);
}
```

### querySelector()

Seleciona o primeiro elemento que corresponde ao seletor CSS.

```javascript
// Por ID
let titulo = document.querySelector("#titulo");

// Por classe
let item = document.querySelector(".item");

// Por tag
let paragrafo = document.querySelector("p");

// Seletores complexos
let link = document.querySelector("nav a.active");
let primeiro = document.querySelector("ul li:first-child");
```

### querySelectorAll()

Retorna NodeList de todos os elementos que correspondem.

```javascript
let itens = document.querySelectorAll(".item");

// Iterar
itens.forEach(item => {
    console.log(item.textContent);
});

// Converter para array
let itensArray = [...itens];
```

### Comparação de Métodos

```javascript
// Mais rápido, mas menos flexível
document.getElementById("id");
document.getElementsByClassName("classe");

// Mais lento, mas muito flexível (recomendado)
document.querySelector("#id");
document.querySelectorAll(".classe");
```

## Manipulando Conteúdo

### textContent

Obtém ou define o texto do elemento.

```javascript
let titulo = document.querySelector("h1");

// Obter
console.log(titulo.textContent);

// Definir
titulo.textContent = "Novo Título";
```

### innerHTML

Obtém ou define HTML interno.

```javascript
let container = document.querySelector("#container");

// Obter
console.log(container.innerHTML);

// Definir
container.innerHTML = "<p>Novo <strong>conteúdo</strong></p>";

// Adicionar
container.innerHTML += "<p>Mais conteúdo</p>";
```

**Cuidado**: innerHTML pode expor a XSS (Cross-Site Scripting). Use textContent para texto puro.

### outerHTML

Inclui o próprio elemento.

```javascript
let div = document.querySelector("div");
console.log(div.outerHTML);  // <div>...</div>
```

### value

Para inputs, textarea, select.

```javascript
let input = document.querySelector("#nome");

// Obter valor
console.log(input.value);

// Definir valor
input.value = "Sávio";
```

## Manipulando Atributos

### getAttribute()

```javascript
let link = document.querySelector("a");
let href = link.getAttribute("href");
console.log(href);
```

### setAttribute()

```javascript
let img = document.querySelector("img");
img.setAttribute("src", "nova-imagem.jpg");
img.setAttribute("alt", "Descrição");
```

### removeAttribute()

```javascript
let input = document.querySelector("input");
input.removeAttribute("disabled");
```

### hasAttribute()

```javascript
let elemento = document.querySelector("#teste");

if (elemento.hasAttribute("data-id")) {
    console.log("Tem o atributo");
}
```

### Propriedades Diretas

```javascript
let link = document.querySelector("a");

// Obter
console.log(link.href);
console.log(link.id);
console.log(link.className);

// Definir
link.href = "https://google.com";
link.id = "meu-link";
link.target = "_blank";
```

### Data Attributes

```javascript
let elemento = document.querySelector("#usuario");

// HTML: <div id="usuario" data-id="123" data-nome="Sávio">

// Obter
console.log(elemento.dataset.id);    // 123
console.log(elemento.dataset.nome);  // Sávio

// Definir
elemento.dataset.idade = "25";
```

## Manipulando Classes CSS

### className

```javascript
let div = document.querySelector("div");

// Obter
console.log(div.className);  // "classe1 classe2"

// Definir (substitui todas)
div.className = "nova-classe";
```

### classList

API moderna para manipular classes.

```javascript
let elemento = document.querySelector(".box");

// Adicionar classe
elemento.classList.add("ativa");
elemento.classList.add("grande", "azul");

// Remover classe
elemento.classList.remove("ativa");

// Alternar classe
elemento.classList.toggle("escondido");

// Verificar se tem classe
if (elemento.classList.contains("ativa")) {
    console.log("Elemento está ativo");
}

// Substituir classe
elemento.classList.replace("antiga", "nova");
```

## Manipulando Estilos CSS

### style

Acessa estilos inline.

```javascript
let div = document.querySelector("div");

// Definir
div.style.color = "red";
div.style.backgroundColor = "yellow";
div.style.fontSize = "20px";
div.style.display = "none";

// Múltiplas propriedades
Object.assign(div.style, {
    color: "white",
    backgroundColor: "black",
    padding: "20px",
    borderRadius: "5px"
});

// Obter (apenas inline)
console.log(div.style.color);
```

### getComputedStyle()

Obtém estilos computados (incluindo CSS).

```javascript
let div = document.querySelector("div");
let estilos = window.getComputedStyle(div);

console.log(estilos.color);
console.log(estilos.fontSize);
console.log(estilos.display);
```

## Criando e Inserindo Elementos

### createElement()

```javascript
// Criar elemento
let div = document.createElement("div");
let p = document.createElement("p");
let img = document.createElement("img");

// Definir propriedades
p.textContent = "Parágrafo criado com JavaScript";
p.className = "paragrafo";
img.src = "imagem.jpg";
```

### appendChild()

Adiciona como último filho.

```javascript
let container = document.querySelector("#container");
let novoP = document.createElement("p");
novoP.textContent = "Novo parágrafo";

container.appendChild(novoP);
```

### append()

Similar ao appendChild, mas pode adicionar múltiplos e texto.

```javascript
let container = document.querySelector("#container");
let p1 = document.createElement("p");
let p2 = document.createElement("p");

// Múltiplos elementos
container.append(p1, p2);

// Texto direto
container.append("Texto simples");

// Misturar
container.append(p1, "Texto", p2);
```

### prepend()

Adiciona no início.

```javascript
let lista = document.querySelector("ul");
let novoItem = document.createElement("li");
novoItem.textContent = "Primeiro item";

lista.prepend(novoItem);
```

### insertBefore()

Insere antes de um elemento específico.

```javascript
let lista = document.querySelector("ul");
let referencia = lista.children[2];
let novoItem = document.createElement("li");
novoItem.textContent = "Inserido antes";

lista.insertBefore(novoItem, referencia);
```

### insertAdjacentHTML()

Insere HTML em posição específica.

```javascript
let div = document.querySelector("div");

// Antes do elemento
div.insertAdjacentHTML("beforebegin", "<p>Antes</p>");

// Dentro, no início
div.insertAdjacentHTML("afterbegin", "<p>Início</p>");

// Dentro, no final
div.insertAdjacentHTML("beforeend", "<p>Final</p>");

// Depois do elemento
div.insertAdjacentHTML("afterend", "<p>Depois</p>");
```

## Removendo Elementos

### remove()

Remove o próprio elemento.

```javascript
let elemento = document.querySelector(".remover");
elemento.remove();
```

### removeChild()

Remove filho específico.

```javascript
let lista = document.querySelector("ul");
let item = lista.children[0];

lista.removeChild(item);
```

### Limpar Conteúdo

```javascript
let container = document.querySelector("#container");

// Opção 1
container.innerHTML = "";

// Opção 2 (mais performática)
while (container.firstChild) {
    container.removeChild(container.firstChild);
}

// Opção 3 (moderna)
container.replaceChildren();
```

## Navegando pelo DOM

### Propriedades de Navegação

```javascript
let elemento = document.querySelector(".item");

// Pais
elemento.parentElement;
elemento.parentNode;

// Filhos
elemento.children;          // HTMLCollection de elementos
elemento.childNodes;        // NodeList (inclui texto)
elemento.firstElementChild;
elemento.lastElementChild;
elemento.firstChild;
elemento.lastChild;

// Irmãos
elemento.nextElementSibling;
elemento.previousElementSibling;
elemento.nextSibling;
elemento.previousSibling;
```

### Exemplo Prático

```javascript
let item = document.querySelector(".item");

// Subir até encontrar ul
let lista = item.closest("ul");

// Pegar todos os irmãos
let irmãos = Array.from(item.parentElement.children)
    .filter(el => el !== item);

// Verificar se tem filhos
if (elemento.hasChildNodes()) {
    console.log("Tem filhos");
}
```

## Clonando Elementos

```javascript
let original = document.querySelector(".card");

// Clone raso (sem filhos)
let cloneRaso = original.cloneNode(false);

// Clone profundo (com todos os filhos)
let cloneProfundo = original.cloneNode(true);

// Adicionar clone
document.body.appendChild(cloneProfundo);
```

## Exemplo Prático Completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Lista de Tarefas</title>
    <style>
        .concluida {
            text-decoration: line-through;
            opacity: 0.6;
        }
    </style>
</head>
<body>
    <h1>Minhas Tarefas</h1>

    <input type="text" id="novaTarefa" placeholder="Digite uma tarefa">
    <button id="adicionar">Adicionar</button>

    <ul id="lista"></ul>

    <script>
        const input = document.querySelector("#novaTarefa");
        const btnAdicionar = document.querySelector("#adicionar");
        const lista = document.querySelector("#lista");

        function adicionarTarefa() {
            const texto = input.value.trim();

            if (texto === "") {
                alert("Digite uma tarefa!");
                return;
            }

            // Criar elementos
            const li = document.createElement("li");
            const span = document.createElement("span");
            const btnConcluir = document.createElement("button");
            const btnRemover = document.createElement("button");

            // Configurar elementos
            span.textContent = texto;
            btnConcluir.textContent = "✓";
            btnRemover.textContent = "✗";

            // Eventos
            btnConcluir.addEventListener("click", () => {
                li.classList.toggle("concluida");
            });

            btnRemover.addEventListener("click", () => {
                li.remove();
            });

            // Montar estrutura
            li.appendChild(span);
            li.appendChild(btnConcluir);
            li.appendChild(btnRemover);

            // Adicionar à lista
            lista.appendChild(li);

            // Limpar input
            input.value = "";
            input.focus();
        }

        btnAdicionar.addEventListener("click", adicionarTarefa);

        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                adicionarTarefa();
            }
        });
    </script>
</body>
</html>
```

## Próximos Passos

Continue para: [Eventos](eventos.md)

---

**Desenvolvido por Sávio** | [GitHub](https://github.com/SavioCodes)
