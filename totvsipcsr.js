$(document).ready(function() {

    $(".ti").mouseenter(
        function() {
            $(this).animate({ 'font-size': '123px' }, 500);
        });
    $(".ti").mouseleave(
        function() {
            $(this).animate({ 'font-size': '120px' }, 300);
        });



    $(window).scroll(function() {

        var height = $(window).height();
        var scroll_position = $(window).scrollTop();
        var object_position_top = scroll_position + 450

        if (object_position_top >= height - 100) {
            object_position_top = height - 100;
        }
        if (object_position_top >= 500) {
            $(".Initialblur").show(200);
        } else {
            $(".Initialblur").hide(200);
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
        "margin-left": "22%",
    }, 900, function() {
        $(".ti2").show();
        $(".ti2").animate({
            "margin-left": "0px",
        }, 200, function() {
            $(".ti3").show();
            $(".ti3").animate({
                "margin-left": "0px",
            }, 200, function() {
                $(".ti4").show();
                $(".ti4").animate({
                    "margin-left": "0px",
                }, 200, function() {
                    $(".ti5").show();
                    $(".ti5").animate({
                        "margin-left": "0px",
                    }, 200, function() {
                        $(".ti6").show();
                        $(".ti6").animate({
                            "margin-left": "0px",
                        }, 200, function() {
                            $(".ti7").show();
                            $(".ti7").animate({
                                "margin-left": "0px",
                            }, 200, function() {
                                $(".ti8").show(800, function() {
                                    $(".ti8").css("display", "block");
                                    $(".waterMark").show(100, function() {
                                        $(".waterMark2").show(150, function() {
                                            interval = setInterval(showOptions, 150);
                                        });
                                    });

                                });
                            });
                        });
                    });
                });
            });
        });
    });


}

var interval

function showOptions() {
    $(".ti8").animate({
        "display": "block",
    }, 200, function() {

    });
    $(".bodyPage").show(500);
    $(".initialPoint").show(500);
    $(".socialButtons").show(500);

    clearInterval(interval);
}