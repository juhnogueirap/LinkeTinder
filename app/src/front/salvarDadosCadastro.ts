function salvarCandidato(): void {
    const nome = (document.getElementById('nomeCandidato') as HTMLInputElement).value;
    const email = (document.getElementById('emailCandidato') as HTMLInputElement).value;
    const cpf = (document.getElementById('cpfCandidato') as HTMLInputElement).value;
    const dataNascimento = (document.getElementById('dataNascimento') as HTMLInputElement).value;
    const pais = (document.getElementById('paisCandidato') as HTMLInputElement).value;
    const cep = (document.getElementById('cepCandidato') as HTMLInputElement).value;
    const estado = (document.getElementById('estadoCandidato') as HTMLInputElement).value;
    const descricao = (document.getElementById('descricaoCandidato') as HTMLInputElement).value;
    const competencias = (document.getElementById('competenciasCandidato') as HTMLInputElement).value;
    const formacao = (document.getElementById('formacaoCandidato') as HTMLInputElement).value;
    const senha = (document.getElementById('inputPasswordCandidato') as HTMLInputElement).value;
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


function salvarEmpresa(): void {
    const nome = (document.getElementById('nomeEmpresa') as HTMLInputElement).value;
    const email = (document.getElementById('emailEmpresa') as HTMLInputElement).value;
    const cnpj = (document.getElementById('cnpjEmpresa') as HTMLInputElement).value;
    const dataFundacao = (document.getElementById('dataFundacao') as HTMLInputElement).value;
    const pais = (document.getElementById('paisEmpresa') as HTMLInputElement).value;
    const cep = (document.getElementById('cepEmpresa') as HTMLInputElement).value;
    const estado = (document.getElementById('estadoEmpresa') as HTMLInputElement).value;
    const descricao = (document.getElementById('descricaoEmpresa') as HTMLInputElement).value;
    const competencias = (document.getElementById('competenciasEmpresa') as HTMLInputElement).value;
    const senha = (document.getElementById('inputPasswordEmpresa') as HTMLInputElement).value;
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

function gerarIdAleatorio(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}



document.getElementById('cadastrarCandidato')?.addEventListener('click', salvarCandidato);
document.getElementById('cadastrarEmpresa')?.addEventListener('click', salvarEmpresa);
