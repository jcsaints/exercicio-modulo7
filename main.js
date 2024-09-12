const form = document.getElementById('formNumber');
const valorA = document.getElementById('campoA');
const valorB = document.getElementById('campoB');
const sucesso = document.querySelector('.success');
const erro = document.querySelector('.error');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorCampoA = Number(valorA.value);
    const valorCampoB = Number(valorB.value);

    const mensagemSucesso = `VALIDO: o ${valorCampoB} é maior que ${valorCampoA}`;
    const mensagemErro = `INVALIDO: o ${valorCampoB} é menor que ${valorCampoA}`;

    if (valorCampoA > valorCampoB) {
        erro.innerHTML = mensagemErro;
        erro.style.display = 'block';
        sucesso.style.display = 'none';
    } else {
        sucesso.innerHTML = mensagemSucesso;
        sucesso.style.display = 'block';
        erro.style.display = 'none';
    }
});

// Adiciona o evento focus aos campos de entrada
valorA.addEventListener('focus', function() {
    valorA.value = '';
    sucesso.style.display = 'none';
    erro.style.display = 'none';
});

valorB.addEventListener('focus', function() {
    valorB.value = '';
    sucesso.style.display = 'none';
    erro.style.display = 'none';
});
