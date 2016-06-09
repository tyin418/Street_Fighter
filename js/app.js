/*everything is loaded on page load (inside the document ready)*/
$(document).ready(function () {


    /*on page load —> display the default state --> show ryu-still (and hide everything else)*/
    $('.ryu-action').hide(); //(this line means hide all 4 divs)
    /* is replacing ...
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();
    */
    $('.ryu-still').show();




    /*on mouse over
                —> mouseenter—> display ryu-ready (and hide everything else)*/
    $('.ryu').mouseenter(function () {
        $('.ryu-action').hide();
        $('.how-to').hide(); //(this line means hide all 4 divs)
        $('.ryu-ready').show();
    })

    /*    —> mouseleave —> display the default state --> ryu-still (and hide everything else)*/
    .mouseleave(function () {
        $('.ryu-action').hide(); //(this line means hide all 4 divs)
        $('.ryu-still').show();
        $('.how-to').show();
    })




    /*on click
            —> mousedown —> display ryu-throwing (and hide everything else)*/
    .mousedown(function () {
        playHadouken();
        $('.ryu-action').hide(); //(this line means hide all 4 divs)
        $('.how-to').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate({
                //this is end point for the animation
                'left': '300px',
                'height': '150px',
                'width': '150px'
            },
            //this is speed of the animation in milliseconds (500ms = 0.5 sec)
            500,
            function () {
                $(this).stop();
                $(this).hide();
                //this is start point for the animation
                $(this).css('left', '-212px');
            }
        );
    })

    /*    —> mouseup —> display the default state --> ryu-still (and hide everything else)*/
    .mouseup(function () {
        $('.ryu-action').hide(); //(this line means hide all 4 divs)
        $('.ryu-still').show();
        $('.how-to').show();
    });



    /*on key press
                —> keydown —> display ryu-cool (and hide everything else)*/
    $("body").keydown(function (e) {
        //keyCode == 88 is the X key
        if (e.which == 88) {
            $('.ryu-action').hide(); //(this line means hide all 4 divs)
            $('.ryu-cool').show();
            playCool()
        }
    });

    /*    —> keyup —> display the default state --> ryu-still (and hide everything else)*/
    $("body").keyup(function (e) {
        if (e.which == 88) {
            $('.ryu-action').hide(); //(this line means hide all 4 divs)
            $('.ryu-still').show();
            $('#cool')[0].pause();
        }
    });


    //close document ready
});

/*how to play a sound */
/*var hadoukenSound = false;*/

function playHadouken() {
    //if the sounds was playing before make sure it is stopped before starting a new one
    /* hadoukenSound = !hadoukenSound;
     if (hadoukenSound) */
    {
        $('#hadouken-sound')[0].volume = 0.5; //set the volume (0 => 0% and 1 => 100%; so 0.5 is 50%)
        $('#hadouken-sound')[0].load(); //load the sound into the memory
        $('#hadouken-sound')[0].play(); //play it
    }
}

/*var coolSound = false;*/

function playCool() {
    //if the sounds was playing before make sure it is stopped before starting a new one
    /*coolSound = !coolSound;
    if (coolSound)*/
    {
        $('#cool')[0].play();
    }
}
