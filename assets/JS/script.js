//cria o banco com os dados
let nomeBanco = "Dog Bank";
let cnpj = "00.000.000/0000-00";
let agencia = "004";

let banco = new Banco(nomeBanco, cnpj, agencia);



let linkCadastro = document.getElementById('linkCadastro');

linkCadastro.addEventListener('click', function () {
    
    document.querySelector('#idBanco').value = banco.nome;
    document.querySelector('#idCNPJ').value = banco.cnpj;
    document.querySelector('#idAgencia').value = banco.agencia;

    document.querySelector('div#escoderCadastro').hidden     = false;
    document.querySelector('div#esconderAlteracoes').hidden  = true;//alteracliente
    document.querySelector('div#esconderTransa').hidden      = true;//transacao
    document.querySelector('div#escoderBanco').hidden        = true;//bank

    
});



const criarConta = document.getElementById('idConta');
criarConta.addEventListener('click', pegaConta);

function pegaConta() {

    

    let numConta = document.getElementById('idNumConta').value;
    let saldoInical = Number(document.getElementById('idSaldoInicial').value);
    let limite = Number(document.getElementById('idLimite').value);
    let senha = document.getElementById('idSenha').value;
    let tipo = document.querySelector('#idTipo').value;

    let nomePF = document.getElementById('idNomePF').value;
    let cpf = Number(document.getElementById('idCpf').value);
    let rg = Number(document.getElementById('idRg').value);
    let endereco = document.getElementById('idEndereco').value;

    let conta = new Conta(numConta, saldoInical, limite, senha, tipo);

    let cliente = new Cliente(nomePF, cpf, rg, endereco, conta)
    banco.adicionarCliente(cliente)


    document.getElementById('Msg1').innerHTML = "Registration saved successfully!"
}
//1

let numConta = "000411";
let saldoInical = 1200;
let limite = 200;
let senha = "teste123";
let tipo = 2;

let nomePF = "João José";
let cpf = 00055588892;
let rg = "10000025";
let endereco = "Rua Bonequinha, 124";

let conta = new Conta(numConta, saldoInical, limite, senha, tipo);

let cliente = new Cliente(nomePF, cpf, rg, endereco, conta)
banco.adicionarCliente(cliente)


//2

numConta = "000422";
saldoInical = 200;
limite = 100;
senha = "Arroz777";
tipo = 1;

nomePF = "Maria José";
cpf = 05071812983;
rg = "111";
endereco = "Rua CDC, 224";

let conta2 = new Conta(numConta, saldoInical, limite, senha, tipo);

let cliente2 = new Cliente(nomePF, cpf, rg, endereco, conta2)
banco.adicionarCliente(cliente2)


//3


numConta = "000433";
saldoInical = 15000;
limite = 3000;
senha = "batata666";
tipo = 1;

nomePF = "Senta lá Claudinha";
cpf = 09999999900;
rg = "34567811";
endereco = "Rua Abobrinhas, 4444";

let conta3 = new Conta(numConta, saldoInical, limite, senha, tipo);

let cliente3 = new Cliente(nomePF, cpf, rg, endereco, conta3)
banco.adicionarCliente(cliente3)


//4


numConta = "000554";
saldoInical = 50;
limite = 100;
senha = "xeroxdobrasil";
tipo = 2;

nomePF = "Maravilha do Oeste";
cpf = 09988899099;
rg = "34997733";
endereco = "Avenida Brasil, 2";

let conta4 = new Conta(numConta, saldoInical, limite, senha, tipo);

let cliente4 = new Cliente(nomePF, cpf, rg, endereco, conta4)
banco.adicionarCliente(cliente4)
