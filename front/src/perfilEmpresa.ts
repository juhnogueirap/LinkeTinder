let grafico: Chart | undefined;

document.addEventListener('DOMContentLoaded', function() {
    carregarPerfilEmpresa();
    document.getElementById('candidatosAll')?.addEventListener('click', mostrarCandidatosAll);
    document.getElementById('mostrarGraficoLink')?.addEventListener('click', mostrarGraficoCompetencias );
    document.getElementById('criarVagaLink')!.addEventListener('click', mostrarFormularioVagas);
    document.getElementById('cadastrarVaga')?.addEventListener('click', salvarVaga);


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

function mostrarFormularioVagas() {

    esconderDisplays('cadastroVaga')
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

    esconderDisplays('mostrarCandidatosAll');
    document.getElementById('mostrarCandidatosAll')!.style.display = 'block';
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

function mostrarGraficoCompetencias(): void{

    esconderDisplays('canvasGrafico');
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

    const ctx  = document.getElementById('graficoCompetencias') as HTMLCanvasElement;
    if(grafico){
        grafico.destroy();
    }

    if(ctx) {
        // @ts-ignore
        grafico = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            }

        });
        grafico.render();

    } else {
        console.log('Ops, erro no gráfico!');
    }

}

function esconderDisplays(idElementoExibido: any) {

    const elementos = document.querySelectorAll('.elemento');
    elementos.forEach(elemento => {
        // @ts-ignore
        if(elemento.id === idElementoExibido) {
            // @ts-ignore
            elemento.style.display = 'block';
        } else {
            // @ts-ignore
            elemento.style.display = 'none';
        }
    })


}

/*function mostrarPerfilCompletoEmpresa(): void {

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
}*/
