var _a;
import ApexCharts from 'apexcharts';
document.addEventListener('DOMContentLoaded', function () {
    var _a, _b;
    carregarPerfilEmpresa();
    (_a = document.getElementById('candidatosAll')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', mostrarCandidatosAll);
    (_b = document.getElementById('mostrarGraficoLink')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', mostrarGraficoCompetencias);
});
function carregarPerfilEmpresa() {
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
    }
    else {
        console.warn('Nenhum empresa encontrado no localStorage.');
    }
}
function mostrarPerfilCompletoEmpresa() {
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
    }
    else {
        console.warn('Nenhum empresa encontrado no localStorage.');
    }
}
function salvarVaga() {
    const nomeVaga = document.getElementById('nomeVaga').value;
    const descricaoVaga = document.getElementById('descricaoVaga').value;
    const areaAtuacaoVaga = document.getElementById('areaAtuacaoVaga').value;
    const competenciasVaga = document.getElementById('competenciasVaga').value;
    const jornadaVaga = document.getElementById('jornadaVaga').value;
    const localidadeVaga = document.getElementById('localidadeVaga').value;
    const salarioVaga = document.getElementById('salarioVaga').value;
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
function mostrarCandidatosAll() {
    let candidatos = JSON.parse(localStorage.getItem('candidatos') || '[]');
    let candidatosContainer = document.getElementById('mostrarCandidatosAll');
    const cardEmpresaTemplate = document.getElementById('cardEmpresaTemplate');
    candidatosContainer.innerHTML = '';
    candidatosContainer.style.display = 'block';
    candidatos.forEach(candidato => {
        let cardClone = cardEmpresaTemplate.content.cloneNode(true);
        cardClone.querySelector('.card-title').textContent = `Formação: ${candidato.formacao}`;
        cardClone.querySelector('.card-subtitle').textContent = `Competências: ${candidato.competencias}`;
        cardClone.querySelector('.card-text').textContent = `Descrição: ${candidato.descricao}`;
        candidatosContainer.appendChild(cardClone);
    });
}
async function mostrarGraficoCompetencias(event) {
    // Previne a ação padrão do evento, caso necessário
    event.preventDefault();
    // Obtém os candidatos do localStorage
    const candidatosString = localStorage.getItem('candidatos');
    const candidatos = candidatosString ? JSON.parse(candidatosString) : [];
    // Conta as competências
    const competenciasCount = {};
    candidatos.forEach((candidato) => {
        const competencias = candidato.competencias.split(','); // Supondo que as competências sejam uma string separada por vírgulas
        competencias.forEach((competencia) => {
            const trimmedCompetencia = competencia.trim();
            if (competenciasCount[trimmedCompetencia]) {
                competenciasCount[trimmedCompetencia]++;
            }
            else {
                competenciasCount[trimmedCompetencia] = 1;
            }
        });
    });
    // Prepara os dados para o gráfico
    const labels = Object.keys(competenciasCount);
    const data = Object.values(competenciasCount);
    // Configuração do gráfico
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
    // Verifica se o elemento existe antes de criar o gráfico
    if (graficoElement) {
        const chart = new ApexCharts(graficoElement, options);
        await chart.render();
    }
    else {
        console.error("Elemento 'graficoCompetencias' não encontrado.");
    }
}
document.getElementById('criarVagaLink').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('cadastroVaga').style.display = 'block';
});
(_a = document.getElementById('cadastrarVaga')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', salvarVaga);
