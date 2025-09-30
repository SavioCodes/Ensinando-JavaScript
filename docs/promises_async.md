# Promises e Async/Await

## O que é Assincronismo?

JavaScript é single-threaded (executa uma tarefa por vez), mas usa operações assíncronas para não bloquear a execução enquanto espera por tarefas demoradas (requisições HTTP, leitura de arquivos, etc).

## Callbacks

Forma antiga de lidar com código assíncrono.

```javascript
function buscarDados(callback) {
    setTimeout(() => {
        let dados = { nome: "Sávio", idade: 25 };
        callback(dados);
    }, 1000);
}

buscarDados((resultado) => {
    console.log(resultado);
});
```

### Callback Hell

Problema: callbacks aninhados são difíceis de ler.

```javascript
// Callback Hell
buscarUsuario(id, (usuario) => {
    buscarPosts(usuario.id, (posts) => {
        buscarComentarios(posts[0].id, (comentarios) => {
            console.log(comentarios);
        });
    });
});
```

## Promises

Promises representam um valor que pode estar disponível agora, no futuro ou nunca.

### Estados de uma Promise

- **Pending**: Estado inicial, nem fulfilled nem rejected
- **Fulfilled**: Operação concluída com sucesso
- **Rejected**: Operação falhou

### Criando uma Promise

```javascript
let minhaPromise = new Promise((resolve, reject) => {
    // Operação assíncrona
    let sucesso = true;

    if (sucesso) {
        resolve("Deu certo!");
    } else {
        reject("Deu errado!");
    }
});
```

### Consumindo Promises

#### then() e catch()

```javascript
minhaPromise
    .then(resultado => {
        console.log(resultado);  // "Deu certo!"
    })
    .catch(erro => {
        console.error(erro);
    });
```

#### Encadeamento

```javascript
fetch("https://api.example.com/user/1")
    .then(response => response.json())
    .then(user => {
        console.log(user);
        return fetch(`https://api.example.com/posts/${user.id}`);
    })
    .then(response => response.json())
    .then(posts => {
        console.log(posts);
    })
    .catch(erro => {
        console.error("Erro:", erro);
    });
```

### Exemplo Prático

```javascript
function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let usuarios = [
                { id: 1, nome: "Sávio" },
                { id: 2, nome: "Ana" }
            ];

            let usuario = usuarios.find(u => u.id === id);

            if (usuario) {
                resolve(usuario);
            } else {
                reject("Usuário não encontrado");
            }
        }, 1000);
    });
}

buscarUsuario(1)
    .then(usuario => {
        console.log("Usuário:", usuario);
    })
    .catch(erro => {
        console.error("Erro:", erro);
    });
```

### finally()

Executado independente de sucesso ou erro.

```javascript
buscarDados()
    .then(dados => {
        console.log(dados);
    })
    .catch(erro => {
        console.error(erro);
    })
    .finally(() => {
        console.log("Finalizado!");
        // Esconder loading, por exemplo
    });
```

## Async/Await

Sintaxe moderna que torna código assíncrono parecer síncrono.

### async

Função async sempre retorna uma Promise.

```javascript
async function minhaFuncao() {
    return "Olá!";
}

minhaFuncao().then(resultado => {
    console.log(resultado);  // "Olá!"
});
```

### await

Espera uma Promise ser resolvida. Só funciona dentro de funções async.

```javascript
async function buscar() {
    let resultado = await minhaPromise;
    console.log(resultado);
}
```

### Exemplo Completo

```javascript
function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nome: "Sávio" });
            } else {
                reject("Usuário não encontrado");
            }
        }, 1000);
    });
}

// Com async/await
async function exibirUsuario(id) {
    try {
        let usuario = await buscarUsuario(id);
        console.log("Usuário:", usuario);
    } catch (erro) {
        console.error("Erro:", erro);
    }
}

exibirUsuario(1);
```

### Comparação: Promises vs Async/Await

```javascript
// Com Promises
function buscarDados() {
    fetch("https://api.example.com/user/1")
        .then(response => response.json())
        .then(user => {
            console.log(user);
            return fetch(`https://api.example.com/posts/${user.id}`);
        })
        .then(response => response.json())
        .then(posts => {
            console.log(posts);
        })
        .catch(erro => {
            console.error(erro);
        });
}

