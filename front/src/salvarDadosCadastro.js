"use strict";
var _a, _b;
function salvarCandidato() {
    const nome = document.getElementById('nomeCandidato').value;
    const email = document.getElementById('emailCandidato').value;
    const cpf = document.getElementById('cpfCandidato').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const pais = document.getElementById('paisCandidato').value;
    const cep = document.getElementById('cepCandidato').value;
    const estado = document.getElementById('estadoCandidato').value;
    const descricao = document.getElementById('descricaoCandidato').value;
    const competencias = document.getElementById('competenciasCandidato').value;
    const formacao = document.getElementById('formacaoCandidato').value;
    const senha = document.getElementById('inputPasswordCandidato').value;
    const senhaHash = btoa(senha);
    const candidatoId = gerarIdAleatorio();
    const candidato = {
        nome,
        email,
        cpf,
        dataNascimento,
        pais,
        cep,
        estado,
        descricao,
        competencias,
        formacao,
        candidatoId,
        senha: senhaHash
    };
    const candidatosString = localStorage.getItem('candidatos');
    const candidatos = candidatosString ? JSON.parse(candidatosString) : [];
    candidatos.push(candidato);
    localStorage.setItem('candidatos', JSON.stringify(candidatos));
    alert('Candidato cadastrado!');
}
function salvarEmpresa() {
    const nome = document.getElementById('nomeEmpresa').value;
    const email = document.getElementById('emailEmpresa').value;
    const cnpj = document.getElementById('cnpjEmpresa').value;
    const dataFundacao = document.getElementById('dataFundacao').value;
    const pais = document.getElementById('paisEmpresa').value;
    const cep = document.getElementById('cepEmpresa').value;
    const estado = document.getElementById('estadoEmpresa').value;
    const descricao = document.getElementById('descricaoEmpresa').value;
    const competencias = document.getElementById('competenciasEmpresa').value;
    const senha = document.getElementById('inputPasswordEmpresa').value;
    const senhaHash = btoa(senha);
    const empresaId = gerarIdAleatorio();
    const empresa = {
        nome,
        email,
        cnpj,
        dataFundacao,
        pais,
        cep,
        estado,
        descricao,
        competencias,
        empresaId,
        senha: senhaHash
    };
    localStorage.setItem('empresa', JSON.stringify(empresa));
    alert('Empresa cadastrada!');
    //agora preciso encaminhar para a tela de login
}
function gerarIdAleatorio() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}
(_a = document.getElementById('cadastrarCandidato')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', salvarCandidato);
(_b = document.getElementById('cadastrarEmpresa')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', salvarEmpresa);
