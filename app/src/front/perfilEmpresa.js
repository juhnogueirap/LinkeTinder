document.addEventListener('DOMContentLoaded', function () {
    carregarPerfilEmpresa();
});
function carregarPerfilEmpresa() {
    var empresaString = localStorage.getItem('empresa');
    if (empresaString) {
        var empresa = JSON.parse(empresaString);
        var nomeEmpresa = document.getElementById('nomeEmpresa');
        if (nomeEmpresa) {
            nomeEmpresa.innerText = empresa.nome;
        }
        var descricaoEmpresa = document.getElementById('descricaoEmpresa');
        if (descricaoEmpresa) {
            descricaoEmpresa.innerText = empresa.descricao;
        }
    }
    else {
        console.warn('Nenhum empresa encontrado no localStorage.');
    }
}
function mostrarPerfilCompletoEmpresa() {
    var empresaString = localStorage.getItem('empresa');
    if (empresaString) {
        var empresa = JSON.parse(empresaString);
        var nomeEmpresa = document.getElementById('nomeEmpresa');
        if (nomeEmpresa) {
            nomeEmpresa.innerText = empresa.nome;
        }
        var emailEmpresa = document.getElementById('emailEmpresa');
        if (emailEmpresa) {
            emailEmpresa.innerText = empresa.email;
        }
        var cnpjEmpresa = document.getElementById('cnpjEmpresa');
        if (cnpjEmpresa) {
            cnpjEmpresa.innerText = empresa.cpf;
        }
        var dataFundEmpresa = document.getElementById('dataFundacao');
        if (dataFundEmpresa) {
            dataFundEmpresa.innerText = empresa.dataNascimento;
        }
        var paisEmpresa = document.getElementById('paisEmpresa');
        if (paisEmpresa) {
            paisEmpresa.innerText = empresa.pais;
        }
        var cepEmpresa = document.getElementById('cepEmpresa');
        if (cepEmpresa) {
            cepEmpresa.innerText = empresa.cep;
        }
        var estadoEmpresa = document.getElementById('estadoEmpresa');
        if (estadoEmpresa) {
            estadoEmpresa.innerText = empresa.estado;
        }
        var descricaoEmpresa = document.getElementById('descricaoEmpresa');
        if (descricaoEmpresa) {
            descricaoEmpresa.innerText = empresa.descricao;
        }
        var competenciasEmpresa = document.getElementById('competenciasEmpresa');
        if (competenciasEmpresa) {
            competenciasEmpresa.innerText = empresa.competencias;
        }
    }
    else {
        console.warn('Nenhum empresa encontrado no localStorage.');
    }
}
