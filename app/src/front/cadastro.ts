function toggleFormularios() {
    const radioCandidato = document.getElementById('radioCandidato') as HTMLInputElement;
    const radioEmpresa = document.getElementById('radioEmpresa') as HTMLInputElement;
    const formularioCandidato = document.getElementById('formularioCandidato') as HTMLDivElement;
    const formularioEmpresa = document.getElementById('formularioEmpresa') as HTMLDivElement;
    const divEmpresa = document.getElementById('divEmpresa') as HTMLDivElement
    const divCandidato = document.getElementById('divCandidato') as HTMLDivElement

    divCandidato.style.display = 'block';
    divEmpresa.style.display = 'block';


    if (radioCandidato.checked) {

        divEmpresa.style.display = 'none';
        formularioCandidato.style.display = 'block';
        formularioEmpresa.style.display = 'none';
    } else if (radioEmpresa.checked) {
        divCandidato.style.display = 'none';
        formularioCandidato.style.display = 'none';
        formularioEmpresa.style.display = 'block';
    }
}

// Adiciona os listeners para os radio buttons
document.getElementById('radioCandidato')?.addEventListener('change', toggleFormularios);
document.getElementById('radioEmpresa')?.addEventListener('change', toggleFormularios);

