"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var _a;
    carregarPerfilCandidato();
    (_a = document.getElementById('vagasAll')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', mostrarVagasAll);
});
function carregarPerfilCandidato() {
    const candidatosString = localStorage.getItem('candidatos');
    if (candidatosString) {
        const candidatos = JSON.parse(candidatosString);
        const primeiroCandidato = candidatos[0];
        const nomeCandidato = document.getElementById('nomeCandidato');
        if (nomeCandidato) {
            nomeCandidato.innerText = primeiroCandidato.nome;
        }
        const descricaoCandidato = document.getElementById('descricaoCandidato');
        if (descricaoCandidato) {
            descricaoCandidato.innerText = primeiroCandidato.descricao;
        }
    }
    else {
        console.warn('Nenhum candidato encontrado no localStorage.');
    }
}
function mostrarPerfilCompletoCandidato() {
    const candidatoString = localStorage.getItem('candidato');
    if (candidatoString) {
        const candidato = JSON.parse(candidatoString);
        const nomeCandidato = document.getElementById('nomeCandidato');
        if (nomeCandidato) {
            nomeCandidato.innerText = candidato.nome;
        }
        const emailCandidato = document.getElementById('emailCandidato');
        if (emailCandidato) {
            emailCandidato.innerText = candidato.email;
        }
        const cpfCandidato = document.getElementById('cpfCandidato');
        if (cpfCandidato) {
            cpfCandidato.innerText = candidato.cpf;
        }
        const dataNascimentoCandidato = document.getElementById('dataNascimentoCandidato');
        if (dataNascimentoCandidato) {
            dataNascimentoCandidato.innerText = candidato.dataNascimento;
        }
        const paisCandidato = document.getElementById('paisCandidato');
        if (paisCandidato) {
            paisCandidato.innerText = candidato.pais;
        }
        const cepCandidato = document.getElementById('cepCandidato');
        if (cepCandidato) {
            cepCandidato.innerText = candidato.cep;
        }
        const estadoCandidato = document.getElementById('estadoCandidato');
        if (estadoCandidato) {
            estadoCandidato.innerText = candidato.estado;
        }
        const descricaoCandidato = document.getElementById('descricaoCandidato');
        if (descricaoCandidato) {
            descricaoCandidato.innerText = candidato.descricao;
        }
        const competenciasCandidato = document.getElementById('competenciasCandidato');
        if (competenciasCandidato) {
            competenciasCandidato.innerText = candidato.competencias;
        }
        const formacaoCandidato = document.getElementById('formacaoCandidato');
        if (formacaoCandidato) {
            formacaoCandidato.innerText = candidato.competencias;
        }
    }
    else {
        console.warn('Nenhum candidato encontrado no localStorage.');
    }
}
function mostrarVagasAll() {
    let vagas = JSON.parse(localStorage.getItem('vagas') || '[]');
    let vagasContainer = document.getElementById('mostrarVagasAll');
    const cardTemplate = document.getElementById('cardVagaTemplate');
    vagasContainer.innerHTML = '';
    vagasContainer.style.display = 'block';
    vagas.forEach(vaga => {
        let cardClone = cardTemplate.content.cloneNode(true);
        cardClone.querySelector('.card-title').textContent = vaga.nomeVaga;
        cardClone.querySelector('.card-subtitle').textContent = `Área de Atuação: ${vaga.areaAtuacaoVaga}`;
        cardClone.querySelector('.card-text').textContent = vaga.descricaoVaga;
        cardClone.querySelector('.text-muted').textContent = `Localidade: ${vaga.localidadeVaga}`;
        vagasContainer.appendChild(cardClone);
    });
}
