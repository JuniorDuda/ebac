function startSubmit(){
    showLoading()
    
    document.getElementById("errors").innerHTML = "";
    submitForm(finishSubmit);
}

function finishSubmit(errors){
    
    if (errors.length > 0){
        for (let i = 0; i < errors.length; i++) {
            document.getElementById("errors").innerHTML += errors[i] + "<br/>";
        }
    }else{
        document.getElementById("formulario").reset();
    }

    hideLoading();
    document.getElementById("buttonSubmit").disabled = false;
}


function submitForm(callback) {
    setTimeout(() => {
        //valida os dados do formulario
        errors = [];
        if (document.getElementById("nome").value.trim() === "") {
            errors.push("O campo nome não foi informado.");
        }
        if (document.getElementById("masculino").checked == false && document.getElementById("feminino").checked == false) {
            errors.push("Nenhuma opção de sexo foi selecionada.");
        }

        if (errors.length > 0){
            callback(errors);
            return false;
        }

        const nome = document.getElementById("nome").value;
        const interesse = document.getElementById("interesse").value;
        const sexo = document.querySelector('input[name="sexo"]:checked').value;
        const gostos = [];
        const checkboxes = document.querySelectorAll('input[name="gostos"]:checked');
        checkboxes.forEach(function(checkbox) {
            gostos.push(checkbox.value);
        });
        const resposta = {
            nome: nome,
            interesse: interesse,
            sexo: sexo,
            gostos: gostos.join(", ")
        };
        adicionarResposta(resposta);
        callback([]);
    }, 2000);
}

function adicionarResposta(resposta) {
    const tabela = document.getElementById("respostas");
    const linha = tabela.insertRow(-1);
    const cell1 = linha.insertCell(0);
    const cell2 = linha.insertCell(1);
    const cell3 = linha.insertCell(2);
    const cell4 = linha.insertCell(3);
    cell1.innerHTML = resposta.nome;
    cell2.innerHTML = resposta.interesse;
    cell3.innerHTML = resposta.sexo;
    cell4.innerHTML = resposta.gostos;
}


function showLoading() {
    const loadingOverlay = document.getElementById("loadingOverlay");
    loadingOverlay.style.display = "flex";
}
  
function hideLoading() {
    const loadingOverlay = document.getElementById("loadingOverlay");
    loadingOverlay.style.display = "none";
}
  