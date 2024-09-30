var _a;
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
function salvarVaga() {
    var nomeVaga = document.getElementById('nomeVaga').value;
    var descricaoVaga = document.getElementById('descricaoVaga').value;
    var areaAtuacaoVaga = document.getElementById('areaAtuacaoVaga').value;
    var competenciasVaga = document.getElementById('competenciasVaga').value;
    var jornadaVaga = document.getElementById('jornadaVaga').value;
    var localidadeVaga = document.getElementById('localidadeVaga').value;
    var salarioVaga = document.getElementById('salarioVaga').value;
    var vaga = {
        nomeVaga: nomeVaga,
        descricaoVaga: descricaoVaga,
        areaAtuacaoVaga: areaAtuacaoVaga,
        competenciasVaga: competenciasVaga,
        jornadaVaga: jornadaVaga,
        localidadeVaga: localidadeVaga,
        salarioVaga: salarioVaga
    };
    var vagas = JSON.parse(localStorage.getItem('vagas') || '[]');
    vagas.push(vaga);
    localStorage.setItem('vagas', JSON.stringify(vagas));
    alert('Vaga cadastrada!');
    window.location.href = 'perfilEmpresa.html';
}
document.getElementById('criarVagaLink').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('cadastroVaga').style.display = 'block';
});
(_a = document.getElementById('cadastrarVaga')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', salvarVaga);
