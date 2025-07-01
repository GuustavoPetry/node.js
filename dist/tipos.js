"use strict";
// Tipos básicos
let nome = "Gustavo"; //tipo string
let numero = 50; //tipo number
let decimal = 10.00; //tipo number
let booleano = true;
// Arrays
let tipoArray = [1, 2, 3, 4, 5];
let arrayString = ["A", "B", "C"];
// Tuplas - arrays com quantidade e tipos fixos no elemento
let tupla1 = ["Diego", 40];
// Enum - conjunto de valores nomeados
var Status;
(function (Status) {
    Status[Status["Ativo"] = 0] = "Ativo";
    Status[Status["Inativo"] = 1] = "Inativo";
    Status[Status["Pendente"] = 2] = "Pendente";
})(Status || (Status = {}));
let s = Status.Ativo;
var Pedido;
(function (Pedido) {
    Pedido[Pedido["Pendente"] = 1] = "Pendente";
    Pedido[Pedido["Recebido"] = 2] = "Recebido";
    Pedido[Pedido["Cancelado"] = 9] = "Cancelado";
})(Pedido || (Pedido = {}));
let valor = "String"; //desativa a verificação de tipo, semelhante ao dynamic
valor = 100;
let outroValor = "Mensagem"; //tipo de segurança que precisa ser validado antes de usar
if (typeof outroValor === "string") {
    console.log(outroValor.toUpperCase());
}
// Tipo void para funções
function log() {
    console.log("Olá Mundo");
}
let arrowFunction = () => {
    console.log("Exemplo com Arrow Function");
};
// funções com tipos definidos
let soma = (v1, v2) => {
    return v1 + v2;
};
soma(10, 10);
// Objetos tipados
let pessoa = {
    nome: "Diego",
    idade: 40
};
// Union types - permite unir tipos diferentes a um mesmo elemento
function imprimir(valor) {
    console.log(valor);
}
let emp = {
    nome: "Gustavo",
    salario: 40000
};
/** Generic types - permite criar funções, classes ou interfaces genéricas que funcionam
com diferentes tipos */
function identidade(valor) {
    return valor;
}
let chamandoString = identidade("Teste de Chamada com GenericTypes");
let chamandoNumber = identidade(100);
// Classes com tipagem
class Carro {
    constructor(modelo) {
        this.modelo = modelo;
    }
    buzinar() {
        console.log("Bi-bi");
    }
}
// Instanciando o objeto
let fusca = new Carro("Fusca");
fusca.buzinar();
