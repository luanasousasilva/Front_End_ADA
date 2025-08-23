class PoligonoRegular {
    constructor(x, y, lado, qtdLados = 3) {
        if (qtdLados < 3) {
            throw new Error("Polígono inválido");
        }

        this.x = x;
        this.y = y;
        this.lado = lado;
        this.qtdLados = qtdLados;
    }

    perimetro() {
        return this.lado * this.qtdLados;
    }

    area() {
        console.log("Área pertencente ao Polígono Regular");
        switch (this.qtdLados) {
            case 3: // Triângulo equilátero
                return (Math.pow(this.lado, 2) * Math.sqrt(3)) / 4;
            case 4: // Quadrado
                return Math.pow(this.lado, 2);
            case 6: // Hexágono regular
                return (3 * Math.pow(this.lado, 2) * Math.sqrt(3)) / 2;
            default:
                return "Fórmula de área não definida para este polígono";
        }
    }
}

class Quadrado extends PoligonoRegular {
    constructor(x, y, lado) {
        super(x, y, lado, 4);
    }
}

class TrianguloEquilatero extends PoligonoRegular {
    constructor(x, y, lado) {
        super(x, y, lado, 3);
    }

    area() {
        console.log("Área do Triângulo Equilátero");
        return (Math.pow(this.lado, 2) * Math.sqrt(3)) / 4;
    }
}

class Losango extends PoligonoRegular {
    constructor(x, y, lado, diagonalMaior, diagonalMenor) {
        super(x, y, lado, 4);
        this.diagonalMaior = diagonalMaior;
        this.diagonalMenor = diagonalMenor;
    }

    area() {
        console.log("Área do Losango");
        return (this.diagonalMaior * this.diagonalMenor) / 2;
    }

    perimetro() {
        return this.lado * 4;
    }
}

const q1 = new Quadrado(100, 200, 8);
console.log("Quadrado", q1);
console.log("Perímetro:", q1.perimetro());
console.log("Área:", q1.area());

const t1 = new TrianguloEquilatero(50, 50, 6);
console.log("Triângulo Equilátero", t1);
console.log("Perímetro:", t1.perimetro());
console.log("Área:", t1.area());

const l1 = new Losango(10, 20, 5, 12, 8);
console.log("Losango", l1);
console.log("Perímetro:", l1.perimetro());
console.log("Área:", l1.area());
