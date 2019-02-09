
function resultPrint(starAcum, cantVots) {
    console.log(starAcum, cantVots)

    const prom = starAcum / cantVots;
    console.log(prom);

    if (prom > 0 && prom <= 0.5) {
        $('#resultados').append(`
        <img src="./resources/em_b.png" alt="Estrella completa">
       `);
    }
    if (prom > 0.5 && prom <= 1) {
        $('#resultados').append(`
        <img src="./resources/ec_b.png" alt="Estrella completa">
       `);
    }
}
