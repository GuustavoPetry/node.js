// Tipos básicos
let nome: String = "Gustavo"; //tipo string
let numero: number = 50; //tipo number
let decimal: number = 10.00; //tipo number
let booleano: boolean = true;

// Arrays
let tipoArray: number[] = [1, 2, 3, 4, 5];
let arrayString: String[] = ["A", "B", "C"];

// Tuplas - arrays com quantidade e tipos fixos no elemento
let tupla1: [String, number] = ["Diego", 40];

// Enum - conjunto de valores nomeados
enum Status {
    Ativo,
    Inativo,
    Pendente
}

let s: Status = Status.Ativo;

enum Pedido {
    Pendente = 1,
    Recebido = 2,
    Cancelado = 9
}

let valor: any = "String"; //desativa a verificação de tipo, semelhante ao dynamic
valor = 100;

let outroValor: unknown = "Mensagem" //tipo de segurança que precisa ser validado antes de usar
if (typeof outroValor === "string") {
    console.log(outroValor.toUpperCase());
}

// Tipo void para funções
function log(): void {
    console.log("Olá Mundo");
}

let arrowFunction = (): void => {
    console.log("Exemplo com Arrow Function")
}

// funções com tipos definidos
let soma = (v1: number, v2: number): number => {
    return v1 + v2;
}
soma(10, 10);

// Objetos tipados
let pessoa: { nome: String; idade: number } = {
    nome: "Diego",
    idade: 40
}

// Union types - permite unir tipos diferentes a um mesmo elemento
function imprimir(valor: number | String) {
    console.log(valor);
}

// Intersection types - permite combinar tipos diferentes
type Individuo = { nome: String };
type Funcionario = { salario: number };

type Empregado = Individuo & Funcionario;

let emp: Empregado = {
    nome: "Gustavo",
    salario: 40000
}

/** Generic types - permite criar funções, classes ou interfaces genéricas que funcionam
com diferentes tipos */
function identidade<T>(valor: T): T {
    return valor;
}

let chamandoString = identidade<String>("Teste de Chamada com GenericTypes");
let chamandoNumber = identidade<number>(100);

// Classes com tipagem
class Carro {
    modelo: String

    constructor(modelo:String) {
        this.modelo = modelo
    }

    buzinar(): void {
        console.log("Bi-bi");
    }
}

// Instanciando o objeto
let fusca = new Carro("Fusca");
fusca.buzinar();
