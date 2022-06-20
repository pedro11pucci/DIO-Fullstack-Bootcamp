function debug(array, number){
    try {
        if((!array)||(!number)) throw new ReferenceError("Envie os parâmetros corretamente");
        if(typeof array !== 'object') throw new TypeError("Array errado");
        if(typeof number !== 'number') throw new TypeError("Número errado");
        if(array.length != number) throw new RangeError("Array e Número não correspondem");

        return array;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("ReferenceError")
            console.log(e.message);
        }else if (e instanceof TypeError) {
            console.log("TypeError");
            console.log(e.message);
        }else if (e instanceof RangeError) {
            console.log("RangeError");
            console.log(e.message);
        }else {
            console.log("Unexpected Error")
        }
    }
}

console.log(debug([1, 2, 3, 4, 5], 5));