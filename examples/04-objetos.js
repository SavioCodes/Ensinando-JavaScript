// Exemplos de Objetos
// Desenvolvido por Sávio

console.log("=== OBJETOS EM JAVASCRIPT ===\n");

// 1. Criando Objetos
const pessoa = {
    nome: "Sávio",
    idade: 25,
    profissao: "Desenvolvedor",
    programador: true
};

console.log("=== OBJETO BÁSICO ===");
console.log(pessoa);

// 2. Acessando Propriedades
console.log("\n=== ACESSANDO PROPRIEDADES ===");
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa["idade"]);

// 3. Adicionando e Modificando
console.log("\n=== MODIFICANDO OBJETO ===");
pessoa.cidade = "São Paulo";
pessoa.idade = 26;
console.log("Objeto atualizado:", pessoa);

// 4. Métodos
const calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair(a, b) {  // Sintaxe curta
        return a - b;
    },
    multiplicar: (a, b) => a * b
};

console.log("\n=== MÉTODOS ===");
console.log("10 + 5 =", calculadora.somar(10, 5));
console.log("10 - 5 =", calculadora.subtrair(10, 5));
console.log("10 * 5 =", calculadora.multiplicar(10, 5));

// 5. This
const usuario = {
    nome: "Sávio",
    idade: 25,
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
    },
    aniversario() {
        this.idade++;
        return `Agora tenho ${this.idade} anos!`;
    }
};

console.log("\n=== THIS ===");
console.log(usuario.apresentar());
console.log(usuario.aniversario());

// 6. Objetos Aninhados
const empresa = {
    nome: "Tech Corp",
    endereco: {
        rua: "Av. Paulista",
        numero: 1000,
        cidade: "São Paulo",
        estado: "SP"
    },
    funcionarios: [
        { nome: "Sávio", cargo: "Desenvolvedor" },
        { nome: "Ana", cargo: "Designer" }
    ]
};

console.log("\n=== OBJETOS ANINHADOS ===");
console.log("Empresa:", empresa.nome);
console.log("Cidade:", empresa.endereco.cidade);
console.log("Primeiro funcionário:", empresa.funcionarios[0].nome);

// 7. Destructuring
const { nome, idade, profissao } = pessoa;

console.log("\n=== DESTRUCTURING ===");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Profissão:", profissao);

// Destructuring aninhado
const { endereco: { cidade, estado } } = empresa;
console.log("Local:", cidade, estado);

// 8. Shorthand Properties
const nome2 = "João";
const idade2 = 30;

const pessoa2 = { nome2, idade2 };
console.log("\n=== SHORTHAND ===");
console.log(pessoa2);

// 9. Object.keys, values, entries
console.log("\n=== OBJECT METHODS ===");
console.log("Keys:", Object.keys(pessoa));
console.log("Values:", Object.values(pessoa));
console.log("Entries:", Object.entries(pessoa));

// 10. Object.assign e Spread
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

console.log("\n=== MESCLAR OBJETOS ===");
const mesclado1 = Object.assign({}, obj1, obj2);
const mesclado2 = { ...obj1, ...obj2 };
console.log("Com assign:", mesclado1);
console.log("Com spread:", mesclado2);

// 11. Copiar Objetos
console.log("\n=== COPIAR OBJETOS ===");
const original = { nome: "Sávio", idade: 25 };
const copia = { ...original };
copia.nome = "João";
console.log("Original:", original);
console.log("Cópia:", copia);

// 12. Object.freeze e seal
console.log("\n=== FREEZE E SEAL ===");
const congelado = Object.freeze({ nome: "Sávio" });
congelado.nome = "João";  // Não funciona
console.log("Congelado:", congelado);

const selado = Object.seal({ nome: "Sávio", idade: 25 });
selado.idade = 26;  // Funciona
selado.cidade = "SP";  // Não funciona
console.log("Selado:", selado);

// 13. hasOwnProperty
console.log("\n=== HAS OWN PROPERTY ===");
console.log("Tem 'nome'?", pessoa.hasOwnProperty("nome"));
console.log("Tem 'altura'?", pessoa.hasOwnProperty("altura"));

// 14. Classes
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, sou ${this.nome}`;
    }

    aniversario() {
        this.idade++;
    }
}

console.log("\n=== CLASSES ===");
const p1 = new Pessoa("Sávio", 25);
console.log(p1.apresentar());
p1.aniversario();
console.log("Nova idade:", p1.idade);

// 15. Getters e Setters
const conta = {
    _saldo: 1000,

    get saldo() {
        return `R$ ${this._saldo.toFixed(2)}`;
    },

    set saldo(valor) {
        if (valor < 0) {
            console.log("Saldo não pode ser negativo");
            return;
        }
        this._saldo = valor;
    },

    depositar(valor) {
        this._saldo += valor;
        return this.saldo;
    },

    sacar(valor) {
        if (valor > this._saldo) {
            return "Saldo insuficiente";
        }
        this._saldo -= valor;
        return this.saldo;
    }
};

console.log("\n=== GETTERS E SETTERS ===");
console.log("Saldo inicial:", conta.saldo);
console.log("Após depósito:", conta.depositar(500));
console.log("Após saque:", conta.sacar(200));

// 16. Exemplo Prático: Sistema de Biblioteca
console.log("\n=== SISTEMA DE BIBLIOTECA ===");

class Livro {
    constructor(titulo, autor, ano, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.paginas = paginas;
        this.lido = false;
    }

    marcarComoLido() {
        this.lido = true;
        return `"${this.titulo}" marcado como lido`;
    }

    informacoes() {
        return `${this.titulo} por ${this.autor} (${this.ano}) - ${this.paginas} páginas`;
    }
}

const livro1 = new Livro("JavaScript Avançado", "Sávio", 2025, 300);
const livro2 = new Livro("React do Zero", "Sávio", 2025, 250);

console.log(livro1.informacoes());
console.log(livro1.marcarComoLido());
console.log("Status:", livro1.lido ? "Lido" : "Não lido");

// 17. Exemplo Prático: Carrinho de Compras
console.log("\n=== CARRINHO DE COMPRAS ===");

const carrinho = {
    itens: [],

    adicionar(produto) {
        this.itens.push(produto);
        return `${produto.nome} adicionado`;
    },

    remover(produtoNome) {
        const indice = this.itens.findIndex(item => item.nome === produtoNome);
        if (indice !== -1) {
            this.itens.splice(indice, 1);
            return `${produtoNome} removido`;
        }
        return "Produto não encontrado";
    },

    calcularTotal() {
        return this.itens.reduce((total, item) => total + item.preco, 0);
    },

    listar() {
        return this.itens.map(item => `${item.nome} - R$ ${item.preco}`);
    }
};

carrinho.adicionar({ nome: "Notebook", preco: 3000 });
carrinho.adicionar({ nome: "Mouse", preco: 50 });
carrinho.adicionar({ nome: "Teclado", preco: 150 });

console.log("Itens:", carrinho.listar());
console.log("Total: R$", carrinho.calcularTotal());
console.log(carrinho.remover("Mouse"));
console.log("Novo total: R$", carrinho.calcularTotal());

// 18. JSON
console.log("\n=== JSON ===");
const dados = {
    nome: "Sávio",
    idade: 25,
    habilidades: ["JavaScript", "React", "Node.js"]
};

const json = JSON.stringify(dados);
console.log("Para JSON:", json);

const objetoNovamente = JSON.parse(json);
console.log("De volta para objeto:", objetoNovamente);
