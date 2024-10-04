import ApexCharts from 'apexcharts';

document.addEventListener('DOMContentLoaded', function() {
    carregarPerfilEmpresa();
    document.getElementById('candidatosAll')?.addEventListener('click', mostrarCandidatosAll);
    document.getElementById('mostrarGraficoLink')?.addEventListener('click', mostrarGraficoCompetencias );

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

function mostrarCandidatosAll(){

    let candidatos: any[] = JSON.parse(localStorage.getItem('candidatos') || '[]');
    let candidatosContainer = document.getElementById('mostrarCandidatosAll') as HTMLElement;
    const cardEmpresaTemplate = document.getElementById('cardEmpresaTemplate') as HTMLTemplateElement;

    candidatosContainer.innerHTML = '';
    candidatosContainer.style.display = 'block';


    candidatos.forEach(candidato => {
        let cardClone = cardEmpresaTemplate.content.cloneNode(true) as HTMLElement;

        (cardClone.querySelector('.card-title') as HTMLElement).textContent = `Formação: ${candidato.formacao}`;
        (cardClone.querySelector('.card-subtitle') as HTMLElement).textContent = `Competências: ${candidato.competencias}`;
        (cardClone.querySelector('.card-text') as HTMLElement).textContent = `Descrição: ${candidato.descricao}`;

        candidatosContainer.appendChild(cardClone);
    });
}

async function mostrarGraficoCompetencias(event: MouseEvent): Promise<void> {
    event.preventDefault();
    const candidatosString = localStorage.getItem('candidatos');
    const candidatos = candidatosString ? JSON.parse(candidatosString) : [];
    const competenciasCount: { [key: string]: number } = {};

    candidatos.forEach((candidato: any) => {
        const competencias = candidato.competencias.split(',');
        competencias.forEach((competencia: string) => {
            const trimmedCompetencia = competencia.trim();
            if (competenciasCount[trimmedCompetencia]) {
                competenciasCount[trimmedCompetencia]++;
            } else {
                competenciasCount[trimmedCompetencia] = 1;
            }
        });
    });

    const labels = Object.keys(competenciasCount);
    const data = Object.values(competenciasCount);

    const options = {
        chart: {
            type: 'bar',
            height: 350,
        },
        series: [{
            name: 'Número de Candidatos',
            data: data
        }],
        xaxis: {
            categories: labels,
        },
        title: {
            text: 'Distribuição de Competências dos Candidatos',
            align: 'center',
        }
    };

    const graficoElement = document.getElementById('graficoCompetencias');

    if (graficoElement) {
        const chart = new ApexCharts(graficoElement, options);
        await chart.render();
    } else {
        console.error("Elemento 'graficoCompetencias' não encontrado.");
    }

}

document.getElementById('criarVagaLink')!.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('cadastroVaga')!.style.display = 'block';
});

document.getElementById('cadastrarVaga')?.addEventListener('click', salvarVaga);