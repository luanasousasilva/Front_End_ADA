import { ClienteBase } from "./ClienteBase";

export class ClientePessoaFisica extends ClienteBase {
    public nome: string;
    public cpf: string;

    constructor(id: number, email: string, nome: string, cpf: string){
        super(id, email);
        this.nome = nome;
        this.cpf = cpf;
    }
}
