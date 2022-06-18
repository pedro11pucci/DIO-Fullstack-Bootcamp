var num1 = parseFloat(prompt("Digite o número 1: "));
var num2 = parseFloat(prompt("Digite o número 2: "))
bunsen(num1, num2);

function bunsen(num1, num2) {
let mensagem = "";

num1 == num2 ? mensagem += "os números "+num1+" e "+num2+" são iguais. " : mensagem += "os números "+num1+" e "+num2+" não são iguais. ";

let soma = num1 + num2;
mensagem += "Sua soma é "+soma+", ";

soma > 10 ? mensagem += "que é maior que 10 " : mensagem += "que é menor que 10 ";
soma > 20 ? mensagem += "e maior que 20." : mensagem += "e menor que 20.";

alert(mensagem);
}