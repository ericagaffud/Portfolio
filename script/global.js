$(document).ready(function(){
     /* Load Components */
     $('.header').load('./components/header.html', function(){
        $('.header-nav-item[data-page="Home"]').addClass('active-item');

        $(document).on('click', '.header-nav-item', function(){
            $('.header-nav-item').removeClass('active-item');
            $(this).addClass('active-item');

            $('.header-nav').removeClass('active-nav');
            $('.header-overlay').css('display', 'none');

            var dataPage = $(this).data('page');
            var pageID = '#body' + dataPage;

            $('.body, .body-about, .body-work').hide();
            $(pageID).show(); 
        });
    });

    $('#bodyHome').load('./components/home.html', function(){
        $('#bodyAbout').load('./components/about.html', function(){
            $('#bodyWork').load('./components/work.html', function(){
                $('#bodyAbout, #bodyWork').hide();
            });
        });
    });

     /* Header Nav */
     $(document).on('click', '#headerMenu', function(){
        $('.header-nav').addClass('active-nav');
        $('.header-overlay').css('display', 'block');
    });

    $(document).on('click', '.header-nav-close', function(){
        $('.header-nav').removeClass('active-nav');
        $('.header-overlay').css('display', 'none');
    });

    // $('.header-menu').load('./components/header-menu.html');

    // $('.header-page').load('../components/header.html');
    // $('.header-page-menu').load('../components/header-menu.html');

    // $('.page-header').load('../components/page-header.html');
})