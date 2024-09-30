document.addEventListener('DOMContentLoaded', function () {
    var _a;
    carregarPerfilCandidato();
    (_a = document.getElementById('vagasAll')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', mostrarVagasAll);
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
        var nomeCandidato = document.getElementById('nomeCandidato');
        if (nomeCandidato) {
            nomeCandidato.innerText = candidato.nome;
        }
        var emailCandidato = document.getElementById('emailCandidato');
        if (emailCandidato) {
            emailCandidato.innerText = candidato.email;
        }
        var cpfCandidato = document.getElementById('cpfCandidato');
        if (cpfCandidato) {
            cpfCandidato.innerText = candidato.cpf;
        }
        var dataNascimentoCandidato = document.getElementById('dataNascimentoCandidato');
        if (dataNascimentoCandidato) {
            dataNascimentoCandidato.innerText = candidato.dataNascimento;
        }
        var paisCandidato = document.getElementById('paisCandidato');
        if (paisCandidato) {
            paisCandidato.innerText = candidato.pais;
        }
        var cepCandidato = document.getElementById('cepCandidato');
        if (cepCandidato) {
            cepCandidato.innerText = candidato.cep;
        }
        var estadoCandidato = document.getElementById('estadoCandidato');
        if (estadoCandidato) {
            estadoCandidato.innerText = candidato.estado;
        }
        var descricaoCandidato = document.getElementById('descricaoCandidato');
        if (descricaoCandidato) {
            descricaoCandidato.innerText = candidato.descricao;
        }
        var competenciasCandidato = document.getElementById('competenciasCandidato');
        if (competenciasCandidato) {
            competenciasCandidato.innerText = candidato.competencias;
        }
    }
    else {
        console.warn('Nenhum candidato encontrado no localStorage.');
    }
}
function mostrarVagasAll() {
    var vagas = JSON.parse(localStorage.getItem('vagas') || '[]');
    var vagasContainer = document.getElementById('mostrarVagasAll');
    var cardTemplate = document.getElementById('cardTemplate');
    vagasContainer.innerHTML = '';
    vagasContainer.style.display = 'block';
    vagas.forEach(function (vaga) {
        var cardClone = cardTemplate.content.cloneNode(true);
        cardClone.querySelector('.card-title').textContent = vaga.nomeVaga;
        cardClone.querySelector('.card-subtitle').textContent = "\u00C1rea de Atua\u00E7\u00E3o: ".concat(vaga.areaAtuacaoVaga);
        cardClone.querySelector('.card-text').textContent = vaga.descricaoVaga;
        cardClone.querySelector('.text-muted').textContent = "Localidade: ".concat(vaga.localidadeVaga);
        vagasContainer.appendChild(cardClone);
    });
}
