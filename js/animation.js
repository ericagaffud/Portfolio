$(document).ready(function() {
    $('.bottom-short-strip, .top-short-strip').animate({
        height: '10px',
        width: '600px'
    },2000),
    $('.bottom-long-strip, .top-long-strip').animate({
        height: '10px',
        width: '900px'
    },2000),
    $('.top-big-circle').animate({
        left: '200px'
    },3000),
    $('.top-small-circle').animate({
        left: '50px'
    },3000),
    $('.bottom-big-circle').animate({
        right: '100px'
    }, 3000),
    $('.bottom-small-circle').animate({
        right: '250px'
    }, 3000),
    $('.left-strip').animate({
        height: '200px'
    }),
    $('.right-strip').animate({
        height: '350px'
    })
    
    
});

$(document).ready(function(){
    var firstbg = $('.first-bg');
    firstbg.animate({/* width: '100px', height: '130px', */ opacity: '0.2', marginTop: '-5em'}, "slow");
    firstbg.animate({/* width: '150px', height: '180px', */ opacity: '0.8', marginTop: '-3em'}, "slow");
    firstbg.animate({/* width: '200px', height: '230px', */ opacity: '0.2', marginTop: '-2em'}, "slow");
    firstbg.animate({/* width: '250px', height: '290px', */ opacity: '0.8', marginTop: '-1em'}, "slow");

    var thirdbg = $('.third-bg');
    thirdbg.animate({ /* width: '100px', height: '130px', */ opacity: '0.2', marginTop: '6em'}, "slow");
    thirdbg.animate({ /* width: '150px', height: '180px', */ opacity: '0.8', marginTop: '4em'}, "slow");
    thirdbg.animate({ /* width: '200px', height: '230px', */ opacity: '0.2', marginTop: '3em'}, "slow");
    thirdbg.animate({ /* width: '250px', height: '290px', */ opacity: '0.8', marginTop: '2em'}, "slow");

    /* $('img').hide(0).delay(500).fadeIn(3000); */
    var myPic = $('#myPic');
    myPic.animate({ opacity: '0' }, 2500);
    myPic.animate({ opacity: '1'})
})