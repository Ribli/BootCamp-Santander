function sub(array){
    for(let i =0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você já é Zero!!!")
        } else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }
    return array;
}

let array = [12,65, 43, 97, 6545, 654654,4784, 365865, 9191,]
console.log(sub(array))