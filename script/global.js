$(document).ready(function(){
     /* Load Components */
     $('.header').load('./components/header.html', function(){
        var page = getLocalStorage();
        
        $('.header-nav-item').removeClass('active-item'); 
        $('.header-nav-item[data-page="' + page + '"]').addClass('active-item');

        setTimeout(function() {
            var localPageID = '#body' + page;
                $('.body, .body-about, .body-work').hide();
                $(localPageID).show();
        }, 100);

        $(document).on('click', '.header-nav-item', function(){
            $('.header-nav-item').removeClass('active-item');
            $(this).addClass('active-item');

            $('.header-nav').removeClass('active-nav');
            $('.header-overlay').css('display', 'none');
            var dataPage = $(this).data('page');
            var pageID = '#body' + dataPage;
            console.log("PAGE BODY:", pageID);

            $('.body, .body-about, .body-work').hide();
            $(pageID).show();
            setLocalStorage(dataPage);
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

    $(document).on('click', '#letsChat', function () {
        $('#chatBot').load('./components/chatbot.html');
        $('.chatbot').css({
            "display": "block",
            "top": "100vh"
        }).animate({ top: "30vh" }, 500);
    });
    

    // $('.header-menu').load('./components/header-menu.html');

    // $('.header-page').load('../components/header.html');
    // $('.header-page-menu').load('../components/header-menu.html');

    $('.page-header').load('../components/page-header.html');
})