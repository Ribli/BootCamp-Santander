function palindromo(string){
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string;

}

console.log(palindromo("abba"))

// solução 2
// OMO
// 012
// abbbba
// 012345

// function palindromo2(string){
//     if(!string) return "string inexistente";

//     for(let i = 0; i <string.length / 2; i++){
//         if (string[i] !== string[string.length -1 -i]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(palindromo2("gato"))