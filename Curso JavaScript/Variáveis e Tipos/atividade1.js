function palindromo1(string) {
    if (string.split("").reverse().join("") === string) {
        console.log(string+" é um palíndromo");
    }else{
        console.log(string+" não é um palíndromo");
    }
}

function palindromo2(string) {
    stringInvertida = "";
    for(let i = string.length - 1; i >= 0; i--){
        stringInvertida += string[i];
    }
    if (string === stringInvertida) {
        console.log(string+" é um palíndromo");
    }else{
        console.log(string+" não é um palíndromo");
    }

}

palindromo1("radar")
palindromo2("sopapos");
console.log("--------------------")
palindromo1("papel")
palindromo2("cardapio");