$(document).ready(function () {

    $('#star1').hover(function () {
            // over
            $('#star1').addClass('starOpacity');
        }, function () {
            // out
            $('#star1').removeClass('starOpacity');
        }
    );
    
    $('#star2').hover(function () {
            // over
            $('#star1').addClass('starOpacity');
            $('#star2').addClass('starOpacity');
        }, function () {
            // out
            $('#star1').removeClass('starOpacity');
            $('#star2').removeClass('starOpacity');
        }
    );
    $('#star3').hover(function () {
            // over
            $('#star1').addClass('starOpacity');
            $('#star2').addClass('starOpacity');
            $('#star3').addClass('starOpacity');
        }, function () {
            // out
            $('#star1').removeClass('starOpacity');
            $('#star2').removeClass('starOpacity');
            $('#star3').removeClass('starOpacity');
        }
    );

    $('#star4').hover(function () {
            // over
            $('#star1').addClass('starOpacity');
            $('#star2').addClass('starOpacity');
            $('#star3').addClass('starOpacity');
            $('#star4').addClass('starOpacity');
        }, function () {
            // out
            $('#star1').removeClass('starOpacity');
            $('#star2').removeClass('starOpacity');
            $('#star3').removeClass('starOpacity');
            $('#star4').removeClass('starOpacity');
        }
    );

    $('#star5').hover(function () {
        // over
        $('#star1').addClass('starOpacity');
        $('#star2').addClass('starOpacity');
        $('#star3').addClass('starOpacity');
        $('#star4').addClass('starOpacity');
        $('#star5').addClass('starOpacity');
    }, function () {
        // out
        $('#star1').removeClass('starOpacity');
        $('#star2').removeClass('starOpacity');
        $('#star3').removeClass('starOpacity');
        $('#star4').removeClass('starOpacity');
        $('#star5').removeClass('starOpacity');
    }
);

});