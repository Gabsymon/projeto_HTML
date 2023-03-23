// const cep = document.querySelector("#cep")

// const showData = (result)=>{
//     for(const campo in result){
//         if(document.querySelector("#"+campo)){
//             document.querySelector("#"+campo).value = result[campo]
//         }
//     }
// }




// cep.addEventListener("blur",(e)=>{
//     let search = cep.value.replace("-","")
//     const options = {
//         method: 'GET',
//         mode: 'cors',
//         cache: 'default'
//     }

//     fetch(`https://viacep.com.br/ws/${search}/json/`, options)
//     .then(response =>{ response.json()
//         .then( data => showData(data))
//     })
//     .catch(e => alert('Não foi possível encontrar o CEP; Insira um CEP válido.'))
//     return;
// })

// Buscar o CEP
function buscar() {
    var cep = document.getElementById("cep").value;

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4  && this.status == 200) {
            var ret = JSON.parse(this.responseText);

            if (ret.erro) {
                document.getElementById("logradouro").value = "";
                document.getElementById("bairro").value = "";
                document.getElementById("complemento").value = "";
                document.getElementById("localidade").value = "";
                document.getElementById("uf").value = "";
                alert("Não foi possível encontrar o CEP. Inserir um CEP válido");
            } else {
                document.getElementById("logradouro").value = ret.logradouro;
                document.getElementById("bairro").value = ret.bairro;
                document.getElementById("complemento").value = ret.complemento;
                document.getElementById("localidade").value = ret.localidade;
                document.getElementById("uf").value = ret.uf;
            }

        }
    };
    request.open("GET", "https://viacep.com.br/ws/"+cep+"/json/", true);
    request.send();
}

$(document).ready(function() {
    $.getJSON("http://localhost:3000/tipo_cliente", function(data) {
        var tipo_cliente = $('#tipo_cliente');
        $.each(data, function(i, tipo) {
            tipo_cliente.append($('<option></option>').val(tipo.id).text(tipo.descricao));
        });
    });
});

//POST do Formulário
function sendForm(){

    var nome, telefone, email, cep, logradouro, bairro, complemento, localidade, uf;
    nome = document.getElementById("nome").value
    telefone = document.getElementById("telefone").value
    email = document.getElementById("email").value
    cep = document.getElementById("cep").value
    logradouro = document.getElementById("logradouro").value
    bairro = document.getElementById("bairro").value
    complemento = document.getElementById("complemento").value
    localidade = document.getElementById("localidade").value
    uf = document.getElementById("uf").value

    var postForm = new XMLHttpRequest


    postForm.onreadystatechange = function () {
        if (postForm.readyState == 4 && postForm.status == 200){
            postForm.responseXML
        } else
            alert("Não foi possível fazer o envio dos dados.")
    }
    postForm.setRequestHeader('form', 'text/xml');
    postForm.open("POST", "/database", true);
    postForm.send()
}