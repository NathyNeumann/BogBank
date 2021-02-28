class Cliente {
    static contadorCliente = 0;

    #nome;
    #cpf;
    #rg;
    #endereco;
    #conta;

    constructor(nome,cpf, rg, endereco, conta){
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.endereco = endereco;
        this.conta = conta;
        this.cpf = cpf;
        Cliente.contadorCliente++;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;  
    }

    get conta(){
        return this.#conta;
    }

    set conta(conta){
        this.#conta = conta; 
    }

    get cpf(){
        return this.#cpf
    }
    set cpf(cpf){
        this.#cpf = cpf;
    }
    get rg(){
        return this.#rg
    }
    set rg(rg){
        this.#rg = rg;
    }
    get endereco(){
        return this.#endereco
    }
    set endereco(endereco){
        this.#endereco = endereco;
    }
}