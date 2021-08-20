$(document).ready(function() {

    $(".ti").mouseenter(
        function() {
            $(this).animate({ 'font-size': '140px' }, 500);
        });
    $(".ti").mouseleave(
        function() {
            $(this).animate({ 'font-size': '120px' }, 300);
        });



    $(window).scroll(function() {

        var height = $(window).height();
        var scroll_position = $(window).scrollTop();
        var object_position_top = scroll_position + 393

        if (object_position_top >= height - 100) {
            object_position_top = height - 100;
        }
        $('.initialPoint').css({
            'top': object_position_top
        });
    });

    ini();
});

function ini() {

    $(".ti1").show(900);
    $(".titleInitial").animate({
        "margin-left": "30%",
    }, 1500, function() {

    });

    $(".ti2").show(1600);
    $(".ti3").show(1700);
    $(".ti4").show(1800);
    $(".ti5").show(1900);
    $(".ti6").show(2000);
    $(".ti7").show(2100);
    $(".ti8").show(3000);

    interval = setInterval(showOptions, 3000);
}

var interval

function showOptions() {
    $(".bodyPage").show(500);
    $(".initialPoint").show(500);
    $(".socialButtons").show(500);

    clearInterval(interval);
}