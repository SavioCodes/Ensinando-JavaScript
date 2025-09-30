# Eventos em JavaScript

## O que são Eventos?

Eventos são ações ou ocorrências que acontecem no navegador. JavaScript pode "escutar" esses eventos e executar código em resposta a eles.

## Tipos de Eventos

### Eventos de Mouse
- `click` - Clique do mouse
- `dblclick` - Clique duplo
- `mousedown` - Botão pressionado
- `mouseup` - Botão solto
- `mousemove` - Mouse se movendo
- `mouseenter` - Mouse entra no elemento
- `mouseleave` - Mouse sai do elemento
- `mouseover` - Mouse sobre o elemento
- `mouseout` - Mouse sai do elemento
- `contextmenu` - Botão direito

### Eventos de Teclado
- `keydown` - Tecla pressionada
- `keyup` - Tecla solta
- `keypress` - Tecla pressionada (obsoleto)

### Eventos de Formulário
- `submit` - Formulário enviado
- `focus` - Elemento recebe foco
- `blur` - Elemento perde foco
- `change` - Valor mudou
- `input` - Valor está mudando
- `select` - Texto selecionado

### Eventos de Documento
- `DOMContentLoaded` - DOM carregado
- `load` - Página totalmente carregada
- `resize` - Janela redimensionada
- `scroll` - Página rolada
- `unload` - Página sendo descarregada

## addEventListener()

Método moderno e recomendado para adicionar eventos.

### Sintaxe Básica

```javascript
elemento.addEventListener("tipo", função);
```

### Exemplos

```javascript
// Click em botão
let botao = document.querySelector("#btn");

botao.addEventListener("click", function() {
    console.log("Botão clicado!");
});

// Com arrow function
botao.addEventListener("click", () => {
    console.log("Botão clicado!");
});

// Função nomeada
function handleClick() {
    console.log("Botão clicado!");
}
botao.addEventListener("click", handleClick);
```

## Eventos de Mouse

### Click

```javascript
let botao = document.querySelector("#btn");

botao.addEventListener("click", (e) => {
    console.log("Clicou!");
    console.log("Posição X:", e.clientX);
    console.log("Posição Y:", e.clientY);
});
```

### Double Click

```javascript
let elemento = document.querySelector(".box");

elemento.addEventListener("dblclick", () => {
    console.log("Clique duplo!");
});
```

### Mouse Enter/Leave

```javascript
let card = document.querySelector(".card");

card.addEventListener("mouseenter", () => {
    card.style.backgroundColor = "lightblue";
});

card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = "white";
});
```

### Mouse Move

```javascript
let area = document.querySelector("#area");

area.addEventListener("mousemove", (e) => {
    console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
});
```

### Botão Direito (Context Menu)

```javascript
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();  // Previne menu padrão
    console.log("Botão direito clicado!");
});
```

## Eventos de Teclado

### Key Down

```javascript
document.addEventListener("keydown", (e) => {
    console.log("Tecla pressionada:", e.key);
    console.log("Código:", e.code);
});
```

### Detectar Teclas Específicas

```javascript
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("Enter pressionado!");
    }

    if (e.key === "Escape") {
        console.log("Escape pressionado!");
    }

    // Teclas modificadoras
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        console.log("Ctrl + S pressionado!");
    }
});
```

### Input em Tempo Real

```javascript
let input = document.querySelector("#busca");

input.addEventListener("input", (e) => {
    console.log("Valor atual:", e.target.value);
});
```

## Eventos de Formulário

### Submit

```javascript
let form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();  // Previne envio padrão

    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;

    console.log("Nome:", nome);
    console.log("Email:", email);
});
```

### Focus e Blur

```javascript
let input = document.querySelector("#campo");

input.addEventListener("focus", () => {
    input.style.borderColor = "blue";
});

input.addEventListener("blur", () => {
    input.style.borderColor = "gray";
});
```

### Change

```javascript
let select = document.querySelector("#opcoes");

select.addEventListener("change", (e) => {
    console.log("Selecionado:", e.target.value);
});

// Checkbox
let checkbox = document.querySelector("#aceito");

checkbox.addEventListener("change", (e) => {
    console.log("Marcado:", e.target.checked);
});
```

## Objeto Event

### Propriedades Úteis

```javascript
elemento.addEventListener("click", (e) => {
    // Elemento que disparou o evento
    console.log(e.target);

    // Elemento que tem o listener
    console.log(e.currentTarget);

    // Tipo do evento
    console.log(e.type);

    // Posição do mouse
    console.log(e.clientX, e.clientY);

    // Tecla pressionada
    console.log(e.key);

    // Modificadores
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
    console.log(e.altKey);
});
```

### Métodos do Event

```javascript
elemento.addEventListener("click", (e) => {
    // Previne comportamento padrão
    e.preventDefault();

    // Para propagação
    e.stopPropagation();

    // Para propagação imediata
    e.stopImmediatePropagation();
});
```

## Event Delegation (Delegação)

Adicionar listener ao pai em vez de cada filho.

```javascript
// Ruim - listener para cada item
let itens = document.querySelectorAll(".item");
itens.forEach(item => {
    item.addEventListener("click", () => {
        console.log("Item clicado");
    });
});

// Bom - delegação
let lista = document.querySelector("#lista");

lista.addEventListener("click", (e) => {
    if (e.target.classList.contains("item")) {
        console.log("Item clicado:", e.target.textContent);
    }
});
```

