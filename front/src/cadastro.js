"use strict";
var _a, _b;
function toggleFormularios() {
    const radioCandidato = document.getElementById('radioCandidato');
    const radioEmpresa = document.getElementById('radioEmpresa');
    const formularioCandidato = document.getElementById('formularioCandidato');
    const formularioEmpresa = document.getElementById('formularioEmpresa');
    const divEmpresa = document.getElementById('divEmpresa');
    const divCandidato = document.getElementById('divCandidato');
    divCandidato.style.display = 'block';
    divEmpresa.style.display = 'block';
    if (radioCandidato.checked) {
        divEmpresa.style.display = 'none';
        formularioCandidato.style.display = 'block';
        formularioEmpresa.style.display = 'none';
    }
    else if (radioEmpresa.checked) {
        divCandidato.style.display = 'none';
        formularioCandidato.style.display = 'none';
        formularioEmpresa.style.display = 'block';
    }
}
// Adiciona os listeners para os radio buttons
(_a = document.getElementById('radioCandidato')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', toggleFormularios);
(_b = document.getElementById('radioEmpresa')) === null || _b === void 0 ? void 0 : _b.addEventListener('change', toggleFormularios);
