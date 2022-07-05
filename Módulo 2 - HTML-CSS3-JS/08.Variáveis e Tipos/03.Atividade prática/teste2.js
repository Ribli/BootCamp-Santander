function palindromo(script){
    if (!script) return console.log("string não existe!!");

    return script.split("").reverse().join("") === script;
}

console.log(palindromo("abba"))