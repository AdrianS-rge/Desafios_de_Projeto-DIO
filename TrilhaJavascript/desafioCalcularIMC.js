/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 
    Formula do IMC:
    IMC = peso / (altura * altura)
    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
}

function calcularIMC(pessoa) {
    const imc = pessoa.peso / (pessoa.altura * pessoa.altura)
        if(imc <= 18.5) {
            return `Olá ${pessoa.nome}, seu IMC é de ${imc.toFixed(1)} Abaixo do peso`
        }
        else if(imc > 18.5 && imc <= 25) {
            return `Olá ${pessoa.nome}, seu IMC é de ${imc.toFixed(1)}: Peso normal`
        }
        else if(imc > 25 && imc <= 30) {
            return `Olá ${pessoa.nome}, seu IMC é de ${imc.toFixed(1)}: Acima do peso`
        }
        else if(imc > 30 && imc <= 40) {
            return `Olá ${pessoa.nome}, seu IMC é de ${imc.toFixed(1)}: Obeso`
        }
        else {
            return `Olá ${pessoa.nome}, seu IMC é de ${imc.toFixed(1)}: Obesidade grave`
        }
}

const jose = new Pessoa('José', 70, 1.75)
console.log(calcularIMC(jose))