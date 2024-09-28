document.addEventListener('DOMContentLoaded', function() {
    carregarPerfilCandidato();
});

function carregarPerfilCandidato(): void {

    const candidatoString = localStorage.getItem('candidato');

    if (candidatoString) {
        const candidato = JSON.parse(candidatoString);

        const nomeCandidato = document.getElementById('nomeCandidato');
        if (nomeCandidato) {
            nomeCandidato.innerText = candidato.nome;
        }

        const descricaoCandidato = document.getElementById('descricaoCandidato');
        if (descricaoCandidato) {
            descricaoCandidato.innerText = candidato.descricao;
        }

    } else {
        console.warn('Nenhum candidato encontrado no localStorage.');
    }
}

function mostrarPerfilCompletoCandidato(): void {
    const candidatoString = localStorage.getItem('candidato');

    if (candidatoString) {
        const candidato = JSON.parse(candidatoString);

        const nomeElem = document.getElementById('nomeCandidato');
        if (nomeElem) {
            nomeElem.innerText = candidato.nome;
        }

        const emailElem = document.getElementById('emailCandidato');
        if (emailElem) {
            emailElem.innerText = candidato.email;
        }

        const cpfElem = document.getElementById('cpfCandidato');
        if (cpfElem) {
            cpfElem.innerText = candidato.cpf;
        }

        const dataNascimentoElem = document.getElementById('dataNascimentoCandidato');
        if (dataNascimentoElem) {
            dataNascimentoElem.innerText = candidato.dataNascimento;
        }

        const paisElem = document.getElementById('paisCandidato');
        if (paisElem) {
            paisElem.innerText = candidato.pais;
        }

        const cepElem = document.getElementById('cepCandidato');
        if (cepElem) {
            cepElem.innerText = candidato.cep;
        }

        const estadoElem = document.getElementById('estadoCandidato');
        if (estadoElem) {
            estadoElem.innerText = candidato.estado;
        }

        const descricaoElem = document.getElementById('descricaoCandidato');
        if (descricaoElem) {
            descricaoElem.innerText = candidato.descricao;
        }

        const competenciasElem = document.getElementById('competenciasCandidato');
        if (competenciasElem) {
            competenciasElem.innerText = candidato.competencias;
        }
    } else {
        console.warn('Nenhum candidato encontrado no localStorage.');
    }
}





