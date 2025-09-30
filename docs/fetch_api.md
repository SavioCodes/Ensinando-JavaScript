# Fetch API

## O que é Fetch API?

Fetch API é a forma moderna de fazer requisições HTTP em JavaScript. Substitui o XMLHttpRequest e retorna Promises, facilitando o uso com async/await.

## Sintaxe Básica

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## GET Request

### Básico

```javascript
async function buscarDados() {
    try {
        let response = await fetch("https://api.example.com/users");
        let dados = await response.json();
        console.log(dados);
    } catch (erro) {
        console.error("Erro:", erro);
    }
}
```

### Com Verificação de Status

```javascript
async function buscarDados() {
    try {
        let response = await fetch("https://api.example.com/users");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let dados = await response.json();
        console.log(dados);
    } catch (erro) {
        console.error("Erro:", erro);
    }
}
```

## POST Request

### Enviando JSON

```javascript
async function criarUsuario(usuario) {
    try {
        let response = await fetch("https://api.example.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        let novoUsuario = await response.json();
        console.log("Usuário criado:", novoUsuario);
    } catch (erro) {
        console.error("Erro ao criar usuário:", erro);
    }
}

// Uso
criarUsuario({
    nome: "Sávio",
    email: "savio@example.com"
});
```

### Enviando FormData

```javascript
async function enviarFormulario() {
    let formData = new FormData();
    formData.append("nome", "Sávio");
    formData.append("email", "savio@example.com");
    formData.append("arquivo", fileInput.files[0]);

    try {
        let response = await fetch("https://api.example.com/upload", {
            method: "POST",
            body: formData
            // Não definir Content-Type, o navegador define automaticamente
        });

        let resultado = await response.json();
        console.log(resultado);
    } catch (erro) {
        console.error("Erro:", erro);
    }
}
```

## PUT Request (Atualizar)

```javascript
async function atualizarUsuario(id, dados) {
    try {
        let response = await fetch(`https://api.example.com/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        let usuarioAtualizado = await response.json();
        console.log("Usuário atualizado:", usuarioAtualizado);
    } catch (erro) {
        console.error("Erro:", erro);
    }
}

// Uso
atualizarUsuario(1, {
    nome: "Sávio Silva",
    idade: 26
});
```

## PATCH Request (Atualização Parcial)

```javascript
async function atualizarParcial(id, dados) {
    try {
        let response = await fetch(`https://api.example.com/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        let resultado = await response.json();
        console.log(resultado);
    } catch (erro) {
        console.error("Erro:", erro);
    }
}

// Uso
atualizarParcial(1, { idade: 26 });
```

## DELETE Request

```javascript
async function deletarUsuario(id) {
    try {
        let response = await fetch(`https://api.example.com/users/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        console.log("Usuário deletado com sucesso");
    } catch (erro) {
        console.error("Erro:", erro);
    }
}

// Uso
deletarUsuario(1);
```

## Headers (Cabeçalhos)

### Adicionar Headers

```javascript
async function buscarComHeaders() {
    let response = await fetch("https://api.example.com/users", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer seu-token-aqui",
            "X-Custom-Header": "valor"
        }
    });

    let dados = await response.json();
    return dados;
}
```

### Ler Headers da Resposta

```javascript
async function buscarUsuarios() {
    let response = await fetch("https://api.example.com/users");

    console.log(response.headers.get("Content-Type"));
    console.log(response.headers.get("Date"));

    // Iterar sobre headers
    for (let [chave, valor] of response.headers) {
        console.log(`${chave}: ${valor}`);
    }

    return await response.json();
}
```

## Tipos de Response

### json()

```javascript
let response = await fetch(url);
let dados = await response.json();
```

### text()

```javascript
let response = await fetch(url);
let texto = await response.text();
console.log(texto);
```

### blob()

Para arquivos binários (imagens, PDFs, etc).

```javascript
async function baixarImagem() {
    let response = await fetch("https://example.com/imagem.jpg");
    let blob = await response.blob();

    // Criar URL temporária
    let url = URL.createObjectURL(blob);

    // Exibir imagem
    let img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
}
```

### arrayBuffer()

```javascript
let response = await fetch(url);
let buffer = await response.arrayBuffer();
```

### formData()

```javascript
let response = await fetch(url);
let formData = await response.formData();
```

## Propriedades da Response

```javascript
let response = await fetch(url);

