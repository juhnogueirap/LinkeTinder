document.addEventListener('DOMContentLoaded', function () {
    carregarPerfilCandidato();
});
function carregarPerfilCandidato() {
    var candidatoString = localStorage.getItem('candidato');
    if (candidatoString) {
        var candidato = JSON.parse(candidatoString);
        var nomeCandidato = document.getElementById('nomeCandidato');
        if (nomeCandidato) {
            nomeCandidato.innerText = candidato.nome;
        }
        var descricaoCandidato = document.getElementById('descricaoCandidato');
        if (descricaoCandidato) {
            descricaoCandidato.innerText = candidato.descricao;
        }
    }
    else {
        console.warn('Nenhum candidato encontrado no localStorage.');
    }
}
function mostrarPerfilCompletoCandidato() {
    var candidatoString = localStorage.getItem('candidato');
    if (candidatoString) {
        var candidato = JSON.parse(candidatoString);
        var nomeElem = document.getElementById('nomeCandidato');
        if (nomeElem) {
            nomeElem.innerText = candidato.nome;
        }
        var emailElem = document.getElementById('emailCandidato');
        if (emailElem) {
            emailElem.innerText = candidato.email;
        }
        var cpfElem = document.getElementById('cpfCandidato');
        if (cpfElem) {
            cpfElem.innerText = candidato.cpf;
        }
        var dataNascimentoElem = document.getElementById('dataNascimentoCandidato');
        if (dataNascimentoElem) {
            dataNascimentoElem.innerText = candidato.dataNascimento;
        }
        var paisElem = document.getElementById('paisCandidato');
        if (paisElem) {
            paisElem.innerText = candidato.pais;
        }
        var cepElem = document.getElementById('cepCandidato');
        if (cepElem) {
            cepElem.innerText = candidato.cep;
        }
        var estadoElem = document.getElementById('estadoCandidato');
        if (estadoElem) {
            estadoElem.innerText = candidato.estado;
        }
        var descricaoElem = document.getElementById('descricaoCandidato');
        if (descricaoElem) {
            descricaoElem.innerText = candidato.descricao;
        }
        var competenciasElem = document.getElementById('competenciasCandidato');
        if (competenciasElem) {
            competenciasElem.innerText = candidato.competencias;
        }
    }
    else {
        console.warn('Nenhum candidato encontrado no localStorage.');
    }
}
