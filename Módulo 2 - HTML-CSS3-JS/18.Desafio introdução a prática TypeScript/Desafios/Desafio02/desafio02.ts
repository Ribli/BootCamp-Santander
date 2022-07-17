// // Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }


let pessoa1: {nome:string, idade:number, Profissao: string} =  {
    nome: "maria",
    idade: 29,
    Profissao: "Atriz"
}

let pessoa2: {nome:string, idade:number, Profissao: string} = {
    nome: "roberto",
    idade: 19,
    Profissao: "Padeiro"
}

let pessoa3: {nome:string, idade:number, Profissao: string} =  {
    nome: "laura",
    idade: 32,
    Profissao: "Atriz"
};

let pessoa4: {nome:string, idade:number, Profissao: string} = {
    nome: "carlos",
    idade: 19,
    Profissao: "padeiro"
}