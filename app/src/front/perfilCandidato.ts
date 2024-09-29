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
    } else {
        console.warn('Nenhum candidato encontrado no localStorage.');
    }
}

function mostrarVagasAll(){


}





