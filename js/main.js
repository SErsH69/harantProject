$(function() {
    $('.faq_block__tit').on('click', function() {
        $(this).toggleClass('isOpened');
        $(this).parent().toggleClass('isOpened');
    })
})