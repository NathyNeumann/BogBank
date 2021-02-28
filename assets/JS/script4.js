let linkBanco = document.getElementById('linkBanco');
linkBanco.addEventListener('click', function () {
    document.querySelector('div#escoderBanco').hidden       = false;
    document.querySelector('div#escoderCadastro').hidden    = true;
    document.querySelector('div#esconderAlteracoes').hidden = true;//alteracliente
    document.querySelector('div#esconderTransa').hidden      = true;//transacao

});

document.querySelector('#alteraBanco').value = banco.nome;
document.querySelector('#alteraCnpj').value = banco.cnpj;
document.querySelector('#alteraAg').value = banco.agencia;

let mostrarClienets = document.querySelector('#mostrarClientes');
mostrarClienets.addEventListener('click', mostrarTodos)

function mostrarTodos(){
    let clientes = banco.clientes;
    let tablebody = document.querySelector('tbody');
    
   tablebody.innerHTML = "";
    
    clientes.forEach(function (el){
        let tr = document.createElement('tr');
        tr.appendChild(nomes(el, "classNome"))
        tr.appendChild(cpfs(el, "classCpf"))
        tr.appendChild(tipos(el, "classTipo"))
        tr.appendChild(limites(el, "classLimite"))
        tr.appendChild(saldos(el, "classSaldo"))
        tablebody.appendChild(tr)
        return tr
    })
  
    
    function nomes(el, classe){
        let td = document.createElement('td');
        td.innerHTML = el.nome;
        td.classList.add(classe);
        
        return td
    }
    function cpfs(el, classe){
        let td = document.createElement('td');
        td.innerHTML = el.cpf;
        td.classList.add(classe);
       
        return td
    }
    function tipos(el, classe){
        let td = document.createElement('td');
        td.innerHTML = el.conta.tipoConta;
        td.classList.add(classe);
       
        return td
    }
    function limites(el, classe){
        let td = document.createElement('td');
        td.innerHTML = el.conta.limite;
        td.classList.add(classe);
       
        return td
    }
    function saldos(el, classe){
        let td = document.createElement('td');
        td.innerHTML = el.conta.saldo;
        td.classList.add(classe);
       
        return td
    }
}