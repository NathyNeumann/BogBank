class Conta{
    #numConta;
    #saldo = 0;
    #limite =0;
    #tipoConta;
    #senha;

    constructor(numConta, saldo, limite, senha, tipoConta){
        this.numConta = numConta;
        this.depositar(saldo);
        this.limite = limite;
        this.senha = senha;
        this.tipoConta = tipoConta;
    }
    get numConta(){
        return this.#numConta;
    }
    set numConta(numConta){
        this.#numConta = numConta;
    }
    get saldo(){
        return this.#saldo;
    }
    
    get limite(){
        return this.#limite;
    }
    set limite(limite){
        this.#limite = limite;
    }
    get senha(){
        return this.#senha;
    }
    set senha(senha){
        this.#senha = senha;
    }
    get tipoConta(){
        return this.#tipoConta;
    }
    set tipoConta(tipoConta){
        this.#tipoConta = tipoConta;
    }


    depositar(valorDepositado){
        if(valorDepositado > 0){
            this.#saldo += valorDepositado;
            return true;
        }else{
            return false;
        }
    }
    sacar(valorSaque){
        if(valorSaque < this.#saldo + this.#limite){
            this.#saldo -= valorSaque;
            return true;
        }else{
            return false;
        }
    }
}