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
function salvarVaga(): void{

    const nomeVaga = (document.getElementById('nomeVaga') as HTMLInputElement).value;


    const descricaoVaga = (document.getElementById('descricaoVaga') as HTMLInputElement).value;
    const areaAtuacaoVaga = (document.getElementById('areaAtuacaoVaga') as HTMLInputElement).value;
    const competenciasVaga = (document.getElementById('competenciasVaga') as HTMLInputElement).value;
    const jornadaVaga = (document.getElementById('jornadaVaga') as HTMLInputElement).value;
    const localidadeVaga = (document.getElementById('localidadeVaga') as HTMLInputElement).value;
    const salarioVaga = (document.getElementById('salarioVaga') as HTMLInputElement).value;
    const vaga = {

        nomeVaga,
        descricaoVaga,
        areaAtuacaoVaga,
        competenciasVaga,
        jornadaVaga,
        localidadeVaga,
        salarioVaga
    };

    let vagas = JSON.parse(localStorage.getItem('vagas') || '[]');
    vagas.push(vaga);
    localStorage.setItem('vagas', JSON.stringify(vagas));

    alert('Vaga cadastrada!');
    window.location.href = 'perfilEmpresa.html';
}

document.getElementById('criarVagaLink')!.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('cadastroVaga')!.style.display = 'block';
});

document.getElementById('cadastrarVaga')?.addEventListener('click', salvarVaga);