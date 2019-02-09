
function resultPrint(starAcum, cantVots) {
    console.log(starAcum, cantVots)

    const prom = starAcum / cantVots;
    console.log(prom);

    if (prom == 0 && prom <= 0.5) {
        $('#resultados').replaceWith(`
        <img src="./resources/em_b.png" alt="Media Estrella">
       `);
    } else if (prom > 0.5 && prom < 1) {

        $('#resultados').replaceWith(`
            <img src="./resources/ec_b.png" alt="Estrella completa">
            `);
        if (prom == 1 && prom < 1.5) {
            $('#resultados').replaceWith(`
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/em_b.png" alt="Media Estrella">
                `
            );
        }

    } else if (prom > 1.5 && prom <= 2) {
        $('#resultados').replaceWith(`
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/em_b.png" alt="Media Estrella">
            `
        );
    } else if (prom == 2 && prom <= 2.5) {
        $('#resultados').replaceWith(`
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">   
            `
        );
    } else if (prom > 2.5 && prom < 3) {
        $('#resultados').replaceWith(`
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/em_b.png" alt="Media Estrella">   
            `
        );
    } else if (prom == 3 && prom <= 3.5) {
        $('#resultados').replaceWith(`
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
            `
        );
    } else if (prom > 3.5 && prom < 4) {
        $('#resultados').replaceWith(`
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/em_b.png" alt="Media Estrella">
            `
        );
    } else if (prom == 4 && prom <= 4.5) {
        $('#resultados').replaceWith(`
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
            `
        );
    } else if (prom > 4.5 && prom < 5) {
        $('#resultados').replaceWith(`
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/em_b.png" alt="Media Estrella">
            `
        );
    } else if (prom == 5) {
        $('#resultados').replaceWith(`
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
                <img src="./resources/ec_b.png" alt="Estrella completa">
            `
        );
    }
}
