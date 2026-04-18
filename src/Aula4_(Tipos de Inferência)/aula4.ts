

let media = 0

media = "2"






//####### CONCEITO DE INFERêNCIA ########

// Você não precisa escrever: let curso: string = "ADS";
let curso; // O TS já inferiu que é STRING
//curso = 10; 
// Erro: Type 'number' is not assignable to type 'string'.

let valor:string = "10"

valor ="Amor"


// ######FALHA DE INFERÊNCIA######
let disciplina; // Aqui o TS define como tipo 'any' (perigoso!)
disciplina = "Programação II"; // Aceita
disciplina = 2; // Também aceita (perdemos a segurança)

let variavel = ["Maria"]
variavel.push(10)
variavel.push("Maria")

//############ UNION TYPES ###############
let veiculo:string[]=["Porta","Motor","Banco",300] // só aceita strings

let carro:(string|number)[]=["Pneu","Motor",1500] // aceita strings ou números


// ############ FUNÇÕES COM UNION TYPES ###############
function exibirId(id: number | string) {
    console.log(`O ID do aluno é: ${id}`);
}
exibirId(10);      // Funciona
exibirId("A-50");  // Funciona

// ################# DESAFIO DO "TYPE NARROWING" (Estreitamento) ####################
function processarEntrada(valor: number | string) {
    if (typeof valor === "string") {
        console.log(valor.toUpperCase()); // Aqui o TS sabe que é string
    } else {
        console.log(valor.toFixed(2)); // Aqui o TS sabe que é number
    }
}
