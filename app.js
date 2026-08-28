function sortear() {
    let quantidade = Number(document.getElementById("quantidade").value);
    let de = Number(document.getElementById("de").value);
    let ate = Number(document.getElementById("ate").value);

    if (quantidade <= 0 || de > ate) {
        alert("Preencha os valores corretamente.");
        return;
    }

    let numeros = [];

    for (let i = 0; i < quantidade; i++) {
        numeros.push(Math.floor(Math.random() * (ate - de + 1)) + de);
    }

    document.getElementById("resultado").innerHTML = numeros.join(", ");
    document.getElementById("btn-reiniciar").disabled = false;
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("btn-reiniciar").disabled = true;
}