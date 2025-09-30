// Exemplos de Arrays
// Desenvolvido por Sávio

console.log("=== ARRAYS EM JAVASCRIPT ===\n");

// 1. Criando Arrays
const numeros = [1, 2, 3, 4, 5];
const frutas = ["maçã", "banana", "laranja"];
const misto = [1, "texto", true, { nome: "Sávio" }];

console.log("=== CRIANDO ARRAYS ===");
console.log("Números:", numeros);
console.log("Frutas:", frutas);
console.log("Misto:", misto);

// 2. Acessando Elementos
console.log("\n=== ACESSANDO ELEMENTOS ===");
console.log("Primeira fruta:", frutas[0]);
console.log("Última fruta:", frutas[frutas.length - 1]);

// 3. Métodos de Adição/Remoção
console.log("\n=== PUSH E POP ===");
frutas.push("uva");
console.log("Após push:", frutas);
const removida = frutas.pop();
console.log("Removida:", removida);
console.log("Após pop:", frutas);

console.log("\n=== UNSHIFT E SHIFT ===");
frutas.unshift("morango");
console.log("Após unshift:", frutas);
const primeiraRemovida = frutas.shift();
console.log("Removida do início:", primeiraRemovida);
console.log("Após shift:", frutas);

// 4. forEach - Iterar
console.log("\n=== FOREACH ===");
frutas.forEach((fruta, indice) => {
    console.log(`${indice + 1}. ${fruta}`);
});

// 5. map - Transformar
console.log("\n=== MAP ===");
const numerosOriginais = [1, 2, 3, 4, 5];
const numerosEmDobro = numerosOriginais.map(num => num * 2);
console.log("Originais:", numerosOriginais);
console.log("Dobrados:", numerosEmDobro);

const pessoas = [
    { nome: "Sávio", idade: 25 },
    { nome: "Ana", idade: 30 },
    { nome: "João", idade: 28 }
];
const nomes = pessoas.map(pessoa => pessoa.nome);
console.log("Nomes:", nomes);

// 6. filter - Filtrar
console.log("\n=== FILTER ===");
const todosNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = todosNumeros.filter(num => num % 2 === 0);
const impares = todosNumeros.filter(num => num % 2 !== 0);
console.log("Todos:", todosNumeros);
console.log("Pares:", pares);
console.log("Ímpares:", impares);

const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 25);
console.log("Maiores de 25:", maioresDeIdade);

// 7. reduce - Reduzir
console.log("\n=== REDUCE ===");
const soma = todosNumeros.reduce((acc, num) => acc + num, 0);
console.log("Soma de todos:", soma);

const produto = [2, 3, 4].reduce((acc, num) => acc * num, 1);
console.log("Produto de [2,3,4]:", produto);

const idadeTotal = pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0);
const mediaIdade = idadeTotal / pessoas.length;
console.log("Média de idade:", mediaIdade.toFixed(1));

// 8. find e findIndex
console.log("\n=== FIND E FINDINDEX ===");
const encontrado = pessoas.find(pessoa => pessoa.nome === "Ana");
console.log("Pessoa encontrada:", encontrado);

const indice = pessoas.findIndex(pessoa => pessoa.nome === "João");
console.log("Índice de João:", indice);

// 9. some e every
console.log("\n=== SOME E EVERY ===");
const temMaiorDe30 = pessoas.some(pessoa => pessoa.idade > 30);
console.log("Tem alguém maior de 30?", temMaiorDe30);

const todosMaioresDe18 = pessoas.every(pessoa => pessoa.idade >= 18);
console.log("Todos maiores de 18?", todosMaioresDe18);

// 10. sort - Ordenar
console.log("\n=== SORT ===");
const numerosDesordenados = [5, 2, 8, 1, 9, 3];
const crescente = [...numerosDesordenados].sort((a, b) => a - b);
const decrescente = [...numerosDesordenados].sort((a, b) => b - a);
console.log("Original:", numerosDesordenados);
console.log("Crescente:", crescente);
console.log("Decrescente:", decrescente);

const pessoasOrdenadas = [...pessoas].sort((a, b) => a.idade - b.idade);
console.log("Pessoas por idade:", pessoasOrdenadas);

// 11. slice e splice
console.log("\n=== SLICE ===");
const arr = [1, 2, 3, 4, 5];
const pedaco = arr.slice(1, 4);
console.log("Original:", arr);
console.log("Slice(1,4):", pedaco);

console.log("\n=== SPLICE ===");
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1, 10, 20);
console.log("Após splice:", arr2);

// 12. concat e spread
console.log("\n=== CONCAT E SPREAD ===");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concatenado = arr1.concat(arr2);
const comSpread = [...arr1, ...arr2];
console.log("Concat:", concatenado);
console.log("Spread:", comSpread);

// 13. includes e indexOf
console.log("\n=== INCLUDES E INDEXOF ===");
const cores = ["vermelho", "azul", "verde"];
console.log("Tem azul?", cores.includes("azul"));
console.log("Índice de verde:", cores.indexOf("verde"));

// 14. join
console.log("\n=== JOIN ===");
const palavras = ["Ensinando", "JavaScript", "por", "Sávio"];
console.log(palavras.join(" "));
console.log(palavras.join(" - "));

// 15. Exemplos Práticos

// Remover Duplicatas
console.log("\n=== REMOVER DUPLICATAS ===");
const comDuplicatas = [1, 2, 2, 3, 4, 4, 5];
const semDuplicatas = [...new Set(comDuplicatas)];
console.log("Com duplicatas:", comDuplicatas);
console.log("Sem duplicatas:", semDuplicatas);

// Achatar Array (Flatten)
console.log("\n=== ACHATAR ARRAY ===");
const aninhado = [1, [2, 3], [4, [5, 6]]];
const achatado = aninhado.flat(2);
console.log("Aninhado:", aninhado);
console.log("Achatado:", achatado);

// Encontrar Maior e Menor
console.log("\n=== MAIOR E MENOR ===");
const valores = [10, 5, 20, 3, 15];
const maior = Math.max(...valores);
const menor = Math.min(...valores);
console.log("Valores:", valores);
console.log("Maior:", maior);
console.log("Menor:", menor);

// Agrupar por Propriedade
console.log("\n=== AGRUPAR POR IDADE ===");
const todasPessoas = [
    { nome: "Sávio", idade: 25 },
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 30 }
];

const agrupadoPorIdade = todasPessoas.reduce((acc, pessoa) => {
    const idade = pessoa.idade;
    if (!acc[idade]) acc[idade] = [];
    acc[idade].push(pessoa.nome);
    return acc;
}, {});

console.log(agrupadoPorIdade);

// Produtos - Exemplo E-commerce
console.log("\n=== EXEMPLO E-COMMERCE ===");
const produtos = [
    { nome: "Notebook", preco: 3000, categoria: "eletrônicos" },
    { nome: "Mouse", preco: 50, categoria: "eletrônicos" },
    { nome: "Cadeira", preco: 500, categoria: "móveis" },
    { nome: "Mesa", preco: 800, categoria: "móveis" }
];

const eletronicos = produtos.filter(p => p.categoria === "eletrônicos");
const total = produtos.reduce((acc, p) => acc + p.preco, 0);
const maisCaro = produtos.reduce((max, p) => p.preco > max.preco ? p : max);

console.log("Eletrônicos:", eletronicos.map(p => p.nome));
console.log("Total de todos:", total);
console.log("Mais caro:", maisCaro.nome);
