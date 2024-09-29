var _a, _b;
function salvarCandidato() {
    var nome = document.getElementById('nomeCandidato').value;
    var email = document.getElementById('emailCandidato').value;
    var cpf = document.getElementById('cpfCandidato').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var pais = document.getElementById('paisCandidato').value;
    var cep = document.getElementById('cepCandidato').value;
    var estado = document.getElementById('estadoCandidato').value;
    var descricao = document.getElementById('descricaoCandidato').value;
    var competencias = document.getElementById('competenciasCandidato').value;
    var senha = document.getElementById('inputPasswordCandidato').value;
    var senhaHash = btoa(senha);
    var candidatoId = gerarIdAleatorio();
    var candidato = {
        nome: nome,
        email: email,
        cpf: cpf,
        dataNascimento: dataNascimento,
        pais: pais,
        cep: cep,
        estado: estado,
        descricao: descricao,
        competencias: competencias,
        candidatoId: candidatoId,
        senha: senhaHash
    };
    localStorage.setItem('candidato', JSON.stringify(candidato));
    alert('Candidato cadastrado!');
    //agora preciso encaminhar para a tela de login
}
function salvarEmpresa() {
    var nome = document.getElementById('nomeEmpresa').value;
    var email = document.getElementById('emailEmpresa').value;
    var cnpj = document.getElementById('cnpjEmpresa').value;
    var dataFundacao = document.getElementById('dataFundacao').value;
    var pais = document.getElementById('paisEmpresa').value;
    var cep = document.getElementById('cepEmpresa').value;
    var estado = document.getElementById('estadoEmpresa').value;
    var descricao = document.getElementById('descricaoEmpresa').value;
    var competencias = document.getElementById('competenciasEmpresa').value;
    var senha = document.getElementById('inputPasswordEmpresa').value;
    var senhaHash = btoa(senha);
    var empresaId = gerarIdAleatorio();
    var empresa = {
        nome: nome,
        email: email,
        cnpj: cnpj,
        dataFundacao: dataFundacao,
        pais: pais,
        cep: cep,
        estado: estado,
        descricao: descricao,
        competencias: competencias,
        empresaId: empresaId,
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
