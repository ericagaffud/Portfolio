$(document).ready(function(){
    console.log('HEADER ANIMATION LOADED!!!');
    

    $('.header-menu--item').on('click', function(){
        $('.header-menu').addClass('ascending');
    
        // Hide the menu after the animation completes
        // setTimeout(function() {
        //     $('.header-menu').hide();
        //     $('.header-menu').removeClass('ascending');
        // }, 1000);

        var page = $(this).data('page');
        window.location.href = page == '' ? 'index.html' : 'pages/' + page + '.html';
    });    
})