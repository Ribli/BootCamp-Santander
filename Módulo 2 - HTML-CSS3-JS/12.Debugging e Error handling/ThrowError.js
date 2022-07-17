// //Throw 
// //Try...catch try { pega o erro de uma função e retorna no catch(e){console.log}}
// //Finally Finally uma funcção chamada independente de erro ou não.

// //Manipulando o Error
// // new Error(message, fileName, lineNumber) // Mensagem nome do erro e número da linha.

// const MeuErro = new Error('Mensagem inválida');
// throw MeuErro;

// MeuErro.name = "InvalidMessage"; 

function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os Parâmetros");
        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do Tipo Object");
        if(typeof num !== 'number') throw new TypeError("Num precisa ser do Tipo number");
        if(arr.length !== num) throw new RangeError("Tamanho é inválido");
        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){console.log("Este erro é um ReferenceError!"), console.log(e.message)} 
        else if(e instanceof TypeError){console.log("Este erro é um TypeError!"), console.log(e.message)} 
        else if(e instanceof RangeError){console.log("Este erro é um RangeError!"), console.log(e.message)}
        else{ console.log("Tipo de erro não esperado!" + e)};
    }
}
console.log(validaArray([1,2,3,4,5], 5));