### Exemplo Prático

```javascript
let todoList = document.querySelector("#todoList");

todoList.addEventListener("click", (e) => {
    // Botão de remover
    if (e.target.classList.contains("btn-remover")) {
        e.target.parentElement.remove();
    }

    // Botão de concluir
    if (e.target.classList.contains("btn-concluir")) {
        e.target.parentElement.classList.toggle("concluida");
    }
});
```

## removeEventListener()

Remove um event listener.

```javascript
function handleClick() {
    console.log("Clicou!");
}

let botao = document.querySelector("#btn");

// Adicionar
botao.addEventListener("click", handleClick);

// Remover
botao.removeEventListener("click", handleClick);

// IMPORTANTE: A função precisa ser a mesma referência
```

## Eventos Personalizados

### Criar e Disparar

```javascript
// Criar evento personalizado
let evento = new CustomEvent("minhaAcao", {
    detail: { mensagem: "Dados do evento" }
});

// Escutar
document.addEventListener("minhaAcao", (e) => {
    console.log("Evento disparado:", e.detail.mensagem);
});

// Disparar
document.dispatchEvent(evento);
```

## Event Bubbling e Capturing

### Bubbling (Padrão)

Evento sobe da criança para pais.

```javascript
// HTML: <div id="pai"><div id="filho">Click</div></div>

let pai = document.querySelector("#pai");
let filho = document.querySelector("#filho");

pai.addEventListener("click", () => {
    console.log("Pai clicado");
});

filho.addEventListener("click", () => {
    console.log("Filho clicado");
});

// Clicando no filho:
// "Filho clicado"
// "Pai clicado"
```

### Capturing

Evento desce dos pais para criança.

```javascript
pai.addEventListener("click", () => {
    console.log("Pai clicado");
}, true);  // true = capturing phase

filho.addEventListener("click", () => {
    console.log("Filho clicado");
}, true);

// Clicando no filho:
// "Pai clicado"
// "Filho clicado"
```

### Parar Propagação

```javascript
filho.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Filho clicado");
});

// Agora só mostra "Filho clicado"
```

## Eventos com Once

Executar apenas uma vez.

```javascript
botao.addEventListener("click", () => {
    console.log("Executado apenas uma vez");
}, { once: true });
```

## Exemplos Práticos

### Modal

```javascript
let modal = document.querySelector("#modal");
let btnAbrir = document.querySelector("#abrirModal");
let btnFechar = document.querySelector("#fecharModal");

btnAbrir.addEventListener("click", () => {
    modal.style.display = "block";
});

btnFechar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar clicando fora
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Fechar com ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});
```

### Contador de Cliques

```javascript
let contador = 0;
let display = document.querySelector("#contador");
let btnIncrementar = document.querySelector("#incrementar");
let btnDecrementar = document.querySelector("#decrementar");
let btnZerar = document.querySelector("#zerar");

function atualizar() {
    display.textContent = contador;
}

btnIncrementar.addEventListener("click", () => {
    contador++;
    atualizar();
});

btnDecrementar.addEventListener("click", () => {
    contador--;
    atualizar();
});

btnZerar.addEventListener("click", () => {
    contador = 0;
    atualizar();
});
```

### Validação de Formulário

```javascript
let form = document.querySelector("#form");
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let erros = [];

    if (nome.value.trim() === "") {
        erros.push("Nome é obrigatório");
    }

    if (email.value.trim() === "") {
        erros.push("Email é obrigatório");
    } else if (!email.value.includes("@")) {
        erros.push("Email inválido");
    }

    if (erros.length > 0) {
        alert(erros.join("\n"));
    } else {
        console.log("Formulário válido!");
        // Enviar dados
    }
});

// Validação em tempo real
email.addEventListener("input", () => {
    if (email.value.includes("@")) {
        email.style.borderColor = "green";
    } else {
        email.style.borderColor = "red";
    }
});
```

### Scroll Infinito

```javascript
window.addEventListener("scroll", () => {
    let { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
        console.log("Chegou no final - carregar mais");
        // Carregar mais conteúdo
    }
});
```

### Drag and Drop Simples

```javascript
let arrastar = document.querySelector("#arrastar");

arrastar.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
});

let dropzone = document.querySelector("#dropzone");

dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.style.backgroundColor = "lightblue";
});

dropzone.addEventListener("dragleave", () => {
    dropzone.style.backgroundColor = "white";
});

dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    let id = e.dataTransfer.getData("text");
    let elemento = document.getElementById(id);
    dropzone.appendChild(elemento);
    dropzone.style.backgroundColor = "white";
});
```

## Debounce e Throttle

### Debounce

Executar após período de inatividade.

```javascript
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Uso
let input = document.querySelector("#busca");

input.addEventListener("input", debounce((e) => {
    console.log("Buscar:", e.target.value);
    // Fazer requisição
}, 500));
```

### Throttle

Limitar execução a intervalos.

```javascript
function throttle(func, delay) {
    let ultimo = 0;
    return function(...args) {
        let agora = Date.now();
        if (agora - ultimo >= delay) {
            ultimo = agora;
            func.apply(this, args);
        }
    };
}

// Uso
window.addEventListener("scroll", throttle(() => {
    console.log("Scrolling...");
}, 1000));
```

## Próximos Passos

Continue para: [Promises e Async/Await](promises_async.md)

---

**Desenvolvido por Sávio** | [GitHub](https://github.com/SavioCodes)
