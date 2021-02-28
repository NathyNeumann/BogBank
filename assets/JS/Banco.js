class Banco{

    #nome;
    #agencia;
    #cnpj;
    #clientes =[];

    constructor(nome, cnpj, agencia){
        this.#nome = nome;
        this.#cnpj = cnpj;
        this.agencia = agencia;
    }
    get nome(){
        return this.#nome;
    }
    get cnpj(){
        return this.#cnpj;
    }
    get agencia(){
        return this.#agencia;
    }
    set agencia(agencia){
        this.#agencia = agencia;
    }
    get clientes(){
        return this.#clientes;
    }

    getcliente(codCliente){
        if(codCliente>=0 && codCliente < this.#clientes.lenght){
            return this.#clientes[codCliente]
        }
    }
    adicionarCliente(cliente){
        this.#clientes.push(cliente)
    }
}