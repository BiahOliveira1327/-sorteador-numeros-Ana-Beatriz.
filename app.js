function sortear() {
    const campoQuantidade = document.getElementById('quantidade');
    const campoInicio = document.getElementById('de');
    const campoFim = document.getElementById('ate');

    const quantidadeTexto = campoQuantidade.value;
    const inicioTexto = campoInicio.value;
    const fimTexto = campoFim.value;

    if (quantidadeTexto === '' || inicioTexto === '' || fimTexto === '') {
        alert('Preencha todos os campos.');
        return;
    }

    const quantidade = Number(quantidadeTexto);
    const inicio = Number(inicioTexto);
    const fim = Number(fimTexto);

    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        alert('A quantidade deve ser um número inteiro maior que zero.');
        return;
    }

    if (!Number.isInteger(inicio) || !Number.isInteger(fim) || inicio < 1 || fim < 1) {
        alert('O início e o fim devem ser números inteiros maiores que zero.');
        return;
    }

    if (inicio > fim) {
        alert('O valor inicial não pode ser maior que o valor final.');
        return;
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

    let btnReiniciar = document.getElementById('btn-reiniciar');
    btnReiniciar.classList.remove('container__botao');
    btnReiniciar.classList.add('container__botao-desabilitado');
    btnReiniciar.disabled = true;

    let btnSortear = document.getElementById('btn-sortear');
    btnSortear.classList.remove('container__botao-desabilitado');
    btnSortear.classList.add('container__botao');
    btnSortear.disabled = false;
}
