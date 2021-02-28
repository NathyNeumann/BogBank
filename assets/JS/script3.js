let linkTransacoes = document.getElementById('linkATransacoes');

linkTransacoes.addEventListener('click', function () {
    document.querySelector('div#esconderTransa').hidden = false;
    document.querySelector('div#escoderCadastro').hidden = true;
    document.querySelector('div#esconderAlteracoes').hidden = true;//alteracliente
    document.querySelector('div#escoderBanco').hidden = true;//bank

});



let buscaCliente2 = document.querySelector('#buscarCliente2');
buscaCliente2.addEventListener('click', buscarCliente2);

function buscarCliente2() {
    document.querySelector('#alteacoesClient').hidden = false;
    document.querySelector('#botoesTransacoes').hidden = false;
    document.querySelector('#dep').hidden = true;
    document.querySelector('#saq').hidden = true;
    let idCliente = Number(document.querySelector("#idCliente2").value);
    let clienteAchado = banco.clientes[idCliente]


    document.getElementById('showNome').value = clienteAchado.nome;
    document.getElementById('showCpf').value = clienteAchado.cpf;
    document.getElementById('showNumConta').value = clienteAchado.conta.numConta;
    document.getElementById('showLimite').value = clienteAchado.conta.limite;
    document.getElementById('showSaldo').value = clienteAchado.conta.saldo;

    return idCliente
}

let depositoButton = document.querySelector('#deposito');

depositoButton.addEventListener('click', function () {
    document.querySelector('#dep').hidden = false;
    document.querySelector('#botoesTransacoes').hidden = true;
})

let depositar = document.querySelector('#depositar');
depositar.addEventListener('click', function () {
    let valorDeposito = Number(document.getElementById('valDeposito').value);
    let idCliente = buscarCliente2();
    let msg;
   let resultadoDeposito =  banco.clientes[idCliente].conta.depositar(valorDeposito);
    if (resultadoDeposito){
        msg = "Transaction successfully completed!";
    }else{
        msg = "ERROR - invalid value!"
    }

    
    document.getElementById('showSaldo').value = banco.clientes[idCliente].conta.saldo;
    

    document.querySelector('#msg2').innerHTML = msg;


})
let saqueButton = document.querySelector('#saque');

saqueButton.addEventListener('click', function () {
    document.querySelector('#saq').hidden = false;
    document.querySelector('#botoesTransacoes').hidden = true;
})

let sacar = document.querySelector('#sacar');
sacar.addEventListener('click', function () {
    let valorSaque = Number(document.getElementById('valSaque').value);
    let idCliente = buscarCliente2();

   
    let resultadoSaque =  banco.clientes[idCliente].conta.sacar(valorSaque);
    if (resultadoSaque){
        msg = "Transaction successfully completed!";
    }else{
        msg = "ERROR - invalid value!"
    } 


   
    document.getElementById('showSaldo').value = banco.clientes[idCliente].conta.saldo;
    

    document.querySelector('#msg2').innerHTML = msg;
})