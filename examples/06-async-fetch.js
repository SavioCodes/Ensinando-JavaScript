// ============================================
// 06-async-fetch.js - Async/Await e Fetch API
// ============================================

console.log("=== ASYNC/AWAIT E FETCH API ===\n");

// ============================================
// 1. PROMISES - REVISÃO RÁPIDA
// ============================================

console.log("--- 1. Promises - Revisão ---");

// Promise básica
const minhaPromise = new Promise((resolve, reject) => {
  const sucesso = true;
  
  setTimeout(() => {
    if (sucesso) {
      resolve("Operação bem-sucedida!");
    } else {
      reject("Algo deu errado!");
    }
  }, 1000);
});

minhaPromise
  .then(resultado => console.log(resultado))
  .catch(erro => console.error(erro));

// ============================================
// 2. ASYNC/AWAIT - SINTAXE MODERNA
// ============================================

console.log("\n--- 2. Async/Await ---");

// Função assíncrona simples
async function exemploAsync() {
  console.log("Início da função async");
  
  // await pausa a execução até a promise resolver
  const resultado = await minhaPromise;
  console.log("Resultado:", resultado);
  
  return "Função async concluída";
}

// Chamando função async (retorna uma Promise)
exemploAsync().then(msg => console.log(msg));

// Async/Await com tratamento de erros
async function exemploComErro() {
  try {
    const promise = new Promise((resolve, reject) => {
      reject("Erro simulado!");
    });
    
    await promise;
  } catch (erro) {
    console.log("Erro capturado:", erro);
  }
}

exemploComErro();

// ============================================
// 3. FETCH API - FAZENDO REQUISIÇÕES HTTP
// ============================================

console.log("\n--- 3. Fetch API ---");

// GET request básico
async function buscarDados() {
  try {
    console.log("Buscando dados da API...");
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const dados = await response.json();
    console.log("Dados do usuário:", dados);
    console.log("Nome:", dados.name);
    console.log("Email:", dados.email);
    
    return dados;
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

// Executar após 2 segundos
setTimeout(() => buscarDados(), 2000);

// ============================================
// 4. MÚLTIPLAS REQUISIÇÕES
// ============================================

console.log("\n--- 4. Múltiplas Requisições ---");

// Requisições em sequência (uma após a outra)
async function requisicoesSequenciais() {
  try {
    console.log("\nRequisições sequenciais:");
    
    const user1 = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const dados1 = await user1.json();
    console.log("Usuário 1:", dados1.name);
    
    const user2 = await fetch('https://jsonplaceholder.typicode.com/users/2');
    const dados2 = await user2.json();
    console.log("Usuário 2:", dados2.name);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

// Requisições em paralelo (todas ao mesmo tempo)
async function requisicoesParalelas() {
  try {
    console.log("\nRequisições paralelas:");
    
    const [response1, response2, response3] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      fetch('https://jsonplaceholder.typicode.com/users/2'),
      fetch('https://jsonplaceholder.typicode.com/users/3')
    ]);
    
    const [user1, user2, user3] = await Promise.all([
      response1.json(),
      response2.json(),
      response3.json()
    ]);
    
    console.log("Usuários:", [user1.name, user2.name, user3.name]);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

setTimeout(() => requisicoesSequenciais(), 3000);
setTimeout(() => requisicoesParalelas(), 5000);

// ============================================
// 5. POST REQUEST - ENVIANDO DADOS
// ============================================

console.log("\n--- 5. POST Request ---");

async function criarPost() {
  try {
    console.log("\nCriando novo post...");
    
    const novoPost = {
      title: 'Meu Post',
      body: 'Conteúdo do post',
      userId: 1
    };
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoPost)
    });
    
    const dados = await response.json();
    console.log("Post criado:", dados);
    
    return dados;
  } catch (erro) {
    console.error("Erro ao criar post:", erro);
  }
}

setTimeout(() => criarPost(), 7000);

// ============================================
// 6. PUT/PATCH REQUEST - ATUALIZANDO DADOS
// ============================================

console.log("\n--- 6. PUT/PATCH Request ---");

async function atualizarPost() {
  try {
    console.log("\nAtualizando post...");
    
    const dadosAtualizados = {
      title: 'Título Atualizado',
      body: 'Conteúdo atualizado'
    };
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosAtualizados)
    });
    
    const dados = await response.json();
    console.log("Post atualizado:", dados);
  } catch (erro) {
    console.error("Erro ao atualizar post:", erro);
  }
}