console.log(response.ok);        // true se status 200-299
console.log(response.status);    // 200, 404, etc
console.log(response.statusText); // "OK", "Not Found", etc
console.log(response.url);       // URL final (após redirects)
console.log(response.headers);   // Headers da resposta
console.log(response.redirected); // true se houve redirect
```

## Opções de Configuração

```javascript
fetch(url, {
    method: "POST",           // GET, POST, PUT, DELETE, PATCH
    headers: {                // Headers
        "Content-Type": "application/json"
    },
    body: JSON.stringify({}), // Corpo da requisição
    mode: "cors",             // cors, no-cors, same-origin
    credentials: "include",   // include, same-origin, omit
    cache: "no-cache",        // default, no-cache, reload, force-cache
    redirect: "follow",       // follow, error, manual
    referrerPolicy: "no-referrer", // Política de referrer
    signal: abortController.signal // Para cancelar requisição
});
```

## Cancelar Requisições

### AbortController

```javascript
let controller = new AbortController();
let signal = controller.signal;

fetch("https://api.example.com/data", { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(erro => {
        if (erro.name === "AbortError") {
            console.log("Requisição cancelada");
        } else {
            console.error("Erro:", erro);
        }
    });

// Cancelar após 5 segundos
setTimeout(() => controller.abort(), 5000);
```

### Timeout Personalizado

```javascript
async function fetchComTimeout(url, timeout = 5000) {
    let controller = new AbortController();

    let timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        let response = await fetch(url, {
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        return await response.json();
    } catch (erro) {
        if (erro.name === "AbortError") {
            throw new Error("Requisição expirou");
        }
        throw erro;
    }
}
```

## Tratamento de Erros

### Padrão Completo

```javascript
async function buscarDados(url) {
    try {
        let response = await fetch(url);

        // Erro de rede
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("Recurso não encontrado");
            } else if (response.status === 500) {
                throw new Error("Erro no servidor");
            } else {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
        }

        let dados = await response.json();
        return dados;
    } catch (erro) {
        // Erro de rede ou fetch
        if (erro.message === "Failed to fetch") {
            console.error("Erro de conexão");
        } else {
            console.error("Erro:", erro.message);
        }
        throw erro;
    }
}
```

## Padrões Comuns

### API Wrapper

```javascript
class API {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async request(endpoint, options = {}) {
        let url = `${this.baseURL}${endpoint}`;

        let config = {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options.headers
            }
        };

        try {
            let response = await fetch(url, config);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            return await response.json();
        } catch (erro) {
            console.error("Erro na requisição:", erro);
            throw erro;
        }
    }

    async get(endpoint) {
        return this.request(endpoint);
    }

    async post(endpoint, data) {
        return this.request(endpoint, {
            method: "POST",
            body: JSON.stringify(data)
        });
    }

    async put(endpoint, data) {
        return this.request(endpoint, {
            method: "PUT",
            body: JSON.stringify(data)
        });
    }

    async delete(endpoint) {
        return this.request(endpoint, {
            method: "DELETE"
        });
    }
}

// Uso
let api = new API("https://api.example.com");

let usuarios = await api.get("/users");
let novoUsuario = await api.post("/users", { nome: "Sávio" });
await api.delete("/users/1");
```

### Cache de Requisições

```javascript
let cache = new Map();

async function fetchComCache(url, tempoCache = 60000) {
    let agora = Date.now();
    let cached = cache.get(url);

    if (cached && (agora - cached.timestamp) < tempoCache) {
        console.log("Retornando do cache");
        return cached.data;
    }

    console.log("Buscando da API");
    let response = await fetch(url);
    let data = await response.json();

    cache.set(url, {
        data: data,
        timestamp: agora
    });

    return data;
}
```

## Exemplos Práticos

### CRUD Completo

```javascript
class UsuariosAPI {
    constructor() {
        this.baseURL = "https://api.example.com/users";
    }

    // Listar todos
    async listar() {
        let response = await fetch(this.baseURL);
        return await response.json();
    }

    // Buscar por ID
    async buscar(id) {
        let response = await fetch(`${this.baseURL}/${id}`);

        if (!response.ok) {
            throw new Error("Usuário não encontrado");
        }

        return await response.json();
    }

    // Criar
    async criar(usuario) {
        let response = await fetch(this.baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        return await response.json();
    }

    // Atualizar
    async atualizar(id, dados) {
        let response = await fetch(`${this.baseURL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        return await response.json();
    }

    // Deletar
    async deletar(id) {
        let response = await fetch(`${this.baseURL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Erro ao deletar");
        }

        return true;
    }
}

// Uso
let api = new UsuariosAPI();

let usuarios = await api.listar();
let usuario = await api.buscar(1);
let novo = await api.criar({ nome: "Sávio", email: "savio@example.com" });
await api.atualizar(1, { nome: "Sávio Silva" });
await api.deletar(1);
```

### Upload de Arquivo

```javascript
async function uploadArquivo(arquivo) {
    let formData = new FormData();
    formData.append("arquivo", arquivo);

    try {
        let response = await fetch("https://api.example.com/upload", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error("Erro no upload");
        }

        let resultado = await response.json();
        console.log("Upload concluído:", resultado);
        return resultado;
    } catch (erro) {
        console.error("Erro:", erro);
        throw erro;
    }
}

// Uso com input file
let fileInput = document.querySelector("#arquivo");
fileInput.addEventListener("change", async (e) => {
    let arquivo = e.target.files[0];

    if (arquivo) {
        await uploadArquivo(arquivo);
    }
});
```

### Busca com Debounce

```javascript
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

async function buscar(termo) {
    if (!termo) return;

    try {
        let response = await fetch(`https://api.example.com/search?q=${termo}`);
        let resultados = await response.json();
        exibirResultados(resultados);
    } catch (erro) {
        console.error("Erro na busca:", erro);
    }
}

let inputBusca = document.querySelector("#busca");
inputBusca.addEventListener("input", debounce((e) => {
    buscar(e.target.value);
}, 500));
```

### Polling (Verificação Periódica)

```javascript
async function verificarStatus(id, intervalo = 2000, maxTentativas = 30) {
    for (let i = 0; i < maxTentativas; i++) {
        try {
            let response = await fetch(`https://api.example.com/status/${id}`);
            let status = await response.json();

            if (status.concluido) {
                console.log("Processo concluído!");
                return status;
            }

            console.log(`Tentativa ${i + 1}: ${status.progresso}%`);
            await new Promise(resolve => setTimeout(resolve, intervalo));
        } catch (erro) {
            console.error("Erro:", erro);
        }
    }

    throw new Error("Timeout: processo não concluiu");
}
```

## Exercícios Práticos

```javascript
// 1. Buscar e exibir lista de usuários
async function listarUsuarios() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let usuarios = await response.json();

        usuarios.forEach(usuario => {
            console.log(`${usuario.id}: ${usuario.name}`);
        });
    } catch (erro) {
        console.error(erro);
    }
}

// 2. Criar post
async function criarPost(post) {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
    });

    return await response.json();
}

// 3. Buscar posts de um usuário
async function buscarPostsUsuario(userId) {
    let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    return await response.json();
}

// 4. Implementar retry
async function fetchComRetry(url, tentativas = 3) {
    for (let i = 0; i < tentativas; i++) {
        try {
            let response = await fetch(url);
            return await response.json();
        } catch (erro) {
            if (i === tentativas - 1) throw erro;
            console.log(`Tentativa ${i + 1} falhou, tentando novamente...`);
            await new Promise(r => setTimeout(r, 1000));
        }
    }
}
```

## Próximos Passos

Continue para: [Exercícios Práticos](exercicios.md)

---

**Desenvolvido por Sávio** | [GitHub](https://github.com/SavioCodes)
