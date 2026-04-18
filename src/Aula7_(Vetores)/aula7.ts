
//############ FORMAS DE DECLAÇÃO DE ARRAYS ################

//1-Sintaxe de Colchetes (Mais utilizada):
let frutas: string[] = ["Maçã", "Banana", "Uva"];
let notas: number[] = [8.5, 7.0, 9.2];

//2-Sintaxe Generic (Classe Array):
let alunos: Array<string> = ["João", "Maria", "José"];


//############## ARRAYS E INFERÊNCIA #################
const cidades = ["Tobias Barreto", "Aracaju"]; 
// O TS já inferiu que cidades é string[]

//cidades.push(10); 
//Erro: Argument of type 'number' is not assignable to 
// parameter of type 'string'.



//############## PRINCIPAIS COMANDOS COM ARRAYS ###################

//push(): Insere um novo elemento ao final do array.
let cores: string[] = ["Verde", "Azul", "Amarelo"];
cores.push("Vermelho"); // ["Verde", "Azul", "Amarelo", "Vermelho"]


//pop(): Remove o último elemento do array.
cores.pop(); // Remove "Vermelho"
cores.pop();// Remove "Amarelo"

//unshift(): Insere um novo elemento no início do array.
cores.unshift("Roxo"); // ["Roxo", "Verde", "Azul", "Amarelo"]

//shift(): Remove o primeiro elemento do array.
cores.shift(); // Remove "Roxo"

//reverse(): Inverte a ordem dos elementos.
cores.reverse(); // ["Amarelo", "Azul", "Verde"]

//sort(): Ordena os elementos em ordem crescente (alfabética para strings).
cores.sort(); // ["Amarelo", "Azul", "Verde"] -> ["Amarelo", "Azul", "Verde"] (alfabético)

//join(): Junta todos os elementos em uma única string, separados por vírgula (ou outro separador escolhido).
let paleta = cores.join(" - "); // "Amarelo - Azul - Verde"

//toString(): Converte o array em uma string simples separada por vírgulas.
let texto = cores.toString(); // "Amarelo,Azul,Verde"

//concat(): Junta dois ou mais arrays e retorna um novo, sem alterar os originais.
let ar1: string[] = ["Carro", "Moto"];
let ar2: string[] = ["Navio", "Skate"];
let transporte = ar1.concat(ar2); // ["Carro", "Moto", "Navio", "Skate"]

//indexOf(): Procura um elemento e retorna a sua posição (índice). Retorna -1 se não encontrar.
let posicao = cores.indexOf("Azul"); // Retorna 1

//splice(): Remove ou substitui elementos em um ponto específico.
let num: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// A partir do índice 2, remova 4 elementos:
num.splice(2, 4); 
// Resultado: [0, 1, 6, 7, 8, 9]

//##############filter():######################
//Filtro de Dados
//sintexe
    array.filter((elemento) => {
        return /* condição lógica */;
    });
//exemplo:
const notas = [4.5, 8.0, 5.0, 10.0, 7.5];
// Filtra apenas notas maiores ou iguais a 6
const aprovados = notas.filter((n) => {
    return n >= 6}); 
// Resultado: [8.0, 10.0, 7.5]


//############## map() ######################
//map():Percorre o array e transforma cada item em uma coisa nova, 
// gerando um novo array do mesmo tamanho.
//sintaxe
array.map((elemento) => {
    return /* o elemento transformado */;
});

//Exemplo
const precos = [10, 20, 30];

// Aplica 10% de aumento em cada preço
const novosPrecos = precos.map((p) => {
    p * 1.10});
// Resultado: [11, 22, 33]

//############## reduce() ######################
//reduce():
//sintaxe
array.reduce((acumulador, elementoAtual) => {
    return /* lógica da operação */;
}, valorInicial);

//Exemplo:
const valores = [10, 20, 30, 40];
// Soma todos os valores começando do zero (0)
const total = valores.reduce((acumulador, atual) => 
    acumulador + atual, 0);
// Resultado: 100