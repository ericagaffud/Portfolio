$(document).ready(function(){
    $('.header').load('./components/header.html');
    $('#bodyHome').load('./components/home.html');
    $('#bodyAbout').load('./components/about.html');
    $('#bodyWork').load('./components/work.html');

    /* Header Nav */
    $('#headerMenu').on('click', function(){
        $('.header-nav').addClass('active-nav');
        $('.header-overlay').css('display', 'block');
    });

    $('.header-nav-close').on('click', function(){
        $('.header-nav').removeClass('active-nav');
        $('.header-overlay').css('display', 'none');
    })

    /* Header Nav Ends */
    
    // $('.header-menu').load('./components/header-menu.html');

    // $('.header-page').load('../components/header.html');
    // $('.header-page-menu').load('../components/header-menu.html');

    // $('.page-header').load('../components/page-header.html');
})