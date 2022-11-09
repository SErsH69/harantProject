$(function() {
    $('.faq_block__tit').on('click', function() {
        $(this).toggleClass('isOpened');
        $(this).parent().toggleClass('isOpened');
    });
    $('.cards_block__pref--more').on('click', function() {
        $(this).parent().find('.cards_block__pref').toggleClass('isActive');
        $(this).toggleClass('isOpened');
        if($(this).hasClass('isOpened')) {
            $(this).text('Скрыть')
        } else {
            $(this).text('Развернуть')
        }
    });
})