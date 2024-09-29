document.addEventListener('DOMContentLoaded', function() {
    carregarPerfilEmpresa();
});

function carregarPerfilEmpresa(): void {

    const empresaString = localStorage.getItem('empresa');

    if (empresaString) {
        const empresa = JSON.parse(empresaString);

        const nomeEmpresa = document.getElementById('nomeEmpresa');
        if (nomeEmpresa) {
            nomeEmpresa.innerText = empresa.nome;
        }

        const descricaoEmpresa = document.getElementById('descricaoEmpresa');
        if (descricaoEmpresa) {
            descricaoEmpresa.innerText = empresa.descricao;
        }

    } else {
        console.warn('Nenhum empresa encontrado no localStorage.');
    }
}

function mostrarPerfilCompletoEmpresa(): void {
    const empresaString = localStorage.getItem('empresa');

    if (empresaString) {
        const empresa = JSON.parse(empresaString);

        const nomeEmpresa = document.getElementById('nomeEmpresa');
        if (nomeEmpresa) {
            nomeEmpresa.innerText = empresa.nome;
        }

        const emailEmpresa = document.getElementById('emailEmpresa');
        if (emailEmpresa) {
            emailEmpresa.innerText = empresa.email;
        }

        const cnpjEmpresa = document.getElementById('cnpjEmpresa');
        if (cnpjEmpresa) {
            cnpjEmpresa.innerText = empresa.cpf;
        }

        const dataFundEmpresa = document.getElementById('dataFundacao');
        if (dataFundEmpresa) {
            dataFundEmpresa.innerText = empresa.dataNascimento;
        }

        const paisEmpresa = document.getElementById('paisEmpresa');
        if (paisEmpresa) {
            paisEmpresa.innerText = empresa.pais;
        }

        const cepEmpresa = document.getElementById('cepEmpresa');
        if (cepEmpresa) {
            cepEmpresa.innerText = empresa.cep;
        }

        const estadoEmpresa = document.getElementById('estadoEmpresa');
        if (estadoEmpresa) {
            estadoEmpresa.innerText = empresa.estado;
        }

        const descricaoEmpresa = document.getElementById('descricaoEmpresa');
        if (descricaoEmpresa) {
            descricaoEmpresa.innerText = empresa.descricao;
        }

        const competenciasEmpresa = document.getElementById('competenciasEmpresa');
        if (competenciasEmpresa) {
            competenciasEmpresa.innerText = empresa.competencias;
        }
    } else {
        console.warn('Nenhum empresa encontrado no localStorage.');
    }
}




