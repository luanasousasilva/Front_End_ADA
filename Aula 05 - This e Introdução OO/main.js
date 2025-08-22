// Podemos representar um aluno dessa forma
let objAluno = {
    "matricula": 1413121,
    "nome": "Luís Fernando Teixeira Bicalho",
    "CR": 7.2,
    "materias cursando": ["ENG4021", "INF1034", "EMP1500"],
    "ativa": true,
};
console.log(objAluno);

// Vamos representar formas geométricas:
let quadrado = {
    x: 100,
    y: 200,
    lado: 8, // cm
    qtdLados: 4,
    area() {
        // o this neste contexto/escopo é uma referência ao objeto
        // no qual esta função está inserida
        console.log("Esta é uma referência ao objeto:", this);
        return this.lado**2;
    },
    perimetro() {
        return this.qtdLados * this.lado;
    }
};

console.log("A área do quadrado é:", quadrado.area());
console.log("O perímetro do quadrado é:", quadrado.perimetro());

// O que é o this no escopo global?
// Ele é uma referência para o window (objeto que representa a janela do browser e suas propriedades)
console.log(this);

// E se eu criasse a função dentro do quadrado usando function? (tem que ser uma função anônima)
quadrado = {
    x: 100,
    y: 200,
    lado: 8, // cm
    qtdLados: 4,
    area: function () {
        // o this neste contexto/escopo é uma referência ao objeto
        // no qual esta função está inserida
        console.log("Esta é uma referência ao objeto:", this);
        return this.lado**2;
    },
    // Este exemplo abaixo não deve ser feito caso queiramos utilizar o this como referência ao objeto
    perimetro: () => {
        console.log("Este é o this dentro de uma arrow function:", this);
        return this.qtdLados * this.lado;
    }
};
console.log("A área do quadrado é:", quadrado.area());
console.log("O perímetro do quadrado é:", quadrado.perimetro());

// Atributos são as propriedades dentro do objeto que ajudam a definí-lo
// Métodos são as funções definidas dentro de um objeto
const trianguloEquilatero = {
    x: 300,
    y: 200,
    lado: 15, // cm
    qtdLados: 3,
    altura() {
        return this.lado * Math.sqrt(3)/2;
    },
    area() {
        return this.lado * this.altura() / 2;
    },
    perimetro() {
        return this.qtdLados * this.lado;
    }
};
console.log(trianguloEquilatero.altura());

// Como eu represento Polígonos genéricos (algo que ajuda a definir um polígono genérico) do jeito RAIZ
function PoligonoRegular(x, y, lado, qtdLados = 3) {
    console.log("Dentro do prototype PoligonoRegular:", this);
    this.x = x;
    this.y = y;
    this.lado = lado;
    this.qtdLados = qtdLados;
};

// Então criar um prototype em JS é similar a criar o que chamamos em OO de CONSTRUTOR
console.log(new PoligonoRegular(100, 200, 9));

// Associar o prototype de um objeto em JS é similar a extender de uma classe mãe (PolígonoRegular)
Object.setPrototypeOf(quadrado, PoligonoRegular.prototype);
console.log(quadrado);

Object.setPrototypeOf(trianguloEquilatero, PoligonoRegular.prototype);
console.log(trianguloEquilatero);