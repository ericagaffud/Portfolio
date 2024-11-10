$(document).ready(function(){
    $('.header-menu').load('../../components/header.html');

    $('.header--button').on('click', function(){
        $('.header-menu').css("display", "grid");
    })
})