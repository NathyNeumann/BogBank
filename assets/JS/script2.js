let linkAlteraCliente = document.getElementById('linkAlteraCliente');

linkAlteraCliente.addEventListener('click', function () {
    document.querySelector('div#esconderAlteracoes').hidden = false;
    document.querySelector('div#escoderCadastro').hidden = true;//alteracliente
    document.querySelector('div#esconderTransa').hidden = true;//transacao
    document.querySelector('div#escoderBanco').hidden = true;//bank
});

let buscaCliente = document.querySelector('#buscarCliente');


buscaCliente.addEventListener('click', buscarCliente);

function buscarCliente() {
    document.querySelector('#ClientsData').hidden = false;
    let idCliente = Number(document.querySelector("#idCliente").value);
    let clienteAchado = banco.clientes[idCliente]

    document.querySelector('#Msg').innerHTML = "";

    document.getElementById('alteraNome').value = clienteAchado.nome;
    document.getElementById('alteraCpf').value = clienteAchado.cpf;
    document.getElementById('alteraRg').value = clienteAchado.rg;
    document.getElementById('alteraEndereco').value = clienteAchado.endereco;
    document.getElementById('alteraNumConta').value = clienteAchado.conta.numConta;
    // document.getElementById('alteraAgencia').value  = banco.agencia;
    document.getElementById('alteraSenha').value = clienteAchado.conta.senha;
    document.getElementById('alteraTipo').value = clienteAchado.conta.tipoConta;
    document.getElementById('alteraLimite').value = clienteAchado.conta.limite;
    document.getElementById('consultaSaldo').value = clienteAchado.conta.saldo;
    return idCliente
}

let alterar = document.getElementById('idAlterar');
alterar.addEventListener('click', alteraDados);

function alteraDados() {
    document.getElementById('alteraNome').disabled = false;
    document.getElementById('alteraCpf').disabled = false;
    document.getElementById('alteraRg').disabled = false;
    document.getElementById('alteraEndereco').disabled = false;
    document.getElementById('alteraNumConta').disabled = false;
    document.getElementById('alteraTipo').disabled = false;
    document.getElementById('alteraSenha').disabled = false;
    document.getElementById('alteraLimite').disabled = false;
}
let alteraSalva = document.getElementById('alteraSalva');
alteraSalva.addEventListener('click', salvaAlteracao);

function salvaAlteracao() {
    let teste = document.getElementById('alteraNome').disabled
    if (teste) {
        alert('clique em alterar para salvar')
    } else {

        document.getElementById('alteraNome').disabled = true;
        document.getElementById('alteraCpf').disabled = true;
        document.getElementById('alteraRg').disabled = true;
        document.getElementById('alteraEndereco').disabled = true;
        document.getElementById('alteraNumConta').disabled = true;
        document.getElementById('alteraTipo').disabled = true;
        document.getElementById('alteraSenha').disabled = true;
        document.getElementById('alteraLimite').disabled = true;

        let novoNome = document.getElementById('alteraNome').value;
        let novoCpf = document.getElementById('alteraCpf').value;
        let novoRg = document.getElementById('alteraRg').value;
        let novoEndereco = document.getElementById('alteraEndereco').value;
        let novoNumConta = document.getElementById('alteraNumConta').value;
        let novaSenha = document.getElementById('alteraSenha').value;
        let novoTipo = document.getElementById('alteraTipo').value;
        let novoLimite = document.getElementById('alteraLimite').value;

        let idCliente = buscarCliente()
        banco.clientes[idCliente].nome = novoNome;
        banco.clientes[idCliente].cpf = novoCpf;
        banco.clientes[idCliente].rg = novoRg;
        banco.clientes[idCliente].endereco = novoEndereco;
        banco.clientes[idCliente].conta.numConta = novoNumConta;
        banco.clientes[idCliente].conta.senha = novaSenha;
        banco.clientes[idCliente].conta.tipoConta = novoTipo;
        banco.clientes[idCliente].conta.limite = novoLimite;

        document.getElementById('alteraNome').value = "";
        document.getElementById('alteraCpf').value = "";
        document.getElementById('alteraRg').value = "";
        document.getElementById('alteraEndereco').value = "";
        document.getElementById('alteraNumConta').value = "";
        document.getElementById('alteraSenha').value = "";
        document.querySelector("#idCliente").value = "";
        document.getElementById('alteraTipo').value = "";
        document.getElementById('alteraLimite').value = "";
        document.getElementById('consultaSaldo').value = "";
        document.querySelector('#Msg').innerHTML = "Changes saved successfully!"
    }
}
