$(document).ready(function() {
    const container = $('.container');
    const images = $('.container img');

    function animateOnScroll() {
        const containerTop = container.offset().top;
        const containerHeight = container.outerHeight();
        const containerCenterY = containerTop + containerHeight / 2;

        const scaleRange = containerHeight * 0.1;
        const upperBound = containerCenterY - scaleRange;
        const lowerBound = containerCenterY + scaleRange;

        images.each(function() {
            const img = $(this);
            const imgTop = img.offset().top;
            const imgBottom = imgTop + img.outerHeight();

            if (imgBottom > upperBound && imgTop < lowerBound) {
                img.css('transform', 'scale(2.5)');
            } else {
                img.css('transform', 'scale(1)');
            }
        });
    }

    container.on('scroll', animateOnScroll);
});