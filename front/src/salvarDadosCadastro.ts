import {validarDadosCandidato} from './validarDadosCadastro.js';
import {validarDadosEmpresa} from "./validarDadosCadastro.js";
import {Candidato} from "./interfaces";
import {Empresa} from "./interfaces";


document.addEventListener('DOMContentLoaded', function() {

    //validarDadosCandidato();

});


function salvarCandidato() {



    const candidato: Candidato = {

        nome: (document.getElementById('nomeCandidato') as HTMLInputElement).value,
        email: (document.getElementById('emailCandidato') as HTMLInputElement).value,
        cpf: (document.getElementById('cpfCandidato') as HTMLInputElement).value,
        dataNascimento: (document.getElementById('dataNascimento') as HTMLInputElement).value,
        pais: (document.getElementById('paisCandidato') as HTMLInputElement).value,
        cep: (document.getElementById('cepCandidato') as HTMLInputElement).value,
        estado: (document.getElementById('estadoCandidato') as HTMLInputElement).value,
        descricao: (document.getElementById('descricaoCandidato') as HTMLInputElement).value,
        competencias: (document.getElementById('competenciasCandidato') as HTMLInputElement).value,
        formacao: (document.getElementById('formacaoCandidato') as HTMLInputElement).value,
        senha: (document.getElementById('inputPasswordCandidato') as HTMLInputElement).value,
        candidatoId: gerarIdAleatorio(),
    }

    if(validarDadosCandidato(candidato)){

        const candidatosString = localStorage.getItem('candidatos');
        const candidatos = candidatosString ? JSON.parse(candidatosString) : [];
        candidato.senha = btoa(candidato.senha);
        candidatos.push(candidato);
        localStorage.setItem('candidatos', JSON.stringify(candidatos));
        console.log("Olá, estou salvando o candidato!!", candidato);
        alert('Candidato cadastrado!');
        window.location.href = 'login.html';
        return;
    } else {
        alert('Não foi possível cadastrar! Verifique se os dados estão preenchidos corretamente.');
        window.location.href = 'cadastro.html';
        return;

    }

}


function salvarEmpresa(): void {

    const empresa: Empresa = {

         nome:(document.getElementById('nomeEmpresa') as HTMLInputElement).value,
         email:(document.getElementById('emailEmpresa') as HTMLInputElement).value,
         cnpj:(document.getElementById('cnpjEmpresa') as HTMLInputElement).value,
         dataFundacao:(document.getElementById('dataFundacao') as HTMLInputElement).value,
         pais:(document.getElementById('paisEmpresa') as HTMLInputElement).value,
         cep:(document.getElementById('cepEmpresa') as HTMLInputElement).value,
         estado:(document.getElementById('estadoEmpresa') as HTMLInputElement).value,
         descricao:(document.getElementById('descricaoEmpresa') as HTMLInputElement).value,
         competencias:(document.getElementById('competenciasEmpresa') as HTMLInputElement).value,
         senha:(document.getElementById('inputPasswordEmpresa') as HTMLInputElement).value,
         empresaId:gerarIdAleatorio(),

    };


    if(validarDadosEmpresa(empresa)){

        const empresasString = localStorage.getItem('empresas');
        const empresas = empresasString ? JSON.parse(empresasString) : [];
        empresa.senha = btoa(empresa.senha);
        empresas.push(empresa);
        localStorage.setItem('empresas', JSON.stringify(empresas));
        console.log("Olá, estou salvando a empresa!!", empresa);
        alert('Empresa cadastrada!');
        window.location.href = 'login.html';
        return;
    } else {
        alert('Não foi possível cadastrar! Verifique se os dados estão preenchidos corretamente.');
        window.location.href = 'cadastro.html';
        return;

    }

}

function gerarIdAleatorio(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}





document.getElementById('cadastrarCandidato')?.addEventListener('click', salvarCandidato);
document.getElementById('cadastrarEmpresa')?.addEventListener('click', salvarEmpresa);