// Com Async/Await
async function buscarDadosAsync() {
    try {
        let response = await fetch("https://api.example.com/user/1");
        let user = await response.json();
        console.log(user);

        let postsResponse = await fetch(`https://api.example.com/posts/${user.id}`);
        let posts = await postsResponse.json();
        console.log(posts);
    } catch (erro) {
        console.error(erro);
    }
}
```

## Múltiplas Promises

### Promise.all()

Espera todas as promises serem resolvidas.

```javascript
let promise1 = fetch("https://api.example.com/user/1");
let promise2 = fetch("https://api.example.com/user/2");
let promise3 = fetch("https://api.example.com/user/3");

Promise.all([promise1, promise2, promise3])
    .then(responses => {
        return Promise.all(responses.map(r => r.json()));
    })
    .then(users => {
        console.log(users);
    })
    .catch(erro => {
        console.error("Alguma falhou:", erro);
    });

// Com async/await
async function buscarTodos() {
    try {
        let [r1, r2, r3] = await Promise.all([
            fetch("https://api.example.com/user/1"),
            fetch("https://api.example.com/user/2"),
            fetch("https://api.example.com/user/3")
        ]);

        let users = await Promise.all([
            r1.json(),
            r2.json(),
            r3.json()
        ]);

        console.log(users);
    } catch (erro) {
        console.error(erro);
    }
}
```

### Promise.allSettled()

Espera todas, independente de sucesso ou erro.

```javascript
let promises = [
    Promise.resolve("Sucesso 1"),
    Promise.reject("Erro 1"),
    Promise.resolve("Sucesso 2")
];

Promise.allSettled(promises)
    .then(resultados => {
        resultados.forEach(resultado => {
            if (resultado.status === "fulfilled") {
                console.log("Sucesso:", resultado.value);
            } else {
                console.log("Erro:", resultado.reason);
            }
        });
    });
```

### Promise.race()

Retorna a primeira promise que resolver (sucesso ou erro).

```javascript
let promise1 = new Promise(resolve => setTimeout(() => resolve("Lento"), 3000));
let promise2 = new Promise(resolve => setTimeout(() => resolve("Rápido"), 1000));

Promise.race([promise1, promise2])
    .then(resultado => {
        console.log(resultado);  // "Rápido"
    });
```

### Promise.any()

Retorna a primeira promise que for bem-sucedida.

```javascript
let promises = [
    Promise.reject("Erro 1"),
    Promise.resolve("Sucesso!"),
    Promise.reject("Erro 2")
];

Promise.any(promises)
    .then(resultado => {
        console.log(resultado);  // "Sucesso!"
    })
    .catch(erro => {
        console.error("Todas falharam:", erro);
    });
```

## Tratamento de Erros

### try...catch com async/await

```javascript
async function buscarDados() {
    try {
        let response = await fetch("url-invalida");
        let dados = await response.json();
        console.log(dados);
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}
```

### Múltiplos try...catch

```javascript
async function processarDados() {
    let usuario;

    try {
        usuario = await buscarUsuario(1);
    } catch (erro) {
        console.error("Erro ao buscar usuário:", erro);
        return;
    }

    try {
        let posts = await buscarPosts(usuario.id);
        console.log(posts);
    } catch (erro) {
        console.error("Erro ao buscar posts:", erro);
    }
}
```

## Padrões e Boas Práticas

### Sempre use try...catch

```javascript
// Ruim
async function buscar() {
    let dados = await fetch("url");  // Sem tratamento de erro
    return dados.json();
}

// Bom
async function buscar() {
    try {
        let dados = await fetch("url");
        return await dados.json();
    } catch (erro) {
        console.error("Erro:", erro);
        throw erro;  // Re-lançar se necessário
    }
}
```

### Evite await desnecessário

```javascript
// Ruim
async function buscar() {
    return await fetch("url");  // await desnecessário
}

// Bom
async function buscar() {
    return fetch("url");  // Já retorna Promise
}

// Mas use await quando precisar do valor
async function processar() {
    let response = await fetch("url");
    return response.json();  // Precisa do response
}
```

### Paralelizar quando possível

```javascript
// Ruim - Sequencial (lento)
async function buscar() {
    let user = await fetch("/user");
    let posts = await fetch("/posts");
    let comments = await fetch("/comments");
    // Total: tempo1 + tempo2 + tempo3
}

// Bom - Paralelo (rápido)
async function buscar() {
    let [user, posts, comments] = await Promise.all([
        fetch("/user"),
        fetch("/posts"),
        fetch("/comments")
    ]);
    // Total: max(tempo1, tempo2, tempo3)
}
```

## Exemplos Práticos

### Simulador de API

```javascript
function simularAPI(dados, delay = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dados);
        }, delay);
    });
}

