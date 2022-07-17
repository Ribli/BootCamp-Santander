//Map com This Multiplicação de números
const apple = {
    value:2,
}
const orange = {
    value:3,
}


function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return    item * this.value;
    }, thisArg);
}

const nums = [1, 2, 3, 5, 8,];

console.log('this -> apple', mapComThis(nums, apple))

console.log('this -> orange', mapComThis(nums, orange))

//Map Sem This Multiplicação de números

function mapSemThis(arr){
    return arr.map(function(item){
        return item *2
    });
}

console.log(mapSemThis(nums));


// Filter Retorne apenas os números pares de um array
function filterPares(arr){
    return arr.filter(function callback(item){
        return item % 2 === 0;
    })
}


console.log(filterPares(nums))

//Reduce Some os numeros de um array
function SomaNumeros(arr){
    return arr.reduce(function(prev, current){
        return prev + current;
    })
}

const arr = [1, 8, 9, 8];

console.log(SomaNumeros(arr));

//reduce lista de preços 

const lista = [
    {name: 'Sabão em pó', preco: 30,},
    {name: 'Cereal', preco: 20,},
    {name: 'Toalha', preco: 12,}
]

const saldoDisponivel = 100

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('Rodada', index + 1)
        console.log({prev}) //prev valor anterior
        console.log({current}) // current valor atual
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista))