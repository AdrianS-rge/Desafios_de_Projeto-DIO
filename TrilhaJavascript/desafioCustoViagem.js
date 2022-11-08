/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de kilômetros e o preço do combustível nos dê o valor
    gasto em reais para realizar este percurso
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
}

function gastoEmPercurso(carro, viagemDistancia, combustívelValor) {
let calcularViagem = viagemDistancia / carro.gastoMedioPorKm * combustívelValor
let decimalReduction = calcularViagem.toFixed(2)

    return `Seu carro gastará: ${decimalReduction}R$`
}

const focus = new Carro('Ford', 'Azul', 10.8)
const fusca = new Carro('Volkswagen', 'Preto', 10)
const prius = new Carro('Toyota', 'Prata', 18)

console.log(gastoEmPercurso(focus, 100, 4.98))
console.log(gastoEmPercurso(fusca, 100, 4.98))
console.log(gastoEmPercurso(prius, 100, 4.98))