async function exemplo() {
    console.log("Buscando...");

    let usuario = await simularAPI({ nome: "Sávio", id: 1 });
    console.log("Usuário:", usuario);

    let posts = await simularAPI([
        { id: 1, titulo: "Post 1" },
        { id: 2, titulo: "Post 2" }
    ]);
    console.log("Posts:", posts);
}

exemplo();
```

### Sistema de Cache

```javascript
let cache = {};

async function buscarComCache(url) {
    if (cache[url]) {
        console.log("Retornando do cache");
        return cache[url];
    }

    console.log("Buscando da API");
    let response = await fetch(url);
    let dados = await response.json();

    cache[url] = dados;
    return dados;
}

// Uso
buscarComCache("https://api.example.com/users");
buscarComCache("https://api.example.com/users");  // Do cache
```

### Retry com Delay

```javascript
async function buscarComRetry(url, tentativas = 3, delay = 1000) {
    for (let i = 0; i < tentativas; i++) {
        try {
            let response = await fetch(url);
            return await response.json();
        } catch (erro) {
            console.log(`Tentativa ${i + 1} falhou`);

            if (i === tentativas - 1) {
                throw erro;
            }

            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

// Uso
buscarComRetry("https://api.example.com/data")
    .then(dados => console.log(dados))
    .catch(erro => console.error("Todas as tentativas falharam"));
```

### Loading State

```javascript
let loading = false;

async function buscarDados() {
    loading = true;
    mostrarLoading();

    try {
        let response = await fetch("https://api.example.com/data");
        let dados = await response.json();
        exibirDados(dados);
    } catch (erro) {
        exibirErro(erro);
    } finally {
        loading = false;
        esconderLoading();
    }
}
```

### Buscar Sequencialmente

```javascript
async function buscarTodosPosts() {
    let usuarios = await buscarUsuarios();
    let todosOsPosts = [];

    for (let usuario of usuarios) {
        let posts = await buscarPosts(usuario.id);
        todosOsPosts.push(...posts);
    }

    return todosOsPosts;
}
```

### Buscar em Paralelo

```javascript
async function buscarTodosPostsParalelo() {
    let usuarios = await buscarUsuarios();

    let promises = usuarios.map(usuario => buscarPosts(usuario.id));
    let resultados = await Promise.all(promises);

    return resultados.flat();
}
```

## setTimeout e setInterval com Promises

### Delay Promisificado

```javascript
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function exemplo() {
    console.log("Início");
    await delay(2000);
    console.log("Depois de 2 segundos");
}
```

### Timeout para Promises

```javascript
function comTimeout(promise, ms) {
    let timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Timeout")), ms);
    });

    return Promise.race([promise, timeout]);
}

// Uso
comTimeout(fetch("https://api.example.com/data"), 5000)
    .then(response => response.json())
    .then(dados => console.log(dados))
    .catch(erro => console.error("Erro ou timeout:", erro));
```

## Exercícios Práticos

```javascript
// 1. Promise simples
function esperarSegundos(segundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Esperou ${segundos} segundos`);
        }, segundos * 1000);
    });
}

// 2. Simular login
async function fazerLogin(usuario, senha) {
    await delay(1000);

    if (usuario === "savio" && senha === "123") {
        return { sucesso: true, token: "abc123" };
    } else {
        throw new Error("Credenciais inválidas");
    }
}

// 3. Buscar dados paginados
async function buscarTodosDados(urlBase) {
    let pagina = 1;
    let todosDados = [];

    while (true) {
        let response = await fetch(`${urlBase}?page=${pagina}`);
        let dados = await response.json();

        if (dados.length === 0) break;

        todosDados.push(...dados);
        pagina++;
    }

    return todosDados;
}

// 4. Processar em lote
async function processarEmLote(itens, processarItem, tamanhoBatch = 5) {
    for (let i = 0; i < itens.length; i += tamanhoBatch) {
        let batch = itens.slice(i, i + tamanhoBatch);
        await Promise.all(batch.map(processarItem));
    }
}
```

## Próximos Passos

Continue para: [Fetch API](fetch_api.md)

---

**Desenvolvido por Sávio** | [GitHub](https://github.com/SavioCodes)
