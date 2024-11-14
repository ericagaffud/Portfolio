$(document).ready(function() {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom >= 0
        );
    }

    function animateImages() {
        let delay = 0;

        $('.logoDiv img').each(function() {
            if (isInViewport(this) && !$(this).hasClass('animated')) {
                $(this).css('transition-delay', `${delay}s`);
                $(this).addClass('animated');
                delay += 0.5;
            }
        });
    }

    animateImages();

    $('.container').on('scroll', function() {
        animateImages();
    });
});