setTimeout(() => atualizarPost(), 9000);

// ============================================
// 7. DELETE REQUEST - DELETANDO DADOS
// ============================================

console.log("\n--- 7. DELETE Request ---");

async function deletarPost() {
  try {
    console.log("\nDeletando post...");
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'
    });
    
    console.log("Status da deleção:", response.status);
    console.log("Post deletado com sucesso!");
  } catch (erro) {
    console.error("Erro ao deletar post:", erro);
  }
}

setTimeout(() => deletarPost(), 11000);

// ============================================
// 8. TRATAMENTO DE ERROS AVANÇADO
// ============================================

console.log("\n--- 8. Tratamento de Erros ---");

async function fetchComTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return await response.json();
  } catch (erro) {
    if (erro.name === 'AbortError') {
      console.error('Requisição cancelada por timeout');
    } else {
      console.error('Erro na requisição:', erro);
    }
    throw erro;
  }
}

// ============================================
// 9. EXEMPLO PRÁTICO COMPLETO
// ============================================

console.log("\n--- 9. Exemplo Prático ---");

class APIClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  
  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return await response.json();
    } catch (erro) {
      console.error(`Erro no GET ${endpoint}:`, erro);
      throw erro;
    }
  }
  
  async post(endpoint, data) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return await response.json();
    } catch (erro) {
      console.error(`Erro no POST ${endpoint}:`, erro);
      throw erro;
    }
  }
}

// Usando a classe
async function exemploPratico() {
  const api = new APIClient('https://jsonplaceholder.typicode.com');
  
  try {
    console.log("\nUsando APIClient:");
    
    // Buscar usuários
    const usuarios = await api.get('/users?_limit=3');
    console.log("Usuários:", usuarios.map(u => u.name));
    
    // Criar post
    const novoPost = await api.post('/posts', {
      title: 'Post via APIClient',
      body: 'Conteúdo',
      userId: 1
    });
    console.log("Novo post ID:", novoPost.id);
    
  } catch (erro) {
    console.error("Erro no exemplo:", erro);
  }
}

setTimeout(() => exemploPratico(), 13000);

// ============================================
// 10. PADRÕES E BOAS PRÁTICAS
// ============================================

console.log("\n--- 10. Boas Práticas ---");

// Função reutilizável para fetch
async function fetchJSON(url, options = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  const response = await fetch(url, { ...defaultOptions, ...options });
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP ${response.status}`);
  }
  
  return await response.json();
}

// Retry automático
async function fetchComRetry(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fetch(url);
    } catch (erro) {
      if (i === maxRetries - 1) throw erro;
      console.log(`Tentativa ${i + 1} falhou, tentando novamente...`);
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}

// Cache simples
const cache = new Map();

async function fetchComCache(url) {
  if (cache.has(url)) {
    console.log("Retornando do cache:", url);
    return cache.get(url);
  }
  
  const data = await fetch(url).then(r => r.json());
  cache.set(url, data);
  return data;
}

// ============================================
// EXERCÍCIOS PRÁTICOS
// ============================================

console.log("\n=== EXERCÍCIOS ===");
console.log(`
1. Crie uma função que busque todos os posts de um usuário específico
2. Implemente uma função de busca que filtre posts por título
3. Crie um sistema de paginação para listar posts
4. Faça um carregador de dados que mostre loading/erro/sucesso
5. Implemente um rate limiter para requisições
6. Crie uma função que faça upload de imagem (simular com FormData)
7. Implemente polling (verificar API a cada X segundos)
8. Crie um sistema de cache com expiração
9. Faça requisições com autenticação (Bearer token simulado)
10. Implemente cancelamento de requisições em andamento
`);

// ============================================
// DICAS FINAIS
// ============================================

console.log("\n=== DICAS IMPORTANTES ===");
console.log(`
✓ Sempre use try/catch com async/await
✓ Verifique response.ok antes de processar dados
✓ Use Promise.all() para requisições paralelas
✓ Implemente timeout para requisições longas
✓ Considere cache para reduzir requisições
✓ Trate erros de rede adequadamente
✓ Use AbortController para cancelar requisições
✓ Valide dados antes de enviar para API
✓ Configure headers corretamente (Content-Type, Authorization)
✓ Use ferramentas como Postman para testar APIs
`);

console.log("\n=== FIM DO ARQUIVO ===");
