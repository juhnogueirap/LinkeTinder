var _a, _b;
import { validarDadosCandidato } from './validarDadosCadastro.js';
import { validarDadosEmpresa } from "./validarDadosCadastro.js";
document.addEventListener('DOMContentLoaded', function () {
    //validarDadosCandidato();
});
function salvarCandidato() {
    const candidato = {
        nome: document.getElementById('nomeCandidato').value,
        email: document.getElementById('emailCandidato').value,
        cpf: document.getElementById('cpfCandidato').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        pais: document.getElementById('paisCandidato').value,
        cep: document.getElementById('cepCandidato').value,
        estado: document.getElementById('estadoCandidato').value,
        descricao: document.getElementById('descricaoCandidato').value,
        competencias: document.getElementById('competenciasCandidato').value,
        formacao: document.getElementById('formacaoCandidato').value,
        senha: document.getElementById('inputPasswordCandidato').value,
        candidatoId: gerarIdAleatorio(),
    };
    if (validarDadosCandidato(candidato)) {
        const candidatosString = localStorage.getItem('candidatos');
        const candidatos = candidatosString ? JSON.parse(candidatosString) : [];
        candidato.senha = btoa(candidato.senha);
        candidatos.push(candidato);
        localStorage.setItem('candidatos', JSON.stringify(candidatos));
        console.log("Olá, estou salvando o candidato!!", candidato);
        alert('Candidato cadastrado!');
        window.location.href = 'login.html';
        return;
    }
    else {
        alert('Não foi possível cadastrar! Verifique se os dados estão preenchidos corretamente.');
        window.location.href = 'cadastro.html';
        return;
    }
}
function salvarEmpresa() {
    const empresa = {
        nome: document.getElementById('nomeEmpresa').value,
        email: document.getElementById('emailEmpresa').value,
        cnpj: document.getElementById('cnpjEmpresa').value,
        dataFundacao: document.getElementById('dataFundacao').value,
        pais: document.getElementById('paisEmpresa').value,
        cep: document.getElementById('cepEmpresa').value,
        estado: document.getElementById('estadoEmpresa').value,
        descricao: document.getElementById('descricaoEmpresa').value,
        competencias: document.getElementById('competenciasEmpresa').value,
        senha: document.getElementById('inputPasswordEmpresa').value,
        empresaId: gerarIdAleatorio(),
    };
    if (validarDadosEmpresa(empresa)) {
        const empresasString = localStorage.getItem('empresas');
        const empresas = empresasString ? JSON.parse(empresasString) : [];
        empresa.senha = btoa(empresa.senha);
        empresas.push(empresa);
        localStorage.setItem('empresas', JSON.stringify(empresas));
        console.log("Olá, estou salvando a empresa!!", empresa);
        alert('Empresa cadastrada!');
        window.location.href = 'login.html';
        return;
    }
    else {
        alert('Não foi possível cadastrar! Verifique se os dados estão preenchidos corretamente.');
        window.location.href = 'cadastro.html';
        return;
    }
}
function gerarIdAleatorio() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}
(_a = document.getElementById('cadastrarCandidato')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', salvarCandidato);
(_b = document.getElementById('cadastrarEmpresa')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', salvarEmpresa);
