// // Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

let employee = {
    code: 10,
    name: "Jhon" };

let funcionario: { code:number, name: string} = {
    code: 10,
    name: "Jhon"
}

interface employee{
    cód:number,
    name: string
}
let funcionario3: employee = {
    cód: 200,
    name: "Jhon"
}