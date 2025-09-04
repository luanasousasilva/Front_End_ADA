export class Cliente {
    constructor(
        public id: number,
        public nome: string,
        public email: string
    ) {
        console.log(`Cliente criado: ${this.nome} (${this.email})`);
    }
}