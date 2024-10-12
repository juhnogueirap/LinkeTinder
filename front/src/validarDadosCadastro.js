function validarNome(nome) {
    const regexNome = /^[a-zA-ZÀ-ÿ'~^\s]+$/gm;
    return regexNome.test(nome) && nome.length >= 1 && nome.length <= 100;
}
function validarEmail(email) {
    const regexEmail = /^[a-z0-9]+([._-]+[a-z0-9]+)*@[a-z0-9]+(\.[a-z]{2,})+$/i;
    return regexEmail.test(email) && email.length >= 5 && email.length <= 254;
}
function validarCpf(cpf) {
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regexCpf.test(cpf);
}
function validarCnpj(cnpj) {
    const regexCpf = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    return regexCpf.test(cnpj);
}
function validarIdade() {
    const dataInput = document.getElementById('dataNascimento');
    if (dataInput && dataInput.value) {
        const dataNascimento = new Date(dataInput.value);
        const hoje = new Date();
        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mes = hoje.getMonth() - dataNascimento.getMonth();
        const dia = hoje.getDate() - dataNascimento.getDate();
        if (mes < 0 || (mes === 0 && dia < 0)) {
            idade--;
        }
        if (idade < 16 || idade > 100) {
            dataInput.style.borderColor = 'red';
            return false;
        }
        else {
            dataInput.style.borderColor = 'green';
            return true;
        }
    }
    return false;
}
function validarPais(pais) {
    const regexCpf = /^[a-zA-ZÀ-ÿ'~^\s]+$/gm;
    return regexCpf.test(pais);
}
function validarCep(cep) {
    const regexCep = /^\d{5}-\d{3}$/;
    return regexCep.test(cep);
}
function validarEstado(estado) {
    const regexEstado = /^[A-Z]{2}$/gm;
    return regexEstado.test(estado);
}
function validarDescricao(descricao) {
    const regexDescricao = /^[A-Za-zÀ-ÖØ-öø-ÿ\s.,;:!?()'-]{0,500}$/gm;
    return regexDescricao.test(descricao);
}
function validarCompetencias(competencias) {
    const regexCompetencias = /^\s*[\w+#/.-]+\s*(,\s*[\w+#/.-]+\s*)*$/gm;
    return regexCompetencias.test(competencias);
}
function validarFormacao(formacao) {
    const regexFormacao = /^[A-Za-zÀ-ÖØ-öø-ÿ\s.,;:!?()'-]{0,100}$/gm;
    return regexFormacao.test(formacao);
}
function validarSenha(senha) {
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{4,8}$/;
    return regexSenha.test(senha) && senha.length >= 4 && senha.length <= 8;
}
export function validarDadosCandidato(candidato) {
    let isValid = true;
    const validadores = {
        nome: validarNome,
        email: validarEmail,
        cpf: validarCpf,
        dataNascimento: validarIdade,
        pais: validarPais,
        cep: validarCep,
        estado: validarEstado,
        descricao: validarDescricao,
        competencias: validarCompetencias,
        formacao: validarFormacao,
        senha: validarSenha
    };
    for (const chave in validadores) {
        const validador = validadores[chave];
        if (validador) {
            // Obtém o valor correspondente do candidato
            const valor = candidato[chave];
            // Executa a função de validação para este campo
            const isFieldValid = validador(valor);
            console.log("isFieldValid = ", isFieldValid);
            if (!isFieldValid) {
                isValid = false;
                console.log(`Campo ${chave} é inválido`);
                return isValid;
            }
        }
    }
    return isValid;
}
export function validarDadosEmpresa(empresa) {
    let isValid = true;
    const validadores = {
        nome: validarNome,
        email: validarEmail,
        cnpj: validarCnpj,
        pais: validarPais,
        cep: validarCep,
        estado: validarEstado,
        descricao: validarDescricao,
        competencias: validarCompetencias,
        senha: validarSenha
    };
    for (const chave in validadores) {
        const validador = validadores[chave];
        if (validador) {
            // Obtém o valor correspondente do candidato
            const valor = empresa[chave];
            // Executa a função de validação para este campo
            const isFieldValid = validador(valor);
            if (!isFieldValid) {
                isValid = false;
                console.log(`Campo ${chave} é inválido`);
                return isValid;
            }
        }
    }
    return isValid;
}
