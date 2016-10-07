
$(function () {
    function clickMe() {
        var myLinks = $('.linkset a');
        $(myLinks).on('click', function () {
            $(myLinks).removeClass("wha");
            $(this).addClass("wha");
        });
    };

    clickMe();
});


var video = $('#carInteriorVideo')[0];
var videoJ = $('#carInteriorVideo');
videoJ.on('ended', function () {
    $('.fullscreen_bg').empty();
    $('#bgAfter').fadeIn("slow");
});




// PAGE TWO STUFF
// custom speeds
$.fx.speeds.slowest = 5000;

// document.ready
$(function () {

    $('#pageTwoBlock').click(function () {
        $(this).fadeOut($(this).attr("data-speed"), function () {
            $(this).addClass("im_gone").css("visibility", "hidden").show();
            $('#showAgain span').text("Show Again ?");
        });


        $('#showAgain').click(function () {
            $('#pageTwoBlock').removeClass("im_gone").css("visibility", "visible");
            $('#showAgain span').text("hover over the box");
        });



        // calling custom console.log utility function
        $.log.group("This is a group of console.log(s)");
        $.log($('#pageTwoBlock').html());
        $.log($('#pageTwoBlock').attr("data-speed"));
    });

});




// PARTICLES STUFF
particlesJS.load('particles-js', '/Public/js/particles/particles.json', function() {
    console.log('callack - particles.js config loaded');
});