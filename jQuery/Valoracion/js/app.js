var starAcum = 0;
var cantVots = 0;

$(document).ready(function () {
    
    // Manejador de votos.
    $("#star1").click(function () {
        starAcum += 1;
        cantVots++;
        resultPrint(starAcum, cantVots);
    });

    $("#star2").click(function () {
        starAcum += 2;
        cantVots++;
        resultPrint(starAcum, cantVots);
    });

    $("#star3").click(function () {
        starAcum += 3;
        cantVots++;
        resultPrint(starAcum, cantVots);
    });

    $("#star4").click(function () {
        starAcum += 4;
        cantVots++;
        resultPrint(starAcum, cantVots);
    });

    $("#star5").click(function () {
        starAcum += 5;
        cantVots++;
        resultPrint(starAcum, cantVots);
    });


});