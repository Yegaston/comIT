$(document).ready(function () {
    // Iniciamos el dom con los datos requeridos.
    $('#txt1').text("Cambiame a verde.") //text for button id btn1
    $('#txt2').text("Cambiame a rojo.") //text for button id btn2
    $('#txt3').text("Cambiame a verde.") //text for button id btn3
    $('#txt4').text("Cambiar el fondo a negro") //text for button id btn4

    // $('#btn1').removeClass('bg-green')
    // $('#btn2').removeClass('bg-red')
    // $('#btn3').removeClass('bg-blue')
    // $('#btn4').removeClass('bg-gray')



    $('#btn1').on('click', function () {
        if ($('#btn1').hasClass('bg-red')) {
            console.log("??")
            $('#btn1').removeClass('bg-red');
            $('#btn1').addClass('bg-green');
            $('#txt1').text("Cambiame a verde.")
        } else {
            console.log("ndeah")
            $('#btn1').removeClass('bg-green');
            $('#btn1').addClass('bg-red');
            $('#txt1').text("Cambiame a rojo.")
        }
    });
    $('#btn2').on('click', function () {
        if ($('#btn2').hasClass('bg-yellow')) {
            console.log("??")
            $('#btn2').removeClass('bg-yellow');
            $('#btn2').addClass('bg-red');
            $('#txt2').text("Cambiame a rojo.")
        } else {
            console.log("ndeah")
            $('#btn2').removeClass('bg-red');
            $('#btn2').addClass('bg-yellow');
            $('#txt2').text("Cambiame a amarillo.")
        }
    });
    $('#btn3').on('click', function () {
        if ($('#btn3').hasClass('bg-green')) {
            console.log("??")
            $('#btn3').removeClass('bg-green');
            $('#btn3').addClass('bg-blue');
            $('#txt3').text("Cambiame a azul.")
        } else {
            console.log("ndeah")
            $('#btn3').removeClass('bg-blue');
            $('#btn3').addClass('bg-green');
            $('#txt3').text("Cambiame a verde.")
        }
    });

    $('#btn4').on('click', function () {
        if ($('body').hasClass('bg-gray')) {
            console.log("??")
            $('body').removeClass('bg-gray');
            $('#txt4').text("Cambiame a gris")
        } else {
            console.log("ndeah")
            $('body').addClass('bg-gray');
            $('#txt4').text("Cambiame a blanco")
        }
    });